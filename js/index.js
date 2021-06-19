// LEAP YEAR CALCULATOR

//Selecting DOM elements
const yearInput = document.querySelector("#year");
const message = document.querySelector(".message");
const btn = document.querySelector("#submit");

//output variable
let output;

//function returns boolean for invalid inputs
const isNotValidInput = (value) =>
  value <= 0 || isNaN(value) || value === "" ? true : false;

const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        output = `${year} is a Leap Year`;
      } else {
        output = `${year} is not a Leap Year`;
      }
    } else {
      output = `${year} is a Leap Year`;
    }
  } else {
    output = `${year} is not a Leap Year`;
  }
  message.classList.add("show");
  return (message.textContent = output);
};

const inputHandler = (e) => {
  e.preventDefault();
  const year = yearInput.value;
  !isNotValidInput(year) ? isLeapYear(year) : null;
};

yearInput.addEventListener(`keyup`, () => {
  if (isNotValidInput(yearInput.value)) {
    yearInput.classList.add("error");
    message.classList.add("danger");
    message.innerHTML = `Please enter a valid year`;
  } else {
    yearInput.classList.remove("error");
    message.classList.remove("show");
    message.classList.remove("danger");
    message.innerHTML = ``;
    btn.disabled = false;
  }
});

btn.addEventListener(`click`, inputHandler);
