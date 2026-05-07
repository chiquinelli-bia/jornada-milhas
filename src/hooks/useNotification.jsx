import { useEffect } from "react";

const useNotification = () => {
  const requestNotificationPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      alert("Permissão negada.");
    }
  };
  useEffect(() => {
    requestNotificationPermission();
  });
  return {};
};

export default useNotification;
