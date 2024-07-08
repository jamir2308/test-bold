import React, { useEffect, useState } from "react";
import {
  Typography,
  Checkbox,
  FormControlLabel,
  IconButton,
  FormGroup,
} from "@mui/material";
import { COLORS } from "@/app/styles/colors";
import { getSessionStorage } from "@/app/utils/sessionStorage";
import {
  ApplyButton,
  BodyMenu,
  Header,
  Placeholder,
  StyledMenu,
} from "./style";

interface FilterModal {
  open: boolean;
  handleClose: () => void;
  anchorEl: any;
  onApply: (filters: {
    dataphone: boolean;
    paymentLink: boolean;
    all: boolean;
  }) => void;
}

const FilterModal = ({ open, handleClose, anchorEl, onApply }: FilterModal) => {
  const [filters, setFilters] = useState({
    dataphone: false,
    paymentLink: false,
    all: true,
  });

  useEffect(() => {
    const storedFilters = getSessionStorage("modal-filters");
    if (storedFilters) {
      setFilters(storedFilters);
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (name === "all") {
      setFilters({
        dataphone: false,
        paymentLink: false,
        all: checked,
      });
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: checked,
        all: false,
      }));
    }
  };

  const handleApply = () => {
    onApply(filters);
    handleClose();
  };

  return (
    <StyledMenu
      id="demo-positioned-menu"
      aria-labelledby="demo-positioned-button"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Header>
        <Placeholder />
        <Typography variant="body2" fontSize="16px" fontWeight={600}>
          Filtrar
        </Typography>
        <IconButton onClick={handleClose}>x</IconButton>
      </Header>

      <BodyMenu>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.dataphone}
                onChange={handleChange}
                name="dataphone"
              />
            }
            label="Cobro con datáfono"
            color={COLORS.SECUNDARY}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.paymentLink}
                onChange={handleChange}
                name="paymentLink"
              />
            }
            label="Cobro con link de pago"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filters.all}
                onChange={handleChange}
                name="all"
              />
            }
            label="Ver todos"
          />
        </FormGroup>
        <ApplyButton onClick={handleApply}>Aplicar</ApplyButton>
      </BodyMenu>
    </StyledMenu>
  );
};

export default FilterModal;
