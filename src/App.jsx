import GlobalStyle from "./styles/global";
import Home from "./pages/Home";
import useNotification from "./hooks/useNotification";
import NotificationButton from "./components/NotificationButton";

function App() {
  const {} = useNotification();
  return (
    <>
      <GlobalStyle />
      <NotificationButton />
      <Home />
    </>
  );
}

export default App;
