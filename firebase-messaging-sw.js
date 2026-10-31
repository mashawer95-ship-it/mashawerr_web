// Firebase Messaging Service Worker for Mashaweer Web
// Handles background push notifications when the browser tab is closed or in background.

importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDVsu5zpnBu33BMFEATUUjiOZVIPXityL8",
  authDomain: "mashawerr.firebaseapp.com",
  projectId: "mashawerr",
  storageBucket: "mashawerr.firebasestorage.app",
  messagingSenderId: "9129249114",
  appId: "1:9129249114:web:cf0312057da09862c3cb63"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background notification: ', payload);
  const notificationTitle = payload.notification?.title || payload.data?.title || 'إشعار جديد من مشاوير';
  const notificationOptions = {
    body: payload.notification?.body || payload.data?.body || 'لديك تحديث جديد على طلبك في مشاوير.',
    icon: '/icons/Icon-192.png',
    badge: '/favicon.png',
    data: payload.data
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
