function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setTextColorById(elementId, color) {
  const element = document.getElementById(elementId);
  element.classList.add(color);
}

function setBackgroundColorById(elementId, color) {
  const element = document.getElementById(elementId);
  element.classList.add(color);
}

function removeBackgroundColorById(elementId, color) {
  const element = document.getElementById(elementId);
  element.classList.remove(color);
}

function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function reloadPage() {
  window.location.href = window.location.href;
}
