const container = document.querySelector("#container");
//Red paragraph
const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm Red!";
paragraph.style.color = "red";
container.appendChild(paragraph);

//Blue h3
const blueHeading = document.createElement("h3");
blueHeading.textContent = "I'm a blue h3";
blueHeading.style.color = "blue";
container.appendChild(blueHeading);

//Pink div
const box = document.createElement("div");
box.style.border = "1px solid black";
box.style.backgroundColor = "pink";

//h1 inside div
const heading = document.createElement("h1");
heading.textContent = "I'm in a div";

//p inside  div
const paragraph2 = document.createElement("p");
paragraph2.textContent = "ME TOO!";

//put hi and p inside div
box.appendChild(heading);
box.appendChild(paragraph2);

//put div inside container
container.appendChild(box);

const button = document.createElement("button");

button.textContent = "Click Me";

container.appendChild(button);

button.addEventListener("click", () => {
    button.textContent = "You clicked me!";
});