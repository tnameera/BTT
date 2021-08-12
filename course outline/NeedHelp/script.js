//Step 8: 

//a. Select the div with the  id = "first" and put it into a variable
let first = document.querySelector("#first");
console.log(first);

//b. Select the div with the  id = "last" and put it into a variable
let last = document.querySelector("#last");
console.log(last);

//c. Select the button with the  id = "submitButton" and put it into a variable called button
let button = document.querySelector("#submitButton");

//d. Select the div with the  id = "print" and put it into a variable called printArea
let printArea = document.querySelector("#print");

//Step 9: Add an event listener to the button
button.addEventListener("click", (e) => {
  printArea.innerHTML += `<p>Thank You ${first.value} ${last.value}. Someone will contact you shortly. </p>`;
  first.value = "";
  last.value = "";
 });

//Step 10: INSIDE THE EVENT LISTENER: Add first name and last name to the printArea row with a message inside of tags (can be p tag or any h tag)

//Step 11: INSIDE THE EVENT LISTENER: reset the values 
