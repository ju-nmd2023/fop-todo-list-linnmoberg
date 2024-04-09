//loading content from the html
window.addEventListener("load", () => {

    const addButtonElement = document.querySelector(".button");
    addButtonElement.addEventListener("click", clickAddButton);
});

function clickAddButton () {
    console.log("Clicked");
}

