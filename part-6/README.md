# Part 6: Mini Project - Interactive Quiz App

## 🎯 Project Overview
In this final part, you will build a complete **Interactive Quiz Application** that combines all the concepts learned in previous parts:

- **Part 1:** DOM Selection
- **Part 2:** Event Listeners
- **Part 3:** Dynamic Styling
- **Part 4:** State Management
- **Part 5:** ES6+ Syntax

---

## 📋 Project Requirements

### Features to Implement:
1. Display quiz questions one at a time
2. Allow users to select an answer
3. Show immediate feedback (correct/incorrect)
4. Track and display the score
5. Show progress through the quiz
6. Display final results at the end
7. Allow restart of the quiz

### Concepts Used:

| Concept | Application in Project |
|---------|----------------------|
| DOM Selection | Selecting question display, buttons, score elements |
| Event Listeners | Click handlers for answer buttons, next/restart |
| Dynamic Styling | Highlighting correct/incorrect answers, progress bar |
| State Management | Tracking current question, score, answers |
| ES6+ Syntax | Arrow functions, template literals, destructuring |

---

## 📘 Project Structure

```
part-6/
├── index.html    # Quiz UI structure
├── style.css     # Quiz styling
├── script.js     # Quiz logic (partial - you complete it)
└── README.md     # This file
```

---

## 🛠️ Step-by-Step Guide

### Step 1: Understand the HTML Structure
- Quiz container with question display
- Answer buttons (4 options)
- Next button
- Score display
- Progress bar
- Results screen

### Step 2: Set Up State Variables
```javascript
const quizState = {
    currentQuestion: 0,
    score: 0,
    answers: [],
    isComplete: false
};
```

### Step 3: Implement Core Functions
1. `loadQuestion()` - Display current question
2. `selectAnswer()` - Handle answer selection
3. `checkAnswer()` - Validate and show feedback
4. `nextQuestion()` - Move to next question
5. `showResults()` - Display final score
6. `restartQuiz()` - Reset and start over

### Step 4: Add Visual Feedback
- Green highlight for correct answers
- Red highlight for incorrect answers
- Animate progress bar
- Smooth transitions between questions

### Step 5: Polish and Test
- Handle edge cases
- Ensure smooth user experience
- Test all functionality

---

## ✨ Bonus Challenges

Once the basic quiz works, try adding:

1. **Timer:** Add a countdown timer for each question
2. **Categories:** Let users choose quiz topics
3. **Difficulty Levels:** Easy, Medium, Hard questions
4. **High Score:** Save best score to localStorage
5. **Animations:** Add entrance/exit animations for questions

---

## 🎮 How to Test

1. Open `index.html` in your browser
2. Click on answers to select them
3. Click "Next" to proceed
4. Check score at the end
5. Click "Restart" to try again

---

## ✅ Completion Checklist

- [ ] Questions display correctly
- [ ] Answer selection works
- [ ] Correct/incorrect feedback shows
- [ ] Score updates properly
- [ ] Progress bar fills as you advance
- [ ] Results screen shows at the end
- [ ] Restart functionality works
- [ ] Code uses ES6+ syntax throughout

---

## 💡 Hints

1. Use template literals to build question HTML dynamically
2. Store questions as an array of objects
3. Use classList to add/remove styling
4. Keep all state in one object for easy management
5. Update UI after every state change

---

**Previous:** [Part 5 - ES6+ Syntax](../part-5/README.md)

**Next:** [Homework](../homework/README.md)
