"use client";
import React from "react";
import { monthNames } from "@/app/utils/constants";
import { FilterContainer, StyledButton } from "./style";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface FilterTabsProps {
  onFilterChange: any;
  filter: string;
}

const filterOptions = [
  { label: "Hoy", value: "Hoy" },
  { label: "Esta Semana", value: "Esta Semana" },
  {
    label: monthNames[new Date().getMonth()],
    value: monthNames[new Date().getMonth()],
  },
];

const FilterTabs: React.FC<FilterTabsProps> = ({ onFilterChange, filter }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <FilterContainer>
        {!isMobile && filterOptions.map((option) => (
        <StyledButton
          key={option.value}
          $isActive={filter === option.value}
          onClick={() => onFilterChange(option.value)}
        >
          {option.label}
        </StyledButton>
      ))}
      </FilterContainer>
      {isMobile && (
          <FormControl fullWidth>
            <InputLabel id="demo-label">Rango Fechas</InputLabel>
            <Select
              labelId="demo-label"
              value={filter}
              onChange={(event) => onFilterChange(event.target.value)}
              input={<OutlinedInput label="Filtro Fechas" />}
            >
              {filterOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )
      }
    </>
  );
};

export default FilterTabs;
