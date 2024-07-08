import { createTheme } from '@mui/material/styles';
import { COLORS } from '@/app/styles/colors';

const buttonStyles = {
   height: '46px',
   textTransform: 'initial',
   fontFamily: 'inherit',
   fontWeight: 600,
   letterSpacing: '0.4px',
   fontSize: '14px',
};

export const themeOptions: any = {
   altBackground: false,
   typography: {
      fontFamily: [],
      body1: {
         color: COLORS.DARK_GREY,
         fontWeight: 400,
         letterSpacing: 0.15,
         fontSize: '14px',
      },
      body2: {
         color: COLORS.SECUNDARY,
         fontWeight: 400,
         width: 'fit-content',
         fontSize: '14px',
      },
      body3: {
         color: COLORS.DARK_GREY,
         fontWeight: 400,
         width: 'fit-content',
         fontSize: '14px',
      },
      body4: {
         color: 'black',
         fontWeight: 400,
         width: 'fit-content',
         fontSize: '14px',
      },
   },
   components: {
      MuiButton: {
         variants: [
            {
               props: { color: 'primary', variant: 'contained' },
               style: {
                  backgroundColor: COLORS.PRIMARY,
                  color: COLORS.WHITE,
                  ...buttonStyles,
               },
            },
            {
               props: { color: 'primary', variant: 'outlined' },
               style: {
                  backgroundColor: 'transparent',
                  color: COLORS.SECUNDARY,
                  ...buttonStyles,
               },
            },
            {
               props: { color: 'primary', variant: 'text' },
               style: {
                  backgroundColor: COLORS.WHITE,
                  color: COLORS.SECUNDARY,
                  ...buttonStyles,
               },
            },
         ],
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 600,
         md: 768,
         lg: 956,
         sl: 1200,
         xl: 1536,
      },
   },
   palette: {
      primary: {
         main: COLORS.PRIMARY,
      },
      secondary: {
         main: COLORS.SECUNDARY,
      },
      background: {
         default: COLORS.BACKGROUND,
      }
   },
}

export default createTheme(themeOptions);
