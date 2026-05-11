import GlobalStyle from "./styles/global";
import Home from "./pages/Home";
import useNotification from "./hooks/useNotification";
import NotificationButton from "./components/NotificationButton";
import { requestToken } from "./firebase";

function App() {
  const {} = useNotification();
  return (
    <>
      <GlobalStyle />
      <NotificationButton action={requestToken} />
      <Home />
    </>
  );
}

export default App;
