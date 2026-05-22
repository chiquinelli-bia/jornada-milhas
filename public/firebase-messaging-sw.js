/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js",
);

const firebaseConfig = {
  apiKey: "AIzaSyC_gUfdkuhjlEBPyh6-DyEjcKsWcZq0lgc",
  authDomain: "jornada-milhas-a0dd6.firebaseapp.com",
  projectId: "jornada-milhas-a0dd6",
  storageBucket: "jornada-milhas-a0dd6.firebasestorage.app",
  messagingSenderId: "808887638818",
  appId: "1:808887638818:web:6af09f460f6058853ca37b",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Notificação em segundo plano", payload.notification);

  const notificationTitle = payload.notification.title;

  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
