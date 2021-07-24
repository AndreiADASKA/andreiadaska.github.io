import { getApplicationDiv } from "./lib.js";

import { getHelpText, validateTriangle } from "./triangles/validation.js";
import { isTriangle } from "./triangles/geometry.js";
import { getAnswerPhrase } from "./triangles/output.js";
let sides;

let lowerBound;
let upperBound;

function renderErrorScreen(messages, helpText) {
   const fragment = new DocumentFragment();

   const errorListElement = document.createElement("ul");

   messages.forEach((message) => {
      const messageItem = document.createElement("li");
      messageItem.className = "message";
      messageItem.innerHTML = message;

      errorListElement.append(messageItem);
   });

   const helpTextElement = document.createElement("p");
   helpTextElement.className = "helptext";
   helpTextElement.innerHTML = helpText;

   fragment.append(errorListElement);
   fragment.append(helpTextElement);

   return fragment;
}

function renderAnswerScreen(answerPhrase, answer) {
   const answerElement = document.createElement("p");
   answerElement.innerHTML = answerPhrase;

   answerElement.className = answer ? "good" : " nogood";

   return answerElement;
}

function render(appRoot) {
   const validationResult = validateTriangle(sides, lowerBound, upperBound);

   if (!validationResult.isValid) {
      appRoot.append(
         renderErrorScreen(validationResult.errorMessages, getHelpText(lowerBound, upperBound))
      );

      return;
   }

   const answer = isTriangle(sides);

   appRoot.append(renderAnswerScreen(getAnswerPhrase(sides, answer), answer));
}

function main() {
   const appDiv = getApplicationDiv("#app");

   if (appDiv !== null) {
      render(appDiv);
   } else {
      console.log("App div not found");
   }
}

document.querySelector(".btn").onclick = () => {
   sides = [
      { sideName: "a", sideLength: parseInt(document.querySelector(".side_a").value) },
      { sideName: "b", sideLength: parseInt(document.querySelector(".side_b").value) },
      { sideName: "c", sideLength: parseInt(document.querySelector(".side_c").value) },
   ];

   lowerBound = +document.querySelector(".lower_num").value;
   upperBound = +document.querySelector(".upper_num").value;
   main();
};

export { main };
