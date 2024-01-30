const nav = document.querySelector(".nav");
const panels = document.querySelectorAll(".panel");
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
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const ref = db.ref("message");

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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (window.location.hash === "#view") {
    // Manually redirect to the specified page
    var username = prompt("Enter your username:");
    var password = prompt("Enter your password:");

    var isAuthenticated = authenticateUser(username, password);

    if (isAuthenticated) {
      // Manually redirect to the specified page if login is successful
      window.location.href = "view.html";
    } else {
      // Handle unsuccessful login (e.g., show an error message)
      alert("Login unsuccessful. Please try again.");
    }
  }
  function authenticateUser(username, password) {
    return password === "password" && username === "admin";
  }
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const createdAt = new Date().toISOString();

    ref
      .push({
        name: name,
        email: email,
        subject: subject,
        createdAt: createdAt,
      })
      .then(function () {
        alert("Message submitted successfully!");
        form.reset();
      });
  });
});
