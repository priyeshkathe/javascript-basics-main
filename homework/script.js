/**
 * ========================================
 * HOMEWORK: Bookmark Manager
 * ========================================
 *
 * Build a bookmark manager that allows users to:
 * - Add bookmarks (name + URL)
 * - Display all bookmarks
 * - Delete bookmarks
 * - Show bookmark count
 *
 * This project tests all concepts from Parts 1-6:
 * - Part 1: DOM Selection
 * - Part 2: Event Listeners
 * - Part 3: Dynamic Styling
 * - Part 4: State Management
 * - Part 5: ES6+ Syntax
 * - Part 6: Combining Everything
 *
 * STARTER CODE WITH HINTS
 * Students should complete the sections marked with:
 * // ========================================
 * // START YOUR CODE HERE
 * // ========================================
 */


// ============================================
// SECTION 1: STATE (Part 4)
// ============================================

// TODO 1: Create an array to store bookmarks
// Each bookmark should have: id, name, url
// Example: { id: 123, name: "Google", url: "https://google.com" }

let bookmarks = [];


// ============================================
// SECTION 2: DOM SELECTION (Part 1)
// ============================================

// TODO 2: Select all necessary DOM elements
// Use querySelector or getElementById

const bookmarkForm = document.querySelector('#bookmark-form');
const nameInput = document.querySelector('#bookmark-name');
const urlInput = document.querySelector('#bookmark-url');
const bookmarkList = document.querySelector('#bookmark-list');
const bookmarkCount = document.querySelector('#bookmark-count');
const emptyState = document.querySelector('#empty-state');
const searchInput = document.querySelector('#search-input');


// ============================================
// SECTION 3: RENDER FUNCTION (Parts 4 & 5)
// ============================================

// TODO 3: Create a function to render all bookmarks
// This function should:
// - Clear the current list
// - Loop through bookmarks array
// - Create HTML for each bookmark using template literals
// - Show/hide empty state based on bookmarks length
// - Update bookmark count

const renderBookmarks = (bookmarksToRender = bookmarks) => {
    // Clear the list
    bookmarkList.innerHTML = '';

    // Check if bookmarks array is empty
    if (bookmarksToRender.length === 0) {
        emptyState.classList.add('show');
        bookmarkCount.textContent = '0 bookmarks';
        return;
    }

    // Hide empty state
    emptyState.classList.remove('show');

    // Update count
    bookmarkCount.textContent = `${bookmarksToRender.length} bookmark${bookmarksToRender.length !== 1 ? 's' : ''}`;

    // ========================================
    // START YOUR CODE HERE
    // ========================================

    // Loop through bookmarksToRender (NOT bookmarks!) and create HTML for each
    // Use template literals to build the HTML
    // Each bookmark should have:
    // - A link that opens in new tab (target="_blank")
    // - The URL displayed below the name
    // - A delete button with data-id attribute
    //
    // HINT: Use forEach to loop:
    // bookmarksToRender.forEach(bookmark => { ... });
    //
    // HINT: Use innerHTML or insertAdjacentHTML to add the HTML to bookmarkList

    // Example HTML structure for each bookmark:
    /*
    <li class="bookmark-item" data-id="${bookmark.id}">
        <div class="bookmark-info">
            <a href="${bookmark.url}" target="_blank" class="bookmark-name">${bookmark.name}</a>
            <span class="bookmark-url">${bookmark.url}</span>
        </div>
        <div class="bookmark-actions">
            <button class="btn-delete" data-id="${bookmark.id}" title="Delete">🗑️</button>
        </div>
    </li>
    */

    // Your code here:



    // ========================================
    // END YOUR CODE
    // ========================================
};


// ============================================
// SECTION 4: ADD BOOKMARK (Parts 2 & 4)
// ============================================

// TODO 4: Create a function to add a new bookmark
// This function should:
// - Get values from input fields
// - Validate that both fields have values
// - Create a bookmark object with unique ID (use Date.now())
// - Add to bookmarks array
// - Clear the input fields
// - Call renderBookmarks()

