import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastDisplay from "../components/ToastDisplay";
import { onMessageListener, requestToken } from "../firebase";

const useFirebaseNotification = () => {
  const [notification, setNotification] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    const notify = () =>
      toast(<ToastDisplay notification={notification} />, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
      });
    if (notification.title) {
      notify();
    }
  }, [notification]);
  useEffect(() => {
    console.log("HOOK RODANDO");

    requestToken();

    onMessageListener((payload) => {
      console.log("PAYLOAD NO HOOK", payload);

      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    });
  }, []);

  return {};
};

export default useFirebaseNotification;
