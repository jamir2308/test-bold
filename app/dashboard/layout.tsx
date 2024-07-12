"use client";

import {
    Container
} from "@mui/material";
import React, { ReactNode } from "react";
import Header from "../components/header/Index";
import { BodyContainer } from "./style";

function Index({ children }: { children: ReactNode }) {
    return (
        <Container disableGutters maxWidth={false}>
            <Header/>
            <BodyContainer>{children}</BodyContainer>
        </Container>
    );
}

export default Index;