const addBookmark = (event) => {
    // Prevent form from submitting (page reload)
    event.preventDefault();

    // ========================================
    // START YOUR CODE HERE
    // ========================================

    // Get values from inputs (use .value and .trim() to remove whitespace)
    // const name = nameInput.value.trim();
    // const url = urlInput.value.trim();

    // Validate (check if both have values)
    // if (!name || !url) return;  // Exit early if empty


    // Create bookmark object with unique ID
    // const newBookmark = {
    //     id: Date.now(),    // Creates unique number ID
    //     name: name,
    //     url: url
    // };

    // Add to array
    // bookmarks.push(newBookmark);

    // Clear inputs
    // nameInput.value = '';
    // urlInput.value = '';

    // Re-render the list
    // renderBookmarks();

    // Your code here:



    // ========================================
    // END YOUR CODE
    // ========================================
};


// ============================================
// SECTION 5: DELETE BOOKMARK (Parts 2 & 4)
// ============================================

// TODO 5: Create a function to delete a bookmark
// This function should:
// - Take an ID as parameter
// - Filter out the bookmark with that ID
// - Update the bookmarks array
// - Call renderBookmarks()

const deleteBookmark = (id) => {
    // ========================================
    // START YOUR CODE HERE
    // ========================================

    // Filter out the bookmark with matching id
    // bookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    // This keeps all bookmarks EXCEPT the one with the matching id

    // Re-render
    // renderBookmarks();

    // Your code here:



    // ========================================
    // END YOUR CODE
    // ========================================
};


// ============================================
// SECTION 6: EVENT LISTENERS (Part 2)
// ============================================

// TODO 6: Add event listeners

// Form submit - add bookmark
bookmarkForm.addEventListener('submit', addBookmark);

// Delete button clicks - use event delegation
// Since delete buttons are created dynamically, we listen on the parent

bookmarkList.addEventListener('click', (event) => {
    // ========================================
    // START YOUR CODE HERE
    // ========================================

    // Check if clicked element is a delete button
    // if (event.target.classList.contains('btn-delete')) {
    //     const id = Number(event.target.dataset.id);  // Convert string to number!
    //     deleteBookmark(id);
    // }
    // IMPORTANT: dataset.id returns a string, but our IDs are numbers from Date.now()
    // You MUST convert to Number() for the filter comparison to work correctly!

    // Your code here:



    // ========================================
    // END YOUR CODE
    // ========================================
});


// ============================================
// SECTION 7: INITIALIZE (Part 4)
// ============================================

// TODO 7: Initialize the app
// Call renderBookmarks when page loads to show initial state

// ========================================
// START YOUR CODE HERE
// ========================================

// renderBookmarks();

// Your code here:

// NOTE: The empty state will show automatically when this is called
renderBookmarks();

// ========================================
// END YOUR CODE
// ========================================


// ============================================
// BONUS SECTION: ADDITIONAL FEATURES
// ============================================

// BONUS 1: Search/Filter functionality
// Filter bookmarks as user types in search input

searchInput.addEventListener('input', (event) => {
    // Your bonus code here:
    // Get search term
    // Filter bookmarks array
    // Render filtered results

});


// BONUS 2: Local Storage
// Save bookmarks to localStorage so they persist after refresh

const saveToLocalStorage = () => {
    // localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
};

const loadFromLocalStorage = () => {
    // const saved = localStorage.getItem('bookmarks');
    // if (saved) {
    //     bookmarks = JSON.parse(saved);
    //     renderBookmarks();
    // }
};

// Call loadFromLocalStorage() on page load
// Call saveToLocalStorage() after any bookmark change


// BONUS 3: URL Validation
// Make sure URL starts with http:// or https://

const isValidUrl = (url) => {
    // Your code here
    // Return true if valid, false if not

    return true;
};


// BONUS 4: Edit bookmark functionality
// Allow users to edit existing bookmarks

const editBookmark = (id) => {
    // Your code here
    // Find bookmark by id
    // Populate form with existing values
    // Change form to "update mode"

};
