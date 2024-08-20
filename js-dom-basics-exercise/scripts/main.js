// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey, I'm red!"

const h3text = document.createElement("h3");
h3text.style.color = "blue";
h3text.textContent = "I'm a blue h3!";

const divGeneral = document.createElement("div");
divGeneral.setAttribute("style", "border: solid black; background-color: pink");

const h1Inside = document.createElement("h1");
h1Inside.textContent = "I'm a div!";

const pInside = document.createElement("p");
pInside.textContent = "MEE TOO!";

divGeneral.appendChild(h1Inside);
divGeneral.appendChild(pInside);

container.appendChild(content);
container.appendChild(redText);
container.appendChild(h3text);
container.appendChild(divGeneral);