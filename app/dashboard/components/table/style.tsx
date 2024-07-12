import { COLORS } from "@/app/styles/colors";
import { TableCell } from "@mui/material";
import styled from "styled-components";

export const GradientHeader = styled.div`
  background: linear-gradient(90deg, #121e6c 0%, #ee424e 100%);
  padding: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid ${COLORS.LIGHT_GREY};
  padding: 6px;
  height: 50px;
  width: 100%;
`;

export const SearchInput = styled.input`
  border: none;
  width: 100%;
  padding: 8px;
  outline: none;
  margin-left: 8px;
  font-size: 1rem;
  background: transparent;
`;

export const CustomTableCell = styled(TableCell)`
  align-content: flex-start;
  padding: 10px 16px;
  height: 80px;
`;