firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
//   let name = document.querySelector(".name").value;
  let email = document.querySelector(".input-field").value;
  let message = document.querySelector(".move-textarea").value;
  console.log( email, message);

  saveContactInfo( email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo( email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    // name: name,
    email: email,
    message: message,
  });
}