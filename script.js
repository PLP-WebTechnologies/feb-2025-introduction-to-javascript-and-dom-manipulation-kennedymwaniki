// This file contains JavaScript functions for dynamic DOM manipulation and user interaction.

// Change text content dynamically
document.addEventListener('DOMContentLoaded', () => {
    const homeHeading = document.querySelector('#home h2');
    homeHeading.textContent = 'Welcome to Your Library!';

    // Modify CSS styles via JavaScript
    const catalogueSection = document.getElementById('catalogue');
    catalogueSection.style.backgroundColor = '#f9f9f9';
    catalogueSection.style.padding = '20px';
    catalogueSection.style.borderRadius = '5px';

    // Add or remove an element when a button is clicked
    const bookList = document.getElementById('book-list');
    const addButton = document.createElement('button');
    addButton.textContent = 'Add a Book';
    catalogueSection.appendChild(addButton);

    addButton.addEventListener('click', () => {
        const newBook = document.createElement('li');
        newBook.textContent = 'New Book Title by Author Name';
        bookList.appendChild(newBook);
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Last Book';
    catalogueSection.appendChild(removeButton);

    removeButton.addEventListener('click', () => {
        if (bookList.lastElementChild) {
            bookList.removeChild(bookList.lastElementChild);
        }
    });

    const changeTextButton = document.getElementById('change-text');
    const toggleStyleButton = document.getElementById('toggle-style');
    const addElementButton = document.getElementById('add-element');
    const removeElementButton = document.getElementById('remove-element');
    const contentDiv = document.getElementById('content');

    changeTextButton.addEventListener('click', () => {
        contentDiv.textContent = 'The text has been changed dynamically!';
    });

    toggleStyleButton.addEventListener('click', () => {
        contentDiv.classList.toggle('highlight');
    });

    addElementButton.addEventListener('click', () => {
        const newElement = document.createElement('p');
        newElement.textContent = 'A new paragraph has been added!';
        contentDiv.appendChild(newElement);
    });

    removeElementButton.addEventListener('click', () => {
        const paragraphs = contentDiv.getElementsByTagName('p');
        if (paragraphs.length > 0) {
            contentDiv.removeChild(paragraphs[paragraphs.length - 1]);
        } else {
            alert('No paragraphs to remove!');
        }
    });
});
