//loading content from the html

window.addEventListener("load", () => {
    if (localStorage.getItem("tasks")) {
      tasks = JSON.parse(localStorage.getItem("tasks"));
      showTasks();
    }
  });
  

let tasks = [];
const inputElement = document.querySelector(".box");
const addUlItem = document.getElementById("listcontainer");

window.addEventListener("load", () => {
  const addButtonElement = document.querySelector(".button");
  addButtonElement.addEventListener("click", addTask);
});

function addTask() {
  let inputFieldText = inputElement.value;
  let task = {
    taskName: inputFieldText,
    done: "img/check-mark.png",
    stateIsDone: false,
    remove: "img/x-mark.png",
  };
  tasks.push(task);
  showTasks();
  saveTasks(); 
  inputElement.value = "";
}

function showTasks() {
  addUlItem.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let liTaskElement = document.createElement("li");

    liTaskElement.innerText = tasks[i].taskName;

    addUlItem.appendChild(liTaskElement);
//The imgElements I got help from one of the lab assistens 
    const imgElementDone = document.createElement("img");
    imgElementDone.classList.add(".imagechecked");
    imgElementDone.src = tasks[i].done;
    imgElementDone.width = 40;
    addUlItem.appendChild(imgElementDone);

    if( tasks[i].stateIsDone === true) {
        liTaskElement.style.textDecoration = "line-through";
         }
    imgElementDone.addEventListener("click", function () {
       tasks[i].stateIsDone = true; 
       if( tasks[i].stateIsDone === true) {
      liTaskElement.style.textDecoration = "line-through";
      saveTasks(); 
       }
    });

    const imgElementRemove = document.createElement("img");
    imgElementRemove.classList.add(".imageremove");
    imgElementRemove.src = tasks[i].remove;
    imgElementRemove.width = 40;
    addUlItem.appendChild(imgElementRemove);
    // The next line I got help from Garrit under one of the labs
    let index = i

    imgElementRemove.addEventListener("click", function () {
      tasks.splice(index, 1);
      saveTasks();
      showTasks();
    });

  }
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}






