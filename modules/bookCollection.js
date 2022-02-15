import Book from './book.js';

export default class BookCollection {
  constructor() {
    this.books = [];
  }

  add(title, author) {
    const newBook = new Book(title, author);
    this.books.push(newBook);
  }

  remove(id) {
    this.books = this.books.filter((book) => book.idx !== parseInt(id, 10));
  }

  getBooks() {
    return this.books;
  }

  setBooks(books) {
    this.books = books;
  }
}