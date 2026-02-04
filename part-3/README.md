# Part 3: Dynamic Styling

## 🎯 Learning Objectives
By the end of this part, you will be able to:
- Use `classList` to add, remove, and toggle CSS classes
- Trigger CSS animations and transitions using JavaScript
- Modify inline styles with `element.style`
- Understand when to use classes vs inline styles

---

## 📘 Theory

### The classList Property
The `classList` property provides methods to manipulate CSS classes on elements.

```javascript
const element = document.querySelector('.box');

// Add a class
element.classList.add('active');

// Remove a class
element.classList.remove('active');

// Toggle a class (add if missing, remove if present)
element.classList.toggle('active');

// Check if class exists
element.classList.contains('active');  // returns true or false

// Replace a class
element.classList.replace('old-class', 'new-class');

// Add multiple classes
element.classList.add('class1', 'class2', 'class3');
```

### Inline Styles vs Classes

| Approach | Use When | Example |
|----------|----------|---------|
| `classList` | Predefined styles, animations | `el.classList.add('hidden')` |
| `element.style` | Dynamic values, calculated styles | `el.style.width = pixels + 'px'` |

### Inline Styles with JavaScript

```javascript
const box = document.querySelector('.box');

// Set individual properties
box.style.backgroundColor = 'blue';
box.style.width = '200px';
box.style.borderRadius = '10px';

// Note: CSS properties use camelCase in JavaScript
// background-color → backgroundColor
// font-size → fontSize
// border-radius → borderRadius
```

### Triggering CSS Animations

In CSS:
```css
.box {
    transition: transform 0.3s ease;
}

.box.animate {
    transform: scale(1.2);
}
```

In JavaScript:
```javascript
// Adding class triggers the CSS transition
box.classList.add('animate');
```

### Reading Computed Styles

```javascript
const box = document.querySelector('.box');

// Get the actual computed style (after CSS is applied)
const styles = window.getComputedStyle(box);
console.log(styles.backgroundColor);
console.log(styles.width);
```

---

## 🛠️ Exercises

### Exercise 1: classList Basics
1. Toggle the "active" class on boxes when clicked
2. Add "highlight" class to all items when button is pressed
3. Remove a class after 2 seconds using `setTimeout`

### Exercise 2: CSS Transitions
1. Create a smooth color transition on hover using JS
2. Make a box slide in from the left when button is clicked
3. Create a fade-in/fade-out effect

### Exercise 3: Dynamic Styles
1. Create a progress bar that increases width when button is clicked
2. Change element size based on slider input
3. Create a color picker that changes background color dynamically

---

## ✅ Checklist
- [ ] I can use `classList.add()`, `classList.remove()`, `classList.toggle()`
- [ ] I understand the difference between classList and inline styles
- [ ] I can trigger CSS animations with JavaScript
- [ ] I can modify inline styles using `element.style`
- [ ] I know to use camelCase for CSS properties in JavaScript

---

## 📌 Tips
- Prefer `classList` over inline styles for better separation of concerns
- CSS transitions should be defined in CSS, then triggered by adding/removing classes
- Use `getComputedStyle()` to read the actual rendered styles
- Remember: `element.style` only reads inline styles, not CSS file styles

---

**Previous:** [Part 2 - Event Listeners](../part-2/README.md)

**Next:** [Part 4 - State Management](../part-4/README.md)
