import { Box, Container, Typography } from '@mui/joy';
import './App.scss';
import Dropdown from './components/shared/Dropdown';
import { DropdownOption } from './components/shared/types';
import { Mode } from './styles/theme/types';
import useTheme from './styles/theme/useTheme';

const themeOptions: DropdownOption<Mode>[] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

function App() {
  const { mode, setMode } = useTheme();

  return (
    <Container className="container">
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Dropdown options={themeOptions} onChange={setMode} value={mode} />
      </Box>
      <Box sx={{ width: '100%' }}>
        <Typography color="primary" sx={{ fontSize: 'lg', fontWeight: 'lg' }}>
          Vite + React + MUI Joy + Jest
        </Typography>
        <Typography level="h1" sx={{ fontWeight: 'xl' }}>
          A simple template to help get you get started with Vite and React.
        </Typography>
      </Box>
    </Container>
  );
}

export default App;
