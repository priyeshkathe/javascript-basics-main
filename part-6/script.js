/**
 * Part 6: Interactive Quiz App
 *
 * This project combines all concepts from Parts 1-5:
 * - DOM Selection (Part 1)
 * - Event Listeners (Part 2)
 * - Dynamic Styling (Part 3)
 * - State Management (Part 4)
 * - ES6+ Syntax (Part 5)
 *
 * FULLY WORKING DEMO
 */

// ============================================
// QUIZ DATA
// ============================================

const quizQuestions = [
    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Management",
            "Digital Ordinance Model",
            "Desktop Object Manager"
        ],
        correct: 0
    },
    {
        question: "Which method selects an element by its ID?",
        options: [
            "querySelector()",
            "getElementsByClassName()",
            "getElementById()",
            "selectElement()"
        ],
        correct: 2
    },
    {
        question: "What does 'addEventListener' do?",
        options: [
            "Creates a new HTML element",
            "Listens for user interactions and runs code",
            "Adds CSS styles to an element",
            "Removes an element from the page"
        ],
        correct: 1
    },
    {
        question: "Which is the correct arrow function syntax?",
        options: [
            "function => (a, b) { return a + b }",
            "(a, b) => a + b",
            "=> function(a, b) { a + b }",
            "a, b => { a + b }"
        ],
        correct: 1
    },
    {
        question: "What does 'classList.toggle()' do?",
        options: [
            "Removes all classes from an element",
            "Adds a class if missing, removes if present",
            "Creates a new class in CSS",
            "Copies classes to another element"
        ],
        correct: 1
    }
];


// ============================================
// STATE MANAGEMENT
// ============================================

const state = {
    currentQuestion: 0,
    score: 0,
    selectedAnswer: null,
    isAnswered: false,
    answers: [] // Track user's answers for breakdown
};


// ============================================
// DOM ELEMENTS
// ============================================

const questionText = document.querySelector('#question-text');
const answersContainer = document.querySelector('#answers-container');
const answerButtons = document.querySelectorAll('.answer-btn');
const nextBtn = document.querySelector('#next-btn');
const progressBar = document.querySelector('#progress-bar');
const questionNumber = document.querySelector('#question-number');
const scoreDisplay = document.querySelector('#score-display');
const feedback = document.querySelector('#feedback');
const feedbackIcon = document.querySelector('#feedback-icon');
const feedbackText = document.querySelector('#feedback-text');
const quizContent = document.querySelector('#quiz-content');
const resultsContainer = document.querySelector('#results-container');
const finalScore = document.querySelector('#final-score');
const resultsMessage = document.querySelector('#results-message');
const resultsBreakdown = document.querySelector('#results-breakdown');
const resultsIcon = document.querySelector('#results-icon');
const restartBtn = document.querySelector('#restart-btn');


// ============================================
// FUNCTIONS
// ============================================

/**
 * Load and display the current question
 */
const loadQuestion = () => {
    const currentQ = quizQuestions[state.currentQuestion];
    const totalQuestions = quizQuestions.length;

    // Update question text
    questionText.textContent = currentQ.question;

    // Update answer buttons
    answerButtons.forEach((btn, index) => {
        const answerTextSpan = btn.querySelector('.answer-text');
        answerTextSpan.textContent = currentQ.options[index];
    });

    // Update progress bar
    const progressPercent = (state.currentQuestion / totalQuestions) * 100;
    progressBar.style.width = progressPercent + '%';

    // Update question number
    questionNumber.textContent = `Question ${state.currentQuestion + 1}/${totalQuestions}`;

    // Reset styles and state
    answerButtons.forEach(btn => {
        btn.classList.remove('selected', 'correct', 'incorrect');
        btn.disabled = false;
    });

    feedback.classList.remove('show', 'correct', 'incorrect');
    nextBtn.disabled = true;
    state.selectedAnswer = null;
    state.isAnswered = false;
};


/**
 * Handle answer selection
 */
const selectAnswer = (index) => {
    if (state.isAnswered) return;

    // Update state
    state.selectedAnswer = index;

    // Remove selected class from all buttons
    answerButtons.forEach(btn => {
        btn.classList.remove('selected');
    });

    // Add selected class to clicked button
    answerButtons[index].classList.add('selected');

    // Check the answer immediately after selection
    checkAnswer();
};


/**
 * Check the selected answer
 */
