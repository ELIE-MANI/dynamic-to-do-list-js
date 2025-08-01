// Step 1: Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Step 2: Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    
    // Step 3: Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim(); // remove leading/trailing whitespace

        // Step 4: Check if input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        
        // Step 5: Create list item and remove button
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Step 6: Add functionality to remove button
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };
        
        // Step 7: Append elements
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Step 8: Clear input
        taskInput.value = '';
    }

    // Step 9: Attach event listeners
    addButton.addEventListener('click', addTask);

    // Enable Enter key to also add tasks
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
