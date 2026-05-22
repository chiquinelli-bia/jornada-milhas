//ver o pq do botão de card promo n pegar e commitar tudo sobre componentes
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
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
      <Header />
      <StyledToastContainer />
      <NotificationButton action={requestToken} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
