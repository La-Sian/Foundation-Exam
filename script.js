// empty array to store tasks
// function to add a task
// function to render tasks in the list
// function to delete completed tasks
// dont forget to render udated list at the end!

// empty array
let tasks = [];

// add a task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
//  check if input field is empty
    if (taskInput.value !== "") {
        tasks.push({ name: taskInput.value, completed: false });
        renderTasks();
        // clear input field
        taskInput.value = "";
    }
}

// render tasks in the list
// check boxes with task
function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
// loop through tasks array and create list items
    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tasks[i].completed;
        checkbox.onchange = function() {
            tasks[i].completed = !tasks[i].completed;
        };
        // create text node with task name
        let taskName = document.createTextNode(tasks[i].name);
        li.appendChild(checkbox);
        li.appendChild(taskName);
        taskList.appendChild(li);
    }
}

// delete completed tasks
function deleteTasks() {
    let newTasks = [];
    // loop through tasks array
      for (let i = 0; i < tasks.length; i++) {
       if (!tasks[i].completed) {
            newTasks.push(tasks[i]);
        }
    }
    tasks = newTasks;
     renderTasks();
}