let loginBox = document.getElementById("loginBox");
let logoutBtn = document.getElementById("logoutBtn");
let message = document.getElementById("message");
let welcome = document.getElementById("welcome");

document.getElementById("loginBtn").onclick = function() {

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let correctEmail = "test@gmail.com";
  let correctPassword = "12345";

  if (email === "" || password === "") {

    message.textContent = "Please enter email and password";
    message.style.color = "orange";
    return;

  }

  if (email === correctEmail && password === correctPassword) {

    loginBox.style.display = "none";

    welcome.style.display = "block";

    welcome.textContent = "Welcome!, " + email;

    logoutBtn.style.display = "block";
    
    document.body.style.backgroundColor = "lightgreen";

  }

  else {

    message.textContent = "Wrong email or password";
    message.style.color = "red";

  }

};

logoutBtn.onclick = function () {

  welcome.style.display = "none";

  logoutBtn.style.display = "none";

  loginBox.style.display = "block";

  document.getElementById("email").value = "";

  document.getElementById("password").value = "";

  message.textContent = "";

  document.body.style.backgroundColor = "white";


};
