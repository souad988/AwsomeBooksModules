export class Book {
    static id = -1;
  
    constructor(title, author) {
      this.title = title;
      this.author = author;
      Book.id += 1;
      this.idx = Book.id;
    }
  }
  