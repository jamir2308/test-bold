import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography,
  Stack,
} from "@mui/material";
import { format } from "date-fns";
import { COLORS } from "@/app/styles/colors";
import Image from "next/image";
import TransactionDrawer from "../transaction-drawer/Index";
import { Transaction } from "@/app/types/transactions";
import { CustomTableCell, GradientHeader, SearchContainer, SearchInput } from "./style";

interface TransactionTableProps {
  transactions: Transaction[];
}

export interface HeadCell {
  id: string;
  padding: "none";
  label: string;
}

const headCells: HeadCell[] = [
  {
    id: "Transaction",
    padding: "none",
    label: "Transacción",
  },
  {
    id: "date",
    padding: "none",
    label: "Fecha y hora",
  },
  {
    id: "paymentMethod",
    padding: "none",
    label: "Método de pago",
  },
  {
    id: "IdTransaction",
    padding: "none",
    label: "ID transacción Bold",
  },
  {
    id: "amount",
    padding: "none",
    label: "Monto",
  },
];

const paymentIcon = {
  BANCOLOMBIA: "/payment/bancolombia.jpg",
  NEQUI: "/payment/nequi.png",
  MASTERCARD: "/payment/mastercard.svg",
  DAVIPLATA: "/payment/daviplata.svg",
  VISA: "/payment/visa.svg",
  PSE: "/payment/pse.png",
};

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleRowClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedTransaction(null);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    Object.values(transaction).some((value) => {
      if (typeof value === 'string' || typeof value === 'number') {
        return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false;
    })
  );

  return (
    <>
      <Paper>
        <GradientHeader>
          <Typography variant="body1" color='white'>Tus ventas de junio</Typography>
        </GradientHeader>
        <SearchContainer>
          <Image src="/search.svg" width={30} height={30} alt="Icono filtro" />
          <SearchInput
            placeholder="Buscar"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </SearchContainer>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {headCells.map(({ id, padding, label }) => (
                  <TableCell
                    key={id}
                    sx={{ padding: "5px 16px" }}
                    align="left"
                    padding={padding}
                    className="table-head"
                    color="#111e6c"
                  >
                    <Typography variant="body1" color="black">
                      {label}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTransactions
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((transaction, index) => (
                  <TableRow
                    hover
                    key={transaction.id}
                    onClick={() => handleRowClick(transaction)}
                  >
                    <CustomTableCell
                      padding="normal"
                      sx={{
                        borderLeft:
                          index % 2 === 0
                            ? "2px solid #121E6C"
                            : "2px solid #F3F3F3",
                      }}
                    >
                      <Stack direction="row" alignItems="center" gap={2}>
                        <Image
                          src={
                            transaction.salesType === "PAYMENT_LINK"
                              ? "/link.svg"
                              : "/terminal.svg"
                          }
                          width={20}
                          height={20}
                          alt="Logo Link"
                        />
                        <Typography variant="body2">
                          {transaction.status === "SUCCESSFUL"
                            ? "Cobro exitoso"
                            : "Cobro no realizado"}
                        </Typography>
                      </Stack>
                    </CustomTableCell>
                    <CustomTableCell padding="normal">
                      <Typography variant="body1" color="black">
                        {format(
                          new Date(transaction.createdAt),
                          "dd/MM/yyyy HH:mm:ss"
                        )}
                      </Typography>
                    </CustomTableCell>
                    <CustomTableCell padding="normal">
                      <Stack direction="row" alignItems="center" gap={2}>
                        <Image
                          src={
                            (transaction.franchise &&
                              paymentIcon[
                                transaction.franchise as keyof typeof paymentIcon
                              ]) ||
                            paymentIcon[
                              transaction.paymentMethod as keyof typeof paymentIcon
                            ]
                          }
                          width={20}
                          height={20}
                          alt="Icono filtro"
                        />{" "}
                        *** {transaction.transactionReference}
                      </Stack>
                    </CustomTableCell>
                    <CustomTableCell padding="normal">
                      {transaction.id}
                    </CustomTableCell>
                    <CustomTableCell padding="normal">
                      <Typography variant="body2" fontWeight={600}>
                        $ {transaction.amount.toLocaleString()}
                      </Typography>
                      {transaction.deduction && (
                        <Typography
                          variant="body2"
                          color={COLORS.DARK_GREY}
                          fontSize={12}
                        >
                          Deducción Bold
                        </Typography>
                      )}
                      {transaction.deduction && (
                        <Typography
                          variant="body2"
                          color="primary"
                          fontSize={12}
                        >
                          -${transaction.deduction?.toLocaleString()}
                        </Typography>
                      )}
                    </CustomTableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={transactions?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <TransactionDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        transaction={selectedTransaction}
      />
    </>
  );
};

export default TransactionTable;