const checkAnswer = () => {
    if (state.selectedAnswer === null) return;

    state.isAnswered = true;
    const currentQ = quizQuestions[state.currentQuestion];
    const correctIndex = currentQ.correct;
    const isCorrect = state.selectedAnswer === correctIndex;

    // Track answer for breakdown
    state.answers.push({
        question: currentQ.question,
        userAnswer: currentQ.options[state.selectedAnswer],
        correctAnswer: currentQ.options[correctIndex],
        isCorrect: isCorrect
    });

    // Update score if correct
    if (isCorrect) {
        state.score++;
        feedbackIcon.textContent = '✓';
        feedbackText.textContent = 'Correct! Well done!';
        feedback.classList.add('correct');
        answerButtons[state.selectedAnswer].classList.add('correct');
    } else {
        feedbackIcon.textContent = '✗';
        feedbackText.textContent = `Incorrect. The correct answer was: ${currentQ.options[correctIndex]}`;
        feedback.classList.add('incorrect');
        answerButtons[state.selectedAnswer].classList.add('incorrect');
        answerButtons[correctIndex].classList.add('correct');
    }

    // Show feedback
    feedback.classList.add('show');

    // Disable all answer buttons
    answerButtons.forEach(btn => {
        btn.disabled = true;
    });

    // Enable next button
    nextBtn.disabled = false;

    // Update score display
    updateScoreDisplay();
};


/**
 * Move to next question or show results
 */
const nextQuestion = () => {
    state.currentQuestion++;

    if (state.currentQuestion < quizQuestions.length) {
        loadQuestion();
    } else {
        showResults();
    }
};


/**
 * Show final results
 */
const showResults = () => {
    // Hide quiz content
    quizContent.classList.add('hidden');

    // Show results container
    resultsContainer.classList.remove('hidden');

    // Update final score
    finalScore.textContent = state.score;

    // Set message and icon based on score
    const percentage = (state.score / quizQuestions.length) * 100;

    if (percentage === 100) {
        resultsIcon.textContent = '🏆';
        resultsMessage.textContent = 'Perfect score! You\'re a JavaScript master!';
    } else if (percentage >= 80) {
        resultsIcon.textContent = '🎉';
        resultsMessage.textContent = 'Excellent work! You really know your stuff!';
    } else if (percentage >= 60) {
        resultsIcon.textContent = '👍';
        resultsMessage.textContent = 'Good job! Keep practicing to improve!';
    } else if (percentage >= 40) {
        resultsIcon.textContent = '📚';
        resultsMessage.textContent = 'Not bad! Review the material and try again.';
    } else {
        resultsIcon.textContent = '💪';
        resultsMessage.textContent = 'Keep learning! Practice makes perfect!';
    }

    // Generate breakdown
    let breakdownHTML = '<h3>Answer Breakdown:</h3>';
    state.answers.forEach((answer, index) => {
        const statusClass = answer.isCorrect ? 'correct' : 'incorrect';
        const statusIcon = answer.isCorrect ? '✓' : '✗';
        breakdownHTML += `
            <div class="breakdown-item ${statusClass}">
                <strong>Q${index + 1}:</strong> ${statusIcon}
                ${answer.isCorrect ? 'Correct' : `Your answer: ${answer.userAnswer}`}
            </div>
        `;
    });
    resultsBreakdown.innerHTML = breakdownHTML;

    // Update progress bar to 100%
    progressBar.style.width = '100%';
};


/**
 * Restart the quiz
 */
const restartQuiz = () => {
    // Reset all state values
    state.currentQuestion = 0;
    state.score = 0;
    state.selectedAnswer = null;
    state.isAnswered = false;
    state.answers = [];

    // Hide results, show quiz content
    resultsContainer.classList.add('hidden');
    quizContent.classList.remove('hidden');

    // Reset score display
    updateScoreDisplay();

    // Load first question
    loadQuestion();
};


/**
 * Update the score display
 */
const updateScoreDisplay = () => {
    scoreDisplay.textContent = `Score: ${state.score}`;
};


// ============================================
// EVENT LISTENERS
// ============================================

// Answer buttons - select answer on click
answerButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        selectAnswer(index);
    });
});

// Next button
nextBtn.addEventListener('click', () => {
    nextQuestion();
});

// Restart button
restartBtn.addEventListener('click', () => {
    restartQuiz();
});


// ============================================
// INITIALIZE QUIZ
// ============================================

// Initialize the quiz when page loads
loadQuestion();
updateScoreDisplay();


// ============================================
// BONUS: Add keyboard support
// ============================================

// Listen for number keys 1-4 to select answers
// Listen for Enter to go to next question

document.addEventListener('keydown', (e) => {
    // Number keys 1-4 to select answers
    if (!state.isAnswered) {
        if (e.key === '1') selectAnswer(0);
        if (e.key === '2') selectAnswer(1);
        if (e.key === '3') selectAnswer(2);
        if (e.key === '4') selectAnswer(3);
    }

    // Enter to go to next question
    if (e.key === 'Enter' && !nextBtn.disabled) {
        nextQuestion();
    }

    // R to restart (only on results screen)
    if (e.key === 'r' || e.key === 'R') {
        if (!resultsContainer.classList.contains('hidden')) {
            restartQuiz();
        }
    }
});
