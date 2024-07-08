"use client";

import { Typography } from "@mui/material";
import Image from "next/image";
import { getWeekRange, monthNames } from "@/app/utils/constants";
import { CustomTooltip, GradientHeader, GradientText, SalesCardContainer, SalesCardContent } from "./style";

interface SalesCardProps {
    title: string;
    amount: string;
    filter: "Hoy" | "Esta Semana" | "Julio";
}

const dateSalesCard = {
    "Hoy": `${new Date().getDate()} de ${monthNames[new Date().getMonth()]} ${new Date().getFullYear()}`,
    "Esta Semana":  getWeekRange(),
    "Julio": `${monthNames[new Date().getMonth()]} ,${new Date().getFullYear()}`
}

const SalesCard: React.FC<SalesCardProps> = ({ title, amount, filter }) => {
    return (
        <SalesCardContainer>
            <GradientHeader>
                <Typography variant="body1" color='white'>{title}</Typography>
                <CustomTooltip title={"Aqui encontraras el resumen de Hoy"}>
                    <Image src="/info-circle.svg" width={16} height={16} alt="Icono Info" />
                </CustomTooltip>
            </GradientHeader>
            <SalesCardContent>
                <GradientText variant="h5" align="center" fontWeight={600}>
                    {amount}
                </GradientText>
                <Typography mt={2} variant="body2" align="center">
                    {dateSalesCard[filter]}
                </Typography>
            </SalesCardContent>
        </SalesCardContainer>
    );
};

export default SalesCard;
