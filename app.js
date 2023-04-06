let inputEl = document.querySelector(".input");
let buttonEl = document.querySelector(".submit-btn");
let formEl = document.querySelector("#form");
let errorMessage = document.querySelector(".error-message");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (pattern.test(inputEl.value)) {
    buttonEl.classList.remove("error-btn");
    inputEl.classList.remove("error");
    errorMessage.classList.remove("active");
  } else {
    inputEl.classList.add("error");
    buttonEl.classList.add("error-btn");
    errorMessage.classList.add("active");
  }
});
