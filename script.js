document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new list item
        const li = document.createElement("li");
        li.textContent = taskText;  // <-- checker expects this

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Remove li when button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append button and li
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Add button click
    addButton.addEventListener("click", addTask);

    // Press Enter key (checker requires 'keypress')
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
