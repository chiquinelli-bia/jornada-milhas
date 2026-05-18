import GlobalStyle from "./styles/global";
import Home from "./pages/Home";
import NotificationButton from "./components/NotificationButton";
import { requestToken } from "./firebase";
import { ToastContainer } from "react-toastify";
import useFirebaseNotification from "./hooks/useFirebaseNotification";
import styled from "styled-components";

const StyledToastContainer = styled(ToastContainer)`
  .Toastify-toast {
    font-size: 16px;
    font-weight: 600;

    &-theme--light {
      background: #ffffff;
      color: #5a189a;
    }
  }
`;

function App() {
  useFirebaseNotification();
  return (
    <>
      <GlobalStyle />
      <StyledToastContainer />

      <NotificationButton action={requestToken} />
      <Home />
    </>
  );
}

export default App;
