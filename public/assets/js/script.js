// The function toggles more (hidden) text when the user clicks on "Read more". The IF ELSE statement ensures that the text 'read more' and 'read less' changes interchangeably when clicked on.
$('.moreless-button').click(function() {
  $('.moretext').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs4iHoDFsC-SoaBQrsupgt3OjDzk3ViOw",
  authDomain: "fifth-generation-technology.firebaseapp.com",
  projectId: "fifth-generation-technology",
  storageBucket: "fifth-generation-technology.appspot.com",
  messagingSenderId: "123695602458",
  appId: "1:123695602458:web:04f024795e5f6ee4a32aa3",
  measurementId: "G-GLMTD5W6BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);