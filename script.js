// Add event listener to the "Add Task" button
document.getElementById('addTaskBtn').addEventListener('click', addTask);

// Add event listener to the input field for the "Enter" key
document.getElementById('taskInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('tasks');
    const taskItem = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.textContent = taskValue;

    const finishBtn = document.createElement('button');
    finishBtn.textContent = 'Finish';
    finishBtn.classList.add('finish-btn');
    finishBtn.addEventListener('click', () => finishTask(taskItem, taskText.textContent));

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', () => removeTask(taskItem));

    taskItem.appendChild(taskText);
    taskItem.appendChild(finishBtn);
    taskItem.appendChild(removeBtn);

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function finishTask(taskItem, taskValue) {
    const finishedTasks = document.getElementById('finishedTasks');
    const finishedItem = document.createElement('li');

    const finishedText = document.createElement('span');
    finishedText.textContent = taskValue;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
    removeBtn.addEventListener('click', () => removeTask(finishedItem));

    finishedItem.appendChild(finishedText);
    finishedItem.appendChild(removeBtn);

    finishedTasks.appendChild(finishedItem);
    taskItem.remove();
}

function removeTask(taskItem) {
    taskItem.remove();
}
