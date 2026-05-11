import GlobalStyle from "./styles/global";
import Home from "./pages/Home";
import NotificationButton from "./components/NotificationButton";
import { requestToken } from "./firebase";

function App() {
  return (
    <>
      <GlobalStyle />
      <NotificationButton action={requestToken} />
      <Home />
    </>
  );
}

export default App;
