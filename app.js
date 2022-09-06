const btnContent = document.querySelector(".button-content")
const btnCode = document.querySelector(".button-code")
const btnFollow = document.querySelector(".follow")
const btnDisplay = document.querySelector(".print")
const textDisplay = document.querySelector(".text-display")
const body = document.querySelector("body");

let typedString = [];
let clickCounter = 0;
let pressed = [];
let colorCode = "!!!!!!";




   window.addEventListener("keydown", (e) => {
      if (clickCounter > 1) return;

     
      typedString.push(e.key);
      console.log(typedString);
      // let message = typedString.join("");
      // textDisplay.textContent = message;

   })



window.addEventListener("keydown", (e) => {
   // console.log(e)
   btnContent.style.color = '';


   btnCode.textContent = `Key code: ${e.keyCode}`;
   btnContent.textContent = `Pressed key: ${e.key}`;


   if (e.keyCode <= 90 && e.keyCode >= 65) {
      btnContent.style.color = "green";
   }
   if (e.keyCode <= 57 && e.keyCode >= 48) {
      btnContent.style.color = "orange";
   }
// ??????????????????????????????????????????????????????/
   // let message = typedString.join("");
   // textDisplay.textContent = message;
   // ?????????????????????????????????????????????????????/

   pressed.push(e.key);
   pressed.splice(-colorCode.length - 1, pressed.length - colorCode.length);

   if (pressed.join('').includes("black")) {
      body.style.backgroundColor = "black";
   }
   if (pressed.join('').includes("white")) {
      body.style.backgroundColor = "white";
   }
   if (pressed.join('').includes("red")) {
      body.style.backgroundColor = "red";
   }
   if (pressed.join('').includes("blue")) {
      body.style.backgroundColor = "blue";
   }
   if (pressed.join('').includes("green")) {
      body.style.backgroundColor = "green";
   }
   if (pressed.join('').includes("brown")) {
      body.style.backgroundColor = "prown";
   }
   if (pressed.join('').includes("pink")) {
      body.style.backgroundColor = "pink";
   }
   if (pressed.join('').includes("orange")) {
      body.style.backgroundColor = "orange";
   }
   if (pressed.join('').includes("gray")) {
      body.style.backgroundColor = "gray";
   }
   if (pressed.join('').includes("purple")) {
      body.style.backgroundColor = "purple";
   }
   if (pressed.join('').includes("brown")) {
      body.style.backgroundColor = "brown";
   }
   if (pressed.join('').includes("yellow")) {
      body.style.backgroundColor = "yellow";
   }
   if (pressed.join('').includes("gold")) {
      body.style.backgroundColor = "gold";
   }
})