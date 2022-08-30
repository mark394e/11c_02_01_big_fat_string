"use strict";

document.addEventListener("DOMContentLoaded", start);

const output = document.querySelector("#output");
const inputField = document.querySelector("#input");

function start() {
  //   console.log("start");
  document.querySelector("#generate_output").addEventListener("click", convertInput);
}

function convertInput() {
  let inputFieldValue = inputField.value;
  let dropDownValue = document.querySelector("#dropdown").value;

  if (dropDownValue === "1") {
    output.value = inputFieldValue.substring(0, 1).toUpperCase() + inputFieldValue.substring(1, inputFieldValue.length).toLowerCase();
    // let inputFieldUpperCase = inputFieldValue[0].toUpperCase();
    // let remainingLetters = inputFieldValue.substring(1, inputFieldValue.length);
    // let inputFieldLowerCase = remainingLetters.toLowerCase();
    // output.value = inputFieldUpperCase + inputFieldLowerCase;
  } else if (dropDownValue === "2") {
    output.value = inputFieldValue.substring(0, inputFieldValue.indexOf(" "));
    // let firstSpace = inputFieldValue.indexOf(" ");
    // let firstName = inputFieldValue.substring(0, firstSpace);
    // output.value = firstName;
  } else if (dropDownValue === "3") {
    output.value = inputFieldValue.substring(0, inputFieldValue.indexOf(" ")).length;
    // let firstSpace = inputFieldValue.indexOf(" ");
    // let firstName = inputFieldValue.substring(0, firstSpace);
    // let firstNameLength = firstName.length;
    // let firstNameLengthString = firstNameLength.toString();
    // output.value = `The length of ${firstName} is ${firstNameLengthString}`;
  } else if (dropDownValue === "4") {
    output.value = inputFieldValue.substring(inputFieldValue.indexOf(" ") + 1, inputFieldValue.lastIndexOf(" "));
    // let firstSpace = inputFieldValue.indexOf(" ");
    // let lastSpace = inputFieldValue.lastIndexOf(" ");
    // let middelName = inputFieldValue.substring(firstSpace, lastSpace);
    // let middelNameTrim = middelName.trim();
    // output.value = `The middelname, ${middelNameTrim}, begins at index ${firstSpace} and ends at index ${lastSpace}`;
  } else if (dropDownValue === "5") {
    // if(inputFieldValue.endsWith(".jpg") || )
    let endsWithJpg = inputFieldValue.endsWith(".jpg");
    let endsWithPng = inputFieldValue.endsWith(".png");
    output.value = `The filename ends with .jpg: ${endsWithJpg}. The filename ends with .png: ${endsWithPng}.`;
  } else if (dropDownValue === "6") {
    let securePassword = "";
    securePassword = securePassword.padEnd(inputFieldValue.length, "*");
    output.value = `Here is your secure password: ${securePassword}`;
  } else if (dropDownValue === "7") {
    let thirdLetter = inputFieldValue.substring(2, 3);
    let thirdLetterCap = thirdLetter.toUpperCase();
    let nameStart = inputFieldValue.substring(0, 2);
    let nameStartLower = nameStart.toLowerCase();
    let nameEnd = inputFieldValue.substring(3, inputFieldValue.length);
    let nameEndLower = nameEnd.toLowerCase();
    output.value = nameStartLower + thirdLetterCap + nameEndLower;
  } else if (dropDownValue === "8") {
    let previousChar;
    let currentChar;
    output.value = inputFieldValue[0].toUpperCase();
    for (let i = 1; i < inputFieldValue.length; i++) {
      previousChar = inputFieldValue[i - 1];
      if (previousChar === " " || previousChar === "-") {
        currentChar = inputFieldValue[i].toUpperCase();
      } else {
        currentChar = inputFieldValue[i];
      }
      output.value += currentChar;
    }
  } else {
    output.value = "Not implemented yet";
  }
}
