function addTask() {
    let input = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");

    span.textContent = task;

    button.textContent = "Delete";
    button.className = "delete-btn";

    button.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(button);

    taskList.appendChild(li);

    input.value = "";
}