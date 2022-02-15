import BookCollection from './modules/bookCollection.js';
import { storageAvailable, populateStorage, setInputs } from './modules/localStorage.js';
import displayCurrentDate from './modules/currentDate.js';

const bookCollection = new BookCollection();

const addBookButton = document.querySelector('#add-book');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookForm = document.querySelector('form');
const mainSection = document.querySelector('#main-section');
const empty = document.querySelector('.empty');
const navLinks = document.querySelectorAll('.nav-link');
const content = document.querySelectorAll('.content');
const currentDate = document.querySelector('#date');

displayCurrentDate(currentDate);

if (storageAvailable('localStorage')) {
  if (!localStorage.getItem('books')) {
    populateStorage(bookCollection);
  } else {
    setInputs(bookCollection);
  }
}

/* eventlistners */

function displayBooks() {
  if (document.querySelector('.books')) {
    mainSection.removeChild(document.querySelector('.books'));
  }
  if (bookCollection.books.length === 0) {
    empty.innerHTML = 'Book list is empty!!';
  } else {
    empty.innerHTML = '';
    const booksContainer = document.createElement('ul');
    booksContainer.classList.add('books');

    mainSection.appendChild(booksContainer);
    bookCollection.books.forEach((book) => {
      booksContainer.innerHTML += `
                   
                                     <li>
                                      <span>"${book.title}"&nbsp;
                                      by &nbsp;&nbsp;
  
                                      ${book.author}</span>
                                      <button id=${book.idx} class=' btn remove'>Remove</button>
                                      </li>`;
    });
  }
}

displayBooks();
document.addEventListener('DOMContentLoaded', () => {
  console.log('entred');
});

mainSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove')) {
    const num = e.target.id;
    bookCollection.remove(num);
    populateStorage(bookCollection);
    displayBooks();
  }
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  displayBooks();
});

addBookButton.addEventListener('click', () => {
  bookCollection.add(bookTitle.value, bookAuthor.value);
  populateStorage(bookCollection);
  bookTitle.value = '';
  bookAuthor.value = '';
});

navLinks.forEach((link) => link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('link clicked', link);
  content.forEach((item) => {
    item.classList.remove('show');
    item.classList.add('hide');
  });
  const selectedSection = document.querySelector(`.${link.id}`);
  selectedSection.classList.remove('hide');
  selectedSection.classList.add('show');
}));
