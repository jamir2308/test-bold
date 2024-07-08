import { Box, Button, Menu } from "@mui/material";
import styled, { keyframes } from "styled-components";

export const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledMenu = styled(Menu)`
  animation: ${slideIn} 0.4s ease-in-out;
`;

export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  width: 350px;
`;

export const Placeholder = styled(Box)`
  width: 28px;
`;

export const BodyMenu = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 20px 5px 20px;
  width: 100%;
`;

export const ApplyButton = styled(Button)`
  background-color: #ff6f61;
  color: white;
  width: 100%;
  padding: 10px;
  border-radius: 25px;
  margin-top: 10px;
  &:hover {
    background-color: #ff6f61;
  }
`;