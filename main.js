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
    let task = {taskName: inputFieldText};
    tasks.push(task);
    showTasks();
    inputElement.value=""
}

function showTasks() {
    addUlItem.innerHTML = "";
    for (i=0; i < tasks.length; i++) {
    let liTaskElement = document.createElement("li");
    
    liTaskElement.innerText = tasks[i].taskName;

      addUlItem.appendChild(liTaskElement);

      tasks.addEventListener = 
    }
}

// function clickAddButton () {
    
//     console.log("clicked");
    
//     // addButtonElement.addEventListener("click", function () {
//         const inputValue = inputElement.value;
//         if (inputValue !== "") {
//             createTask(inputValue);
//             inputElement.value = "";
            

//             // createTask(inputValue);

//             // inputElement.value = "";
//         }
//         else {
//             window.alert("Enter Text");
//         }
//     }
// // }

// function createTask(taskText) {
// console.log("Creating task", taskText);
// }

