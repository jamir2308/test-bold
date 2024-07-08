import { COLORS } from "@/app/styles/colors";
import { Button } from "@mui/material";
import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  padding: 25px 6px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    display: none;
  }
`;

export const StyledButton = styled(Button)<{ $isActive: boolean }>`
  background-color: ${({ $isActive }) => ($isActive ? COLORS.LIGHT_GREY : 'transparent')};
  width: 30%;
  height: 36px;
  color: ${COLORS.SECUNDARY};
  text-transform: none;
  border-radius: 20px;
  &:hover {
    background-color: ${COLORS.LIGHT_GREY};
  }

  @media (max-width: 600px) {
    padding: 4px 8px;
    font-size: 0.875rem;
  }
`;