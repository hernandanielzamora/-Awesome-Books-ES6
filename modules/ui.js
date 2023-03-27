import Storage from './storage.js';
/* Class UI : Handles UI Tasks */
class UItask {
  /* Show Books */
  static displayBooks() {
    const books = Storage.getBooks();
    books.forEach((book) => {
      UItask.addBook(book);
    });
  }

  /* Add Book to list */
  static addBook(book) {
    const bookList = document.getElementById('book-list');
    const bookContent = document.createElement('div');
    bookContent.className = 'book';
    bookContent.innerHTML = `<p class="book-title">${book.title}</p>
                      <p class="book-author">by ${book.author}</p>
                      <button class="delete">Remove</button>`;
    bookList.appendChild(bookContent);
  }

  /* Delete Book From List */
  static deleteBook(book) {
    if (book.classList.contains('delete')) {
      book.parentElement.remove();
    }
  }

  /* Clear Inputs */
  static clearInputs() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }
}

export default UItask;