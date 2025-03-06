import { Box, Container, Typography, useColorScheme } from '@mui/joy';
import './App.scss';
import Dropdown from './components/shared/Dropdown';
import { DropdownOption } from './components/shared/types';
import { Mode } from './styles/theme/types';

const themeOptions: DropdownOption<Mode>[] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

function App() {
  const { mode, setMode } = useColorScheme();

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: '100vh',
        minWidth: '100vh',
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Dropdown
          options={themeOptions}
          onChange={setMode}
          value={mode || null}
        />
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

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // );
}

export default App;
