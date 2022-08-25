import { Provider as PaperProvider } from 'react-native-paper';
import { LoginScreen } from './app/screens/login/login.screen';
import { theme } from './App.style';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <LoginScreen />
    </PaperProvider>
  );
}
