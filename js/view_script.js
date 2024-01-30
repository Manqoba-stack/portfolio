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

// Reference to your Firebase database
var database = firebase.database();

// Function to fetch and display data in the table
function fetchData() {
  var tableBody = document.querySelector("#data-table tbody");

  // Clear existing table data
  tableBody.innerHTML = "";

  // Reference to the data in your Firebase database
  var dataRef = database.ref("message");

  // Fetch data from Firebase
  dataRef.once("value").then(function (snapshot) {
    var count = 0;
    snapshot.forEach(function (childSnapshot) {
      var childData = childSnapshot.val();

      // Create a table row and append data
      var row = tableBody.insertRow();
      var cellCount = row.insertCell(0);
      var cellName = row.insertCell(1);
      var cellEmail = row.insertCell(2);
      var cellSubject = row.insertCell(3);
      var cellCreatedAt = row.insertCell(4);

      count++;
      cellCount.textContent = count;

      cellName.textContent = childData.name;
      cellEmail.textContent = childData.email;
      cellSubject.textContent = childData.subject;
      cellCreatedAt.textContent = childData.createdAt;
    });
  });
}
fetchData();
