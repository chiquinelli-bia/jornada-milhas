import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC_gUfdkuhjlEBPyh6-DyEjcKsWcZq0lgc",
  authDomain: "jornada-milhas-a0dd6.firebaseapp.com",
  projectId: "jornada-milhas-a0dd6",
  storageBucket: "jornada-milhas-a0dd6.firebasestorage.app",
  messagingSenderId: "808887638818",
  appId: "1:808887638818:web:6af09f460f6058853ca37b",
};

const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

export const requestToken = async () => {
  try {
    const permission = await Notification.requestPermission();

    if (permission !== "granted") {
      console.log("Permissão negada");
      return;
    }

    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js",
    );

    console.log("SW REGISTRO:", registration);

    const currentToken = await getToken(messaging, {
      vapidKey:
        "BOYcwIyeEIIw1CrhJlXlfRsS138wIREEnu9wfk0LwghPt6prQzVr9W9CaZwvyqiYBFzXL2nCjpp_TsD1gwwwct8",
      serviceWorkerRegistration: registration,
    });

    console.log("TOKEN:", currentToken);
  } catch (err) {
    console.log(err);
  }
};

export const onMessageListener = (callback) => {
  console.log("Listener registrado");

  onMessage(messaging, (payload) => {
    console.log("CHEGOU MESSAGE", payload);

    callback(payload);

    if (Notification.permission === "granted") {
      new Notification(payload.notification.title, {
        body: payload.notification.body,
      });
    }
  });
};
