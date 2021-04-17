import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyA8uswKSR65f4W4nwxZMD4yNiFjw-CikUU",
    authDomain: "cashflow-1611262123922.firebaseapp.com",
    projectId: "cashflow-1611262123922",
    storageBucket: "cashflow-1611262123922.appspot.com",
    messagingSenderId: "929751610302",
    appId: "1:929751610302:web:44b922c86ddca630903fef"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
