"use client";

import {
    Container,
    Stack,
} from "@mui/material";
import React, { ReactNode } from "react";
import { COLORS } from "../styles/colors";
import Header from "../components/header/Index";
import styled from "styled-components";

const BodyContainer = styled(Stack)`
    background-color: ${COLORS.BACKGROUND};
    min-height: calc(100vh - 96px);
    padding: 0px 4% 4%;
`;

function Index({ children }: { children: ReactNode }) {
    return (
        <Container disableGutters maxWidth={false}>
            <Header/>
            <BodyContainer>{children}</BodyContainer>
        </Container>
    );
}

export default Index;
