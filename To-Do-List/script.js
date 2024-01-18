const input = document.querySelector("input");
const btn = document.querySelector("button");
const taskClass = document.querySelector(".tasks");

btn.addEventListener("click", () => {
    let newTask = document.createElement("p");
    newTask.innerHTML = `<i class="fa-regular fa-circle"></i>${input.value}<i class="fa-solid fa-xmark cross"></i>`;
    taskClass.append(newTask);
    input.value = "";

    setupTaskEventListeners(newTask);
    saveData();
});

function setupTaskEventListeners(taskElement) {
    let choice = taskElement.querySelector(".fa-regular");

    choice.addEventListener("click", () => {
        console.log(choice);
        choice.classList.add("fa-circle-check");
        choice.classList.remove("fa-circle");
        taskElement.style.textDecoration = "line-through";
        saveData();
    });

    let clear = taskElement.querySelector(".cross");

    clear.addEventListener("click", () => {
        taskElement.remove();
        saveData();
    });
}

function saveData() {
    localStorage.setItem("data", taskClass.innerHTML);
}

function showData() {
    taskClass.innerHTML = localStorage.getItem("data");

    // Add event listeners to all tasks after displaying data
    let tasks = document.querySelectorAll(".tasks p");
    tasks.forEach((task) => {
        setupTaskEventListeners(task);
    });
}

showData();
