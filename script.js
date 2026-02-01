let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task" + (task.done ? " completed" : "");

    li.innerHTML = `
  <input type="checkbox" ${task.done ? "checked" : ""}
    onchange="toggleTask(${index})">
  <span>${task.text}</span>
  <small>${task.duration} min</small>
  <button onclick="removeTask(${index})">❌</button>
`;


    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  const time = document.getElementById("timeInput").value;

  if (input.value.trim() === "") return;

  tasks.push({
    text: input.value,
    duration: time,
    done: false
  });

  input.value = "";
  renderTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

renderTasks();
