import { breakpoints } from "@/app/utils/constants";
import { Box, Drawer } from "@mui/material";
import styled from "styled-components";

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 40vw;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
    padding: 30px;
    @media (max-width: ${breakpoints.mobile}) {
    width: 80vw;
  }
  }
`;

export const DrawerHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const DrawerContent = styled(Box)`
  padding: 16px;
`;