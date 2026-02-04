# Part 2: Event Listeners

## 🎯 Learning Objectives
By the end of this part, you will be able to:
- Understand what events are in JavaScript
- Add click event listeners to buttons
- Handle input events for text fields
- Work with form submit events
- Use the event object to get information

---

## 📘 Theory

### What are Events?
**Events** are actions that happen in the browser. They can be triggered by:
- User actions (clicks, typing, scrolling)
- Browser actions (page load, resize)
- Other code

### The Event Listener Pattern

```javascript
element.addEventListener('eventType', functionToRun);
```

### Common Event Types

| Event | Description | Common Elements |
|-------|-------------|-----------------|
| `click` | Element is clicked | Buttons, links, any element |
| `input` | Input value changes | Text inputs, textareas |
| `change` | Input loses focus after change | Select, checkbox, radio |
| `submit` | Form is submitted | Form elements |
| `keydown` | Key is pressed | Inputs, document |
| `keyup` | Key is released | Inputs, document |
| `mouseover` | Mouse enters element | Any element |
| `mouseout` | Mouse leaves element | Any element |

### Basic Click Event

```javascript
const button = document.querySelector('#myButton');

button.addEventListener('click', function() {
    console.log('Button was clicked!');
});
```

### The Event Object
Every event handler receives an **event object** with useful information:

```javascript
button.addEventListener('click', function(event) {
    console.log(event.target);      // The clicked element
    console.log(event.type);        // 'click'
    event.preventDefault();         // Stop default behavior
});
```

### Input Events

```javascript
const textInput = document.querySelector('#username');

textInput.addEventListener('input', function(event) {
    console.log('Current value:', event.target.value);
});
```

### Form Submit Events

```javascript
const form = document.querySelector('#myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();  // Stop page from reloading
    console.log('Form submitted!');
});
```

---

## 🛠️ Exercises

### Exercise 1: Click Events
1. Add a click listener to the "Click Me" button that shows an alert
2. Add a click listener to the "Change Color" button that changes its own background color
3. Create a counter: clicking the button should increase the number displayed

### Exercise 2: Input Events
1. Listen to the text input and display what the user types in real-time
2. Create a character counter that shows how many characters are typed
3. Make the text input turn red if it's empty, green if it has text

### Exercise 3: Form Handling
1. Prevent the form from submitting (page reload)
2. When form submits, get the values from all inputs
3. Display the form data below the form

---

## ✅ Checklist
- [ ] I can add event listeners using `addEventListener()`
- [ ] I understand click events
- [ ] I can handle input events
- [ ] I can prevent form submission and handle data
- [ ] I can use the event object (`event.target`, `event.preventDefault()`)

---

## 📌 Tips
- Always use `event.preventDefault()` for form submissions if handling with JS
- The `event.target` gives you the element that triggered the event
- Remove event listeners with `removeEventListener()` when no longer needed
- Event names are case-sensitive: `'click'` not `'Click'`

---

**Previous:** [Part 1 - DOM Selection](../part-1/README.md)

**Next:** [Part 3 - Dynamic Styling](../part-3/README.md)
