"use client";
import {
  Stack,
} from "@mui/material";
import Image from "next/image";
import { CustomLink, CustomToolbar, CustomTooltip, HeaderContainer, NavLinks } from "./style";

function Header() {
  return (
    <HeaderContainer position="static">
      <CustomToolbar>
        <Image priority src="/logo-bold.png" width={170} height={55} alt="bold Logo" />
        <NavLinks>
          <CustomLink color="white" href="#">Mi negocio</CustomLink>
          <Stack direction='row' alignItems='center' spacing={1}>
            <CustomLink color="white" href="#">Ayuda</CustomLink>
            <CustomTooltip title={"Visita https://bold.co"}>
            <Image src="/question.svg" width={17} height={17} alt="Icono Info" />
            </CustomTooltip>
          </Stack>
        </NavLinks>
      </CustomToolbar>
    </HeaderContainer>
  )
}

export default Header;