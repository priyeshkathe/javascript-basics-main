# Homework: Build a Bookmark Manager

## 📋 Assignment Overview

Build a **Bookmark Manager** application that allows users to save, organize, and manage their favorite website links. This project will test your understanding of all concepts learned in Parts 1-6.

---

## 🎯 Learning Objectives Tested

| Part | Concept | How It's Used |
|------|---------|---------------|
| Part 1 | DOM Selection | Selecting input fields, buttons, bookmark list |
| Part 2 | Event Listeners | Form submission, delete clicks, edit functionality |
| Part 3 | Dynamic Styling | Highlighting bookmarks, visual feedback |
| Part 4 | State Management | Storing bookmarks array, updating UI |
| Part 5 | ES6+ Syntax | Arrow functions, template literals, destructuring |
| Part 6 | Combining All | Building a complete, functional application |

---

## 📝 Requirements

### Core Features (Required)

1. **Add Bookmark**
   - User can enter a website name
   - User can enter a URL
   - Clicking "Add" saves the bookmark
   - Form clears after adding

2. **Display Bookmarks**
   - Show all bookmarks in a list
   - Each bookmark shows: name, URL, and delete button
   - Clicking on bookmark name opens URL in new tab

3. **Delete Bookmark**
   - Each bookmark has a delete button
   - Clicking delete removes that bookmark
   - List updates immediately

4. **Bookmark Count**
   - Display total number of bookmarks

5. **Empty State**
   - Show message when no bookmarks exist

### Bonus Features (Optional)

1. **Edit Bookmark** - Allow editing existing bookmarks
2. **Search/Filter** - Filter bookmarks by name
3. **Categories** - Organize bookmarks into categories
4. **Favorites** - Mark bookmarks as favorites
5. **Local Storage** - Save bookmarks so they persist after refresh
6. **Validation** - Validate URL format before saving
7. **Drag & Drop** - Reorder bookmarks by dragging

---

## 🛠️ Getting Started

### Files Provided:
- `index.html` - Basic HTML structure (provided)
- `style.css` - Styling (provided)
- `script.js` - Starter code with comments (you complete this)

### Step-by-Step Guide:

1. **Open the files** in your code editor
2. **Read through** the starter code comments
3. **Implement** each TODO section
4. **Test** your code in the browser
5. **Debug** using browser console (F12)

---

## 💻 Expected Functionality

```
User Flow:
1. User enters "Google" in name field
2. User enters "https://google.com" in URL field
3. User clicks "Add Bookmark"
4. Bookmark appears in list: "Google - https://google.com [Delete]"
5. User can click "Google" to open in new tab
6. User can click [Delete] to remove it
7. Bookmark count updates: "Total: 1 bookmark"
```

---

## 📊 Data Structure

Each bookmark should be an object:

```javascript
{
    id: 1234567890,        // Unique ID (use Date.now())
    name: "Google",        // Website name
    url: "https://google.com"  // Website URL
}
```

Store all bookmarks in an array:

```javascript
let bookmarks = [
    { id: 1, name: "Google", url: "https://google.com" },
    { id: 2, name: "GitHub", url: "https://github.com" }
];
```

---

## ✅ Grading Rubric

| Criteria | Points |
|----------|--------|
| Add bookmark functionality works | 20 |
| Display bookmarks correctly | 20 |
| Delete bookmark works | 15 |
| Bookmark count updates | 10 |
| Empty state message shows | 10 |
| Clean, readable code | 10 |
| Uses ES6+ syntax | 10 |
| No console errors | 5 |
| **Total** | **100** |

### Bonus Points:
- Edit functionality: +10
- Search/Filter: +10
- Local Storage: +15
- URL Validation: +5

---

## 💡 Hints

1. **Start simple** - Get add and display working first
2. **Use template literals** for building HTML
3. **Keep state in one place** - Use a `bookmarks` array
4. **Remember**: Update UI after every state change
5. **Use `data-id`** attributes to track which bookmark to delete
6. **Test often** - Add one feature, test, repeat

---

## 🔍 Debugging Tips

- Open browser console (F12) to see errors
- Use `console.log()` to check values
- Check if elements are selected correctly
- Verify state is updating properly

---

## 📅 Submission

1. Complete all TODO sections in `script.js`
2. Test all functionality
3. Remove any `console.log` statements used for debugging
4. Submit your completed `script.js` file

---

## 🆘 Need Help?

- Review the README files from Parts 1-6
- Check your code for typos
- Make sure all elements are selected correctly
- Verify your event listeners are attached

---

**Good luck! You've got this! 🚀**
