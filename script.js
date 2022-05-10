const form = document.getElementById("form");
const eAddress = document.getElementById("email");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const pass = document.getElementById("pass");
const message = document.getElementById("valMsg");
const valMsg = document.querySelector(".valMsg");

form.addEventListener("submit", (e) => {
  const validRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (fname.value === "") {
    fname.style.border = "1px solid red";
  } else {
    fname.style.border = "1px solid #a1a1a1";
    message.innerHTML = "";
  }

  if (lname.value === "") {
    lname.style.border = "1px solid red";
  } else {
    lname.style.border = "1px solid #a1a1a1";
    message.innerHTML = "";
  }

  if (pass.value === "") {
    message.innerHTML = "Enter your Password";
    pass.style.border = "1px solid red";
  } else {
    pass.style.border = "1px solid #a1a1a1";
    message.innerHTML = "";
  }
  if (eAddress.value.match(validRegex)) {
    eAddress.style.border = "1px solid green";
    return true;
  } else {
    valMsg.classList.add("invalid");
    message.innerHTML = "Invalid Email Address!";
    return false;
  }
});
