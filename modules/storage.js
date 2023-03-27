/* Class Store: Used to work with Local Storage */
class Storage {
  /* Loading books from local storage */
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  /* Add book to local Storage */
  static addBookLocalStorage(book) {
    const books = Storage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  /* Remove book from local storage */
  static removeBook(title) {
    const books = Storage.getBooks();

    books.forEach((book, i) => {
      if (book.title === title) {
        books.splice(i, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

export default Storage;