/* eslint-disable import/no-extraneous-dependencies */
import { DateTime } from './modules/luxon.js';
import Book from './modules/books.js';
import Storage from './modules/storage.js';
import UItask from './modules/ui.js';

const bookList = document.getElementById('book-list');
/* Display books */
document.addEventListener('DOMContentLoaded', UItask.displayBooks);
/* Avoids the empty border in the books section */
document.addEventListener('DOMContentLoaded', () => {
  if (bookList.innerHTML === '') {
    bookList.classList.add('invisible');
  } else {
    bookList.classList = 'book-list';
  }
});

/* Adding a book to the list */
const bookForm = document.getElementById('add-form');

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  /* Get values from the form */
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  /* Create the book */
  const book = new Book(title, author);

  /* Add book to the list (create the book in the UI) */
  UItask.addBook(book);
  /* Enables the book section border */
  bookList.classList = 'book-list';

  /* Save book in local storage */
  Storage.addBookLocalStorage(book);

  /* Clear Inputs */
  UItask.clearInputs();
});

/* Remove Book from the list */
bookList.addEventListener('click', (e) => {
  /* Remove book from the list */
  UItask.deleteBook(e.target);
  /* Disables the book section border */
  if (bookList.innerHTML === '') {
    bookList.classList.add('invisible');
  }
  /* Remove book from the local storage */
  Storage.removeBook(e.target.previousElementSibling.previousElementSibling.textContent);
});

/* Getting the containers of the sections */
const contactSection = document.getElementById('contact-me');
const formContainer = document.querySelector('.form-container');
const bookContainer = document.getElementById('books-container');

/* Navigation */
document.addEventListener('DOMContentLoaded', () => {
  contactSection.classList.add('invisible');
  formContainer.classList.add('invisible');
  bookContainer.classList.remove('invisible');
});
/* Getting the buttons from the navbar */
const listBtn = document.getElementById('btn-list');
const addBtn = document.getElementById('btn-add');
const contactBtn = document.getElementById('btn-contact');

listBtn.addEventListener('click', () => {
  contactSection.classList.add('invisible');
  formContainer.classList.add('invisible');
  bookContainer.classList.remove('invisible');
  /* Getting active button */
  listBtn.classList.add('active');
  contactBtn.classList.remove('active');
  addBtn.classList.remove('active');
});

addBtn.addEventListener('click', () => {
  contactSection.classList.add('invisible');
  bookContainer.classList.add('invisible');
  formContainer.classList.remove('invisible');
  /* Getting active button */
  addBtn.classList.add('active');
  listBtn.classList.remove('active');
  contactBtn.classList.remove('active');
});

contactBtn.addEventListener('click', () => {
  formContainer.classList.add('invisible');
  bookContainer.classList.add('invisible');
  contactSection.classList.remove('invisible');
  /* Getting active button */
  contactBtn.classList.add('active');
  listBtn.classList.remove('active');
  addBtn.classList.remove('active');
});

const displayDate = () => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('date').innerHTML = date;
};

document.addEventListener('DOMContentLoaded', displayDate());