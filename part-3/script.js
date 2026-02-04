/**
 * Part 3: Dynamic Styling
 *
 * In this file, you will practice manipulating CSS classes
 * and styles using JavaScript.
 *
 * Key concepts: classList, element.style, CSS transitions
 */

// ============================================
// EXAMPLE: classList basics
// ============================================

// Get first box as example
const exampleBox = document.querySelector('#box1');

// Example: Toggle class on click
exampleBox.addEventListener('click', function() {
    // This toggles the 'active' class on and off
    this.classList.toggle('active');
    console.log('Box 1 active state:', this.classList.contains('active'));
});


// ============================================
// EXERCISE 1: classList Basics
// ============================================

// Task 1.1: Toggle 'active' class on ALL boxes when clicked
// Make boxes 2, 3, and 4 also toggle their active state

const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');
const box4 = document.querySelector('#box4');

// EXAMPLE CODE (working demo):
box2.addEventListener('click', function() {
    this.classList.toggle('active');
});

box3.addEventListener('click', function() {
    this.classList.toggle('active');
});

box4.addEventListener('click', function() {
    this.classList.toggle('active');
});


// Task 1.2: Highlight All Boxes
// When "Highlight All Boxes" button is clicked, add 'highlight' class to ALL boxes
// When "Remove Highlight" is clicked, remove 'highlight' from ALL boxes

const highlightAllBtn = document.querySelector('#highlight-all-btn');
const removeHighlightBtn = document.querySelector('#remove-highlight-btn');
const allBoxes = document.querySelectorAll('.box');

// EXAMPLE CODE (working demo):
highlightAllBtn.addEventListener('click', function() {
    allBoxes.forEach(function(box) {
        box.classList.add('highlight');
    });
});

removeHighlightBtn.addEventListener('click', function() {
    allBoxes.forEach(function(box) {
        box.classList.remove('highlight');
    });
});


// Task 1.3: Temporary Class
// Add 'highlight' class, then remove it after 2 seconds using setTimeout

const temporaryClassBtn = document.querySelector('#temporary-class-btn');

// EXAMPLE CODE (working demo):
temporaryClassBtn.addEventListener('click', function() {
    allBoxes.forEach(function(box) {
        box.classList.add('highlight');
    });

    setTimeout(function() {
        allBoxes.forEach(function(box) {
            box.classList.remove('highlight');
        });
    }, 2000);
});


// ============================================
// EXERCISE 2: CSS Transitions
// ============================================

const animBox = document.querySelector('#anim-box');
const slideBtn = document.querySelector('#slide-btn');
const fadeBtn = document.querySelector('#fade-btn');
const growBtn = document.querySelector('#grow-btn');
const spinBtn = document.querySelector('#spin-btn');
const colorBtn = document.querySelector('#color-btn');
const resetAnimBtn = document.querySelector('#reset-anim-btn');

// Task 2.1: Slide Animation
// EXAMPLE CODE (working demo):
slideBtn.addEventListener('click', function() {
    animBox.classList.toggle('slide-in');
});

// Task 2.2: Fade Animation
// EXAMPLE CODE (working demo):
fadeBtn.addEventListener('click', function() {
    animBox.classList.toggle('fade-out');
});

// Task 2.3: Grow Animation
// EXAMPLE CODE (working demo):
growBtn.addEventListener('click', function() {
    animBox.classList.toggle('grow');
});

// Task 2.4: Spin Animation
// EXAMPLE CODE (working demo):
spinBtn.addEventListener('click', function() {
    animBox.classList.toggle('spin');
});

// Task 2.5: Color Shift
// EXAMPLE CODE (working demo):
colorBtn.addEventListener('click', function() {
    animBox.classList.toggle('color-shift');
});

// Task 2.6: Reset All Animations
// EXAMPLE CODE (working demo):
resetAnimBtn.addEventListener('click', function() {
    animBox.classList.remove('slide-in', 'fade-out', 'grow', 'spin', 'color-shift');
});


// ============================================
// EXERCISE 3: Dynamic Styles
// ============================================

// Task 3.1: Progress Bar
const progressBar = document.querySelector('#progress-bar');
const increaseProgressBtn = document.querySelector('#increase-progress-btn');
const decreaseProgressBtn = document.querySelector('#decrease-progress-btn');
const resetProgressBtn = document.querySelector('#reset-progress-btn');

let progress = 0;

// Function to update progress bar
function updateProgressBar() {
    progressBar.style.width = progress + '%';
    progressBar.textContent = progress + '%';
}

// EXAMPLE CODE (working demo):
increaseProgressBtn.addEventListener('click', function() {
    if (progress < 100) {
        progress += 10;
        updateProgressBar();
    }
});

decreaseProgressBtn.addEventListener('click', function() {
    if (progress > 0) {
        progress -= 10;
        updateProgressBar();
    }
});

resetProgressBtn.addEventListener('click', function() {
    progress = 0;
    updateProgressBar();
});


// Task 3.2: Resize Box with Slider
const resizeBox = document.querySelector('#resize-box');
const sizeSlider = document.querySelector('#size-slider');
const sizeValue = document.querySelector('#size-value');

// EXAMPLE CODE (working demo):
sizeSlider.addEventListener('input', function() {
    const size = this.value;
    resizeBox.style.width = size + 'px';
    resizeBox.style.height = size + 'px';
    sizeValue.textContent = size;
});


// Task 3.3: Color Picker
const colorPreview = document.querySelector('#color-preview');
const colorPicker = document.querySelector('#color-picker');
const colorValue = document.querySelector('#color-value');

// Initialize with default color
colorPreview.style.backgroundColor = '#667eea';

// EXAMPLE CODE (working demo):
colorPicker.addEventListener('input', function() {
    const color = this.value;
    colorPreview.style.backgroundColor = color;
    colorValue.textContent = color;
});


// ============================================
// BONUS: Theme Switcher
// ============================================

const themeDarkBtn = document.querySelector('#theme-dark');
const themeLightBtn = document.querySelector('#theme-light');
const themeOceanBtn = document.querySelector('#theme-ocean');

// Helper function to remove all theme classes
function removeAllThemes() {
    document.body.classList.remove('theme-dark', 'theme-light', 'theme-ocean');
}

// EXAMPLE CODE (working demo):
themeDarkBtn.addEventListener('click', function() {
    removeAllThemes();
    document.body.classList.add('theme-dark');
});

themeLightBtn.addEventListener('click', function() {
    removeAllThemes();
    document.body.classList.add('theme-light');
});

themeOceanBtn.addEventListener('click', function() {
    removeAllThemes();
    document.body.classList.add('theme-ocean');
});
