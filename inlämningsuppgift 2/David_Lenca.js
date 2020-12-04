"use strict";

//user can only login with these names.
let usernames = ["yazeen", "ec", "softhouse"];

let form = document.createElement("form");
let input = document.createElement("input");

//Function that calls all other functions in order
//--Don't modify--
function init() {
  initLoginForm();
  initLabel();
  initInput();
  initButton();
}

function initLoginForm() {
  document.body.appendChild(form);
}

function initLabel() {
  let label = document.createElement("label");
  label.textContent = "username";
  form.appendChild(label);
}

function initInput() {
  input.required = true;
  form.appendChild(input);
}

function initButton() {
  let button = document.createElement("button");
  button.textContent = "login";
  form.appendChild(button);

  button.addEventListener("click", () => {
    if (validateLoginInfo() === true) {
      alert("Welcome");
    } else {
      input.style.border = "3px solid red";
    }
  });
}

function validateLoginInfo() {
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] === input.value) {
      return true;
    }
  }
  return false;
}

window.addEventListener("DOMContentLoaded", (event) => {
  init();
});