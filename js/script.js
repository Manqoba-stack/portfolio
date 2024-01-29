const nav = document.querySelector(".nav");

const panels = document.querySelectorAll(".panel");
window.addEventListener("scroll", alignNav);

function alignNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

const firebaseConfig = {
  apiKey: "AIzaSyBVqWjKc-MARejU5wu_tUUk9fM9xWLOQoQ",
  authDomain: "portfolio-api-bb59c.firebaseapp.com",
  databaseURL: "https://portfolio-api-bb59c-default-rtdb.firebaseio.com",
  projectId: "portfolio-api-bb59c",
  storageBucket: "portfolio-api-bb59c.appspot.com",
  messagingSenderId: "711410063207",
  appId: "1:711410063207:web:87103eff71e959443601c2",
  measurementId: "G-CGYT8XL5V7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("subject").value;

    var database = firebase.database();
    database.ref("message").set({
      name: name,
      email: email,
      message: message,
    });
  });
});
