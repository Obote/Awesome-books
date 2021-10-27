// let library = [];

// const { disconnect } = require("process");

// const booklet = document.querySelector('.book');
// const bookShelf = document.querySelector('.bookShelf');
// let idBook = library.length;

// function Book(title, author) {
//   this.id = idBook;
//   this.title = title;
//   this.author = author;

//   idBook += 1;
// }

// function ReloadLibrary() {
//   library = JSON.parse(localStorage.library);

//   bookShelf.innerHTML = '';
//   bookShelf.appendChild(booklet);

//   for (let i = 0; i < library.length; i += 1) {
//     // eslint-disable-next-line no-use-before-define
//     DisplayBook(library[i]);
//   }
// }

// function SaveBook(title, author) {
//   const book = new Book(title, author);
//   if (!Array.isArray(library)) {
//     library = [];
//   }
//   library.push(book);
//   localStorage.library = JSON.stringify(library);
//   // eslint-disable-next-line no-undef
//   ReloadLibrary();
// }

// // eslint-disable-next-line no-unused-vars
// function AddBook() {
//   // eslint-disable-next-line no-restricted-globals
//   e.preventDefault();
//   const formAddBook = document.forms.AddBook;
//   const bookData = new FormData(formAddBook);

//   const bookTitle = bookData.get('title');
//   const bookAuthor = bookData.get('author');

//   formAddBook.reset();

//   SaveBook(bookTitle, bookAuthor);
// }

// function DeleteBook(id) {
//   library = library.filter((book) => book.id !== id);

//   localStorage.library = JSON.stringify(library);

//   ReloadLibrary();
// }

// function DisplayBook(book) {
//   const clon = booklet.content.cloneNode(true);
//   // eslint-disable-next-line prefer-template
//   clon.querySelectorAll('p')[0].innerHTML = 'BOOK NAME: ' + book.title;
//   // eslint-disable-next-line prefer-template
//   clon.querySelectorAll('p')[1].innerHTML = 'AUTHOR NAME: ' + book.author;

//   clon.querySelector('button').addEventListener('click', () => { DeleteBook(book.id); });

//   bookShelf.appendChild(clon);
// }

// ReloadLibrary();

const title = document.querySelector('.title');
const author = document.querySelector('.author');
const btn = document.querySelector('.submitBtn');
const library = [];

function Book(title, author, id) {
  this.title = title;
  this.author = author;
  this.id = id;
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const books = new Book(title.value, author.value, library.length);
  library.push(books);
  const div = document.querySelector('.bookShelf');
  div.innerHTML = `<ul class="bookList">
    <li class="bookTitle">${title.value}</li>
    <li class="bookAuthor">${author.value}</li>
    <button class="delete">Delete</button>
  </ul>`;
});
