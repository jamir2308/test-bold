import { COLORS } from "@/app/styles/colors";
import { breakpoints } from "@/app/utils/constants";
import {
  AppBar,
  Toolbar,
  Tooltip,
  TooltipProps,
  tooltipClasses,
} from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

export const HeaderContainer = styled(AppBar)`
  background: linear-gradient(
    90deg,
    ${COLORS.SECUNDARY} 0%,
    ${COLORS.SECUNDARY} 20%,
    ${COLORS.PRIMARY} 80%,
    ${COLORS.PRIMARY} 100%
  );
  height: 96px;
  display: flex;
  justify-content: center;
`;

export const CustomToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 4%;
  margin-right: 8%;
  padding: 0px;
`;

export const CustomLink = styled(Link)`
  color: ${COLORS.WHITE};
  text-decoration: none;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
    visibility: hidden;
  }
`;

export const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))((_) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: COLORS.SECUNDARY,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: COLORS.SECUNDARY,
  },
}));
