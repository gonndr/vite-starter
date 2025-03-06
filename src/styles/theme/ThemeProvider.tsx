import { CssBaseline, CssVarsProvider as MuiThemeProvider } from '@mui/joy';
import { FC, PropsWithChildren } from 'react';
import theme from './theme';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
