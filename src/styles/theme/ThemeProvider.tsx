import {
  CssBaseline,
  CssVarsProvider as MuiThemeProvider,
  StyledEngineProvider,
} from '@mui/joy';
import { FC, PropsWithChildren } from 'react';
import theme from './theme';

type Props = PropsWithChildren & { injectCssFirst?: boolean };

const ThemeProvider: FC<Props> = ({ injectCssFirst, children }) => (
  <StyledEngineProvider injectFirst={injectCssFirst}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  </StyledEngineProvider>
);

export default ThemeProvider;
