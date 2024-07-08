"use client";
import React, { MouseEvent, useEffect, useState } from "react";
import FilterTabs from "./components/filter-tabs/Index";
import { Box, Button, CircularProgress, Stack } from "@mui/material";
import SalesCard from "./components/sales-card/Index";
import styled from "styled-components";
import Image from "next/image";
import TransactionTable from "./components/table/Index";
import FilterModal from "./components/filter-modal/Index";
import { Transaction } from "../types/transactions";
import { getSessionStorage, setSessionStorage } from "../utils/sessionStorage";

const StyledButton = styled(Button)`
  width: 170px;
  border-radius: 4px;
`;

const PageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  padding: 20px;

  @media (max-width: 960px) {
    padding: 10px;
    flex-direction: column;
  }
`;

const filterTransactions = (
  transactions: Transaction[],
  filter: string,
  additionalFilters: { dataphone: boolean; paymentLink: boolean; all: boolean }
): Transaction[] => {
  const now = new Date();
  let filtered = transactions;

  switch (filter) {
    case "Hoy":
      filtered = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.createdAt);
        return transactionDate.toDateString() === now.toDateString();
      });
      break;
    case "Esta Semana":
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      filtered = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.createdAt);
        return transactionDate >= startOfWeek && transactionDate <= endOfWeek;
      });
      break;
    case "Julio":
      filtered = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.createdAt);
        return transactionDate.getMonth() === 6;
      });
      break;
    default:
      filtered = transactions;
  }

  if (!additionalFilters.all) {
    filtered = filtered.filter((transaction) => {
      if (additionalFilters.dataphone && transaction.salesType === "TERMINAL") {
        return true;
      }
      if (
        additionalFilters.paymentLink &&
        transaction.salesType === "PAYMENT_LINK"
      ) {
        return true;
      }
      return false;
    });
  }

  return filtered;
};

function Page() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    Transaction[]
  >([]);
  const [filter, setFilter] = useState<"Hoy" | "Esta Semana" | "Julio">("Hoy");
  const [loading, setLoading] = useState(true);
  const [additionalFilters, setAdditionalFilters] = useState({
    dataphone: false,
    paymentLink: false,
    all: true,
  });

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (newFilter: "Hoy" | "Esta Semana" | "Julio") => {
    setFilter(newFilter);
    setSessionStorage("tab-filter", newFilter);
  };

  const handleApplyFilters = (filters: {
    dataphone: boolean;
    paymentLink: boolean;
    all: boolean;
  }) => {
    setAdditionalFilters(filters);
    setSessionStorage("modal-filters", filters);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/transactions");
      const data: Transaction[] = await response.json();
      setTransactions(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const tabFilter = getSessionStorage("tab-filter");
    if (tabFilter) setFilter(tabFilter);
    const modalFilter = getSessionStorage("modal-filters");
    if (modalFilter) setAdditionalFilters(modalFilter);
  }, []);

  useEffect(() => {
    setFilteredTransactions(
      filterTransactions(transactions, filter, additionalFilters)
    );
  }, [filter, transactions, additionalFilters]);

  if (loading) {
    return (
      <PageContainer>
        <CircularProgress />
      </PageContainer>
    );
  }

  const totalSales = filteredTransactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );

  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "column",  lg: "row"}}
        gap={2}
        spacing={2}
        mt={4}
        mb={2}
      >
        <SalesCard
          title={`Tus ventas de ${filter}`}
          amount={`$ ${totalSales.toLocaleString()}`}
          filter={filter}
        />
        <Stack direction="column" alignItems={{ xs: "flex-start", sm: "flex-end" }} gap={2} width="100%">
          <FilterTabs onFilterChange={handleFilterChange} filter={filter} />
          <StyledButton
            endIcon={
              <Image
                src="/filter-outline.svg"
                width={24}
                height={18}
                alt="Icono filtro"
              />
            }
            onClick={handleClick}
            id="demo-positioned-button"
          >
            Filtrar
          </StyledButton>
        </Stack>
      </Stack>
      <Stack>
        <TransactionTable transactions={filteredTransactions} />
      </Stack>
      <FilterModal
        open={open}
        handleClose={handleClose}
        anchorEl={anchorEl}
        onApply={handleApplyFilters}
      />
    </Box>
  );
}

export default Page;
