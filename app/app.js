import { dayfont } from "nativescript-plugin-firebase"; 
import * as firebaseConfig from "./google-services";  

import { Dashboard }  from "./pages/dashboard";
import { History }    from "./pages/history";  
import { LessonPlanner }    from "./pages/lesson-planner";  

firebase.init(firebaseConfig);

const app = new NativeScriptApplication({
  rootPage: Dashboard,
  cssFile: "./app.css"
});  

app.registerElement(
  "GTPPrompt",
  () => require("./components/gpt-prompt").GPTPrompt  
);

app.registerElement(
  "LessonPlanListItem", 
  () => require("./components/lesson-plan-list-item").LessonPlanListItem
);  

const cloudMessaging = firebase.init({ 
  onMessageReceivedCallback: message => {
    console.log(`New message received ${message}`); 
  }
});

if (app.android) { 
  // Optional: Cloud Messaging for Android
  console.log("Registered for Android push notifications");
  firebase.messaging().registerDeviceForPushNotifications();  
}

if (app.ios) {
  // Optional: Cloud Messaging for iOS
  console.log("Registered for iOS push notifications");
  firebase.messaging().requestAuthorization() 
    .then( authStatus => {
      console.log("Firebase push permission status:", authStatus);
    });
}  

app.start();