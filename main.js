let counter = 0;

function createNewElement() {
  let newelement = document.createElement("P");

  counter = counter + 1;

  newelement.textContent = "Element " + counter;

  let mainElement = document;
  mainElement.appendChild(newElement);
}
