
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const form = document.getElementById("signInForm");
const table = document.getElementById("records");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const unit = document.getElementById("unit").value;
  const signIn = document.getElementById("SignIn").value;
  const signOut = document.getElementById("SignOut").value;

  // Save the data to Firebase
  database.ref("signins").push({
    name: name,
    unit: unit,
    signIn: signIn,
    signOut: signOut
  });

  form.reset();
});

// Listen for new sign-ins and add them to the table
database.ref("signins").on("child_added", function(snapshot) {
  const signInData = snapshot.val();
  const row = table.insertRow();
  row.insertCell(0).innerText = signInData.name;
  row.insertCell(1).innerText = signInData.unit;
  row.insertCell(2).innerText = signInData.signIn;
  row.insertCell(3).innerText = signInData.signOut;
});

// The exportData function is no longer needed as the data is stored in Firebase.
function exportData() {
    alert("This feature has been removed. Your data is now stored in a database.");
}

