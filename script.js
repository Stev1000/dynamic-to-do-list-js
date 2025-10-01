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
        li.textContent = taskText;

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Use addEventListener instead of onclick
        removeButton.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        // Append button to li, then li to list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }

    // Button click listener
    addButton.addEventListener("click", addTask);

    // Enter key listener (keypress)
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
