# Part 4: State Management

## 🎯 Learning Objectives
By the end of this part, you will be able to:
- Understand what "state" means in web applications
- Use variables to track application state
- Work with arrays to store collections of data
- Sync state changes with the DOM (UI updates)
- Implement CRUD operations (Create, Read, Update, Delete)

---

## 📘 Theory

### What is State?
**State** is the data that your application keeps track of at any given moment. Examples:
- Is the user logged in? (boolean state)
- What items are in the shopping cart? (array state)
- How many times was a button clicked? (number state)

### State Variables

```javascript
// Different types of state
let isLoggedIn = false;        // Boolean state
let clickCount = 0;            // Number state
let username = '';             // String state
let cartItems = [];            // Array state
let userSettings = {};         // Object state
```

### The State → UI Pattern
When state changes, the UI should update to reflect the new state:

```javascript
let count = 0;

function updateUI() {
    document.querySelector('#display').textContent = count;
}

// When state changes, update UI
function increment() {
    count++;        // Change state
    updateUI();     // Update UI to match
}
```

### Array Methods for State Management

| Method | Purpose | Example |
|--------|---------|---------|
| `push()` | Add to end | `items.push('new item')` |
| `pop()` | Remove from end | `items.pop()` |
| `unshift()` | Add to beginning | `items.unshift('first')` |
| `shift()` | Remove from beginning | `items.shift()` |
| `splice()` | Remove/insert at index | `items.splice(1, 1)` |
| `filter()` | Create filtered copy | `items.filter(x => x > 5)` |
| `map()` | Transform each item | `items.map(x => x * 2)` |
| `find()` | Find single item | `items.find(x => x.id === 1)` |
| `findIndex()` | Find item's index | `items.findIndex(x => x.id === 1)` |

### CRUD Operations Pattern

```javascript
let todos = [];

// CREATE - Add new item
function addTodo(text) {
    todos.push({ id: Date.now(), text: text, done: false });
    renderTodos();
}

// READ - Display items
function renderTodos() {
    const list = document.querySelector('#todo-list');
    list.innerHTML = todos.map(todo =>
        `<li>${todo.text}</li>`
    ).join('');
}

// UPDATE - Modify item
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) todo.done = !todo.done;
    renderTodos();
}

// DELETE - Remove item
function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
}
```

### Generating Unique IDs

```javascript
// Method 1: Using timestamp
const id = Date.now();

// Method 2: Using counter
let nextId = 1;
function generateId() {
    return nextId++;
}

// Method 3: Random string
function randomId() {
    return Math.random().toString(36).substr(2, 9);
}
```

---

## 🛠️ Exercises

### Exercise 1: Simple State
1. Create a toggle switch that tracks on/off state
2. Build a score tracker (+1, -1, reset)
3. Implement a light/dark mode toggle that remembers its state

### Exercise 2: Array State
1. Build a simple list where you can add items
2. Add ability to remove items from the list
3. Display the total count of items

### Exercise 3: Complex State
1. Create a task list with add, complete, and delete functions
2. Each task should have: id, text, completed status
3. Show counts: total tasks, completed tasks, pending tasks

---

## ✅ Checklist
- [ ] I understand what state is and why it's important
- [ ] I can use variables to track different types of state
- [ ] I can use arrays to store collections of data
- [ ] I can implement add/remove operations on arrays
- [ ] I understand the State → UI update pattern

---

## 📌 Tips
- Always update the UI after changing state
- Keep state in one place (don't duplicate data)
- Use `const` for arrays/objects (you can still modify contents)
- Generate unique IDs for list items to track them

---

**Previous:** [Part 3 - Dynamic Styling](../part-3/README.md)

**Next:** [Part 5 - ES6+ Syntax](../part-5/README.md)
