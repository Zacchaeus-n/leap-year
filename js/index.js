// LEAP YEAR CALCULATOR

//Selecting DOM elements
const year = document.querySelector("#year");
const message = document.querySelector(".message");
const btn = document.querySelector("#submit");

//output variable
let message;

//function returns boolean for invalid inputs
const isNotValidInput = (value) =>
  value <= 0 || isNaN(value) || value === "" ? true : false;

const isLeapYear = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return `${year} is a Leap Year`;
      } else {
        return `${year} is not a Leap Year`;
      }
    } else {
      return `${year} is a Leap Year`;
    }
  } else {
    return `${year} is not a Leap Year`;
  }
};

console.log(isLeapYear(2032));
