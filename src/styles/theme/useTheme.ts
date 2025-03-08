import { useColorScheme } from '@mui/joy';
import { Mode } from './types';

type Result = {
  mode: Mode | null;
  setMode: (mode: Mode | null) => void;
};

const useTheme = (): Result => {
  const { mode = null, setMode } = useColorScheme();
  return { mode, setMode };
};

export default useTheme;
