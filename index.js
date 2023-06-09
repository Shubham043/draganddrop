document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".container-box");
  const items = document.querySelectorAll(".item");
  const resetButton = document.getElementById("resetButton");
  const message = document.getElementById("message");
  const toggleSwitch = document.getElementById("toggleSwitch");

  let draggedItem = null;

  function dragStart() {
    setTimeout(() => {
      this.classList.add("dragging");
      draggedItem = this;
    }, 0);
  }

  function dragEnd() {
    this.classList.remove("dragging");
    draggedItem = null;
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter() {
    this.classList.add("hovered");
  }

  function dragLeave() {
    this.classList.remove("hovered");
  }

  function drop() {
    this.classList.remove("hovered");
    this.appendChild(draggedItem);
    displayMessage("Item dropped successfully!");
  }

  function resetContainers() {
    containers[0].appendChild(document.getElementById("item1"));
    containers[0].appendChild(document.getElementById("item2"));
    containers[0].appendChild(document.getElementById("item3"));
    containers[1].innerHTML = "";
    displayMessage("");
  }

  function displayMessage(text) {
    message.textContent = text;
  }

  function toggleDarkMode() {
    const container = document.querySelector(".container");
    container.classList.toggle("dark-mode");
  }

  items.forEach((item) => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
  });

  containers.forEach((container) => {
    container.addEventListener("dragover", dragOver);
    container.addEventListener("dragenter", dragEnter);
    container.addEventListener("dragleave", dragLeave);
    container.addEventListener("drop", drop);
  });

  resetButton.addEventListener("click", resetContainers);

  toggleSwitch.addEventListener("change", toggleDarkMode);
});
