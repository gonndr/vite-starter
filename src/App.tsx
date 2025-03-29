import {
  Box,
  Button,
  Container,
  Modal,
  ModalClose,
  ModalDialog,
  Typography,
} from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import Dropdown from './components/shared/Dropdown';
import { DropdownOption } from './components/shared/types';
import { setCurrentModal } from './state/stores/app/actions';
import { selectCurrentModal } from './state/stores/app/selectors';
import { Mode } from './styles/theme/types';
import useTheme from './styles/theme/useTheme';

const themeOptions: DropdownOption<Mode>[] = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
];

function App() {
  const dispatch = useDispatch();
  const currentModal = useSelector(selectCurrentModal);
  const { mode, setMode } = useTheme();
  const closeModal = () => dispatch(setCurrentModal(null));
  const openModal = () => dispatch(setCurrentModal('MODAL_DEFAULT'));

  const renderModal = () => (
    <Modal open={currentModal === 'MODAL_DEFAULT'} onClose={closeModal}>
      <ModalDialog>
        <ModalClose />
        <Typography>Hi World!</Typography>
      </ModalDialog>
    </Modal>
  );

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
        <Button onClick={openModal}>Open Modal</Button>
      </Box>
      {renderModal()}
    </Container>
  );
}

export default App;
