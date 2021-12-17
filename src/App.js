import './App.css';
import Container from './Components/container/Container';
import { ThemeProvider } from './Context/themeContext/themeContext';
import { UserProvider } from './Context/userContext/UserContext';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Container />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
