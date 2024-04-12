//loading content from the html

let tasks = [];
const inputElement = document.querySelector(".box");
const addUlItem = document.getElementById("list-container");

window.addEventListener("load", () => {
  const addButtonElement = document.querySelector(".button");
  addButtonElement.addEventListener("click", addTask);
});

function addTask() {
  let inputFieldText = inputElement.value;
  let task = {
    taskName: inputFieldText,
    done: "img/check-mark.png",
    remove: "img/x-mark.png",
  };
  tasks.push(task);
  showTasks();
  inputElement.value = "";
}

function showTasks() {
  addUlItem.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let liTaskElement = document.createElement("li");

    liTaskElement.innerText = tasks[i].taskName;

    addUlItem.appendChild(liTaskElement);

    const imgElementDone = document.createElement("img");
    imgElementDone.classList.add(".imagechecked");
    imgElementDone.src = tasks[i].done;
    imgElementDone.width = 40;
    addUlItem.appendChild(imgElementDone);

    imgElementDone.addEventListener("click", function () {
      liTaskElement.style.textDecoration = "line-through";
    });

    const imgElementRemove = document.createElement("img");
    imgElementRemove.classList.add(".imageremove");
    imgElementRemove.src = tasks[i].remove;
    imgElementRemove.width = 40;
    addUlItem.appendChild(imgElementRemove);
    let index = i

    imgElementRemove.addEventListener("click", function () {
      tasks.splice(index, 1);
      showTasks();
    });

  }
}

