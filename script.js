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
