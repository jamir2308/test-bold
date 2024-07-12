import { Box, Button, Stack } from "@mui/material";
import styled from "styled-components";
import { COLORS } from "../styles/colors";

export const StyledButton = styled(Button)`
  width: 170px;
  border-radius: 4px;
`;

export const PageContainer = styled(Box)`
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

export const BodyContainer = styled(Stack)`
    background-color: ${COLORS.BACKGROUND};
    min-height: calc(100vh - 96px);
    padding: 0px 4% 4%;
`;