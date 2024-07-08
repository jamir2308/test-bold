import { COLORS } from "@/app/styles/colors";
import { breakpoints } from "@/app/utils/constants";
import { CardContent, TooltipProps, Typography, tooltipClasses, Tooltip } from "@mui/material";
import styled from "styled-components";

export const SalesCardContainer = styled.div`
  background: ${COLORS.WHITE};
  min-width: 400px;
  height: 152px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.xs}) {
    min-width: 300px;
  }
`;

export const GradientHeader = styled.div`
  background: linear-gradient(
    90deg,
    ${COLORS.SECUNDARY} 0%,
    ${COLORS.SECUNDARY} 20%,
    ${COLORS.PRIMARY} 80%,
    ${COLORS.PRIMARY} 100%
  );
  padding: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const SalesCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 400px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.xs}) {
    min-width: 300px;
  }
`;

export const GradientText = styled(Typography)`
  background: linear-gradient(
    90deg,
    #2e2469  0%,
    #85305e 50%,
    #85305e 70%,
    #EE424E 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: 600;
  display: inline-block;
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