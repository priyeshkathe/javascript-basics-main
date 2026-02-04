# Part 1: DOM Selection Basics

## 🎯 Learning Objectives
By the end of this part, you will be able to:
- Understand what the DOM (Document Object Model) is
- Select HTML elements using `getElementById()`
- Select elements using `querySelector()` and `querySelectorAll()`
- Access and read element properties

---

## 📘 Theory

### What is the DOM?
The **Document Object Model (DOM)** is a programming interface for web documents. It represents the page as a tree of objects that JavaScript can manipulate.

Think of it like this:
- **HTML** = The blueprint of a house
- **DOM** = The actual house that JavaScript can walk through and modify

### DOM Selection Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `getElementById('id')` | Selects element by its ID | Single element |
| `querySelector('selector')` | Selects first matching element | Single element |
| `querySelectorAll('selector')` | Selects all matching elements | NodeList (array-like) |
| `getElementsByClassName('class')` | Selects by class name | HTMLCollection |
| `getElementsByTagName('tag')` | Selects by tag name | HTMLCollection |

### Basic Syntax Examples

```javascript
// Select by ID
const header = document.getElementById('main-header');

// Select by CSS selector (first match)
const button = document.querySelector('.btn');
const paragraph = document.querySelector('p');

// Select ALL matching elements
const allButtons = document.querySelectorAll('.btn');
const allParagraphs = document.querySelectorAll('p');
```

### Reading Element Properties

```javascript
const element = document.querySelector('.box');

// Read text content
console.log(element.textContent);

// Read inner HTML
console.log(element.innerHTML);

// Read attribute
console.log(element.getAttribute('class'));

// Read ID
console.log(element.id);
```

---

## 🛠️ Exercises

### Exercise 1: Basic Selection
Open `index.html` in your browser and complete the tasks in `script.js`:
1. Select the element with ID `title` and log it to console
2. Select the first paragraph and log its text content
3. Select all list items and log how many there are

### Exercise 2: Exploring Properties
1. Select the image element and log its `src` attribute
2. Select the link and log its `href` attribute
3. Select the container div and log its `innerHTML`

### Exercise 3: Multiple Selections
1. Select all elements with class `highlight`
2. Loop through them and log each one's text content

---

## ✅ Checklist
- [ ] I understand what the DOM is
- [ ] I can use `getElementById()` to select elements
- [ ] I can use `querySelector()` for flexible selection
- [ ] I can use `querySelectorAll()` for multiple elements
- [ ] I can read element properties like `textContent` and `innerHTML`

---

## 📌 Tips
- Always check if an element exists before using it
- `querySelector` uses CSS selector syntax (`.class`, `#id`, `tag`)
- `querySelectorAll` returns a NodeList, not a regular array
- Open browser DevTools (F12) to see console output

---

**Next:** [Part 2 - Event Listeners](../part-2/README.md)
