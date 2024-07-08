'use client';


import { PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import GlobalStyles from '@/app/styles/global';

export function Providers({ children }: PropsWithChildren) {
   return (
         <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
         </ThemeProvider>
   );
}
