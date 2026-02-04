/**
 * Part 4: State Management
 *
 * In this file, you will learn to manage application state
 * using variables and arrays, and keep the UI in sync.
 *
 * Key concept: When state changes → Update the UI
 */

// ============================================
// EXERCISE 1: Simple State
// ============================================

// ----- Toggle Switch -----
// State: is the switch on or off?

let isOn = false;  // Initial state

const toggleSwitch = document.querySelector('#toggle-switch');
const toggleStatus = document.querySelector('#toggle-status');

// EXAMPLE CODE (working demo):
toggleSwitch.addEventListener('click', function() {
    // Toggle the state
    isOn = !isOn;

    // Update UI based on state
    if (isOn) {
        this.classList.add('on');
        toggleStatus.textContent = 'ON';
    } else {
        this.classList.remove('on');
        toggleStatus.textContent = 'OFF';
    }
});


// ----- Score Tracker -----
// State: what is the current score?

let score = 0;  // Initial state

const scoreDisplay = document.querySelector('#score-display');
const scoreMinus = document.querySelector('#score-minus');
const scorePlus = document.querySelector('#score-plus');
const scoreReset = document.querySelector('#score-reset');

// Helper function to update score display
function updateScoreDisplay() {
    scoreDisplay.textContent = score;
}

// EXAMPLE CODE (working demo):
scorePlus.addEventListener('click', function() {
    score++;
    updateScoreDisplay();
});

scoreMinus.addEventListener('click', function() {
    score--;
    updateScoreDisplay();
});

scoreReset.addEventListener('click', function() {
    score = 0;
    updateScoreDisplay();
});


// ============================================
// EXERCISE 2: Array State - Shopping List
// ============================================

// State: array of shopping items
let shoppingItems = [];

const itemInput = document.querySelector('#item-input');
const addItemBtn = document.querySelector('#add-item-btn');
const shoppingList = document.querySelector('#shopping-list');
const itemCount = document.querySelector('#item-count');

// Function to render the shopping list
function renderShoppingList() {
    // Clear the current list
    shoppingList.innerHTML = '';

    // Check if list is empty
    if (shoppingItems.length === 0) {
        shoppingList.innerHTML = '<li class="empty-message">No items yet. Add some!</li>';
        itemCount.textContent = 0;
        return;
    }

    // EXAMPLE CODE (working demo):
    // Loop through shoppingItems and create HTML for each
    shoppingItems.forEach(function(item, index) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${item}</span>
            <button class="danger" onclick="deleteItem(${index})">Delete</button>
        `;
        shoppingList.appendChild(li);
    });

    // Update count
    itemCount.textContent = shoppingItems.length;
}

// Function to add new item
function addShoppingItem() {
    const itemText = itemInput.value.trim();

    if (itemText === '') return;

    // Add to array
    shoppingItems.push(itemText);

    // Clear input
    itemInput.value = '';

    // Re-render
    renderShoppingList();
}

// Function to delete item by index
function deleteItem(index) {
    // Remove item at index from array
    shoppingItems.splice(index, 1);

    // Re-render the list
    renderShoppingList();
}

// EXAMPLE CODE (working demo):
addItemBtn.addEventListener('click', addShoppingItem);

// Also add item when Enter key is pressed
itemInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addShoppingItem();
    }
});

// Initialize the list display
renderShoppingList();


// ============================================
// EXERCISE 3: Task Manager
// ============================================

// State: array of task objects
// Each task: { id: number, text: string, completed: boolean }
let tasks = [];

const taskInput = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('#add-task-btn');
const taskList = document.querySelector('#task-list');
const totalTasks = document.querySelector('#total-tasks');
const completedTasks = document.querySelector('#completed-tasks');
const pendingTasks = document.querySelector('#pending-tasks');
const clearCompletedBtn = document.querySelector('#clear-completed-btn');
const clearAllBtn = document.querySelector('#clear-all-btn');

// Function to update statistics
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    pendingTasks.textContent = pending;
}

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<li class="empty-message">No tasks yet. Add one!</li>';
        updateStats();
        return;
    }

    // EXAMPLE CODE (working demo):
    tasks.forEach(function(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-item ${task.completed ? 'completed' : ''}">
                <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
                <span>${task.text}</span>
            </div>
            <button class="danger" onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(li);
    });

    updateStats();
}

// Function to add new task
function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;

    // Create task object with unique ID
    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    // Add to tasks array
    tasks.push(newTask);

    // Clear input
    taskInput.value = '';

    // Re-render
    renderTasks();
}

// Function to toggle task completion
function toggleTask(id) {
    // Find task by id
    const task = tasks.find(t => t.id === id);
    if (task) {
        // Toggle its completed status
        task.completed = !task.completed;
    }
    // Re-render
    renderTasks();
}

// Function to delete task
function deleteTask(id) {
    // Remove task with matching id from array
    tasks = tasks.filter(t => t.id !== id);
    // Re-render
    renderTasks();
}

// EXAMPLE CODE (working demo):
addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') addTask();
});

// Clear completed tasks
clearCompletedBtn.addEventListener('click', function() {
    // Keep only tasks where completed === false
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
});

// Clear all tasks
clearAllBtn.addEventListener('click', function() {
    tasks = [];
    renderTasks();
});

// Initialize
renderTasks();


// ============================================
// BONUS: Local Storage (Optional)
// ============================================

// Save tasks to localStorage so they persist after refresh
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from localStorage
function loadTasks() {
    const saved = localStorage.getItem('tasks');
    if (saved) {
        tasks = JSON.parse(saved);
        renderTasks();
    }
}

// Uncomment these to enable persistence:
// loadTasks();  // Call on page load
// Call saveTasks() after any task modification
