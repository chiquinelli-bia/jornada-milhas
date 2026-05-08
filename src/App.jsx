import GlobalStyle from "./styles/global";
import Home from "./pages/Home";
import useNotification from "./hooks/useNotification";
import NotificationButton from "./components/NotificationButton";

function App() {
  const { sendTestNotification } = useNotification();
  return (
    <>
      <GlobalStyle />
      <NotificationButton action={sendTestNotification} />
      <Home />
    </>
  );
}

export default App;
