const { constant } = require("async");

let library = [];

const booklet = document.querySelector('.book');
const bookShelf = document.querySelector('#bookShelf');
let idBook = library.length;

function Book(title, author){
  this.id = idBook;
  this.title = title;
  this.author = author;

  idBook += 1;
}

function reloadLibrary() {
  library = JSON.parse(localStorage.library);

  bookShelf.innerHTML = '';
  bookShelf.appendChild(booklet);

  for (let i = 0; i < library.length; i += 1) {
    displayBook(library[i]);
  }
}

function saveBook(title, author){
  const book = new Book(title, author);
  if (!Array.isArray(library)){
    library = [];
  }
  library.push(book);
  localStorage.library = JSON.stringify(library);
  reloadLibrary();
}

function addBook(){
  e.preventDefault();
  const formAddBook = document.forms.addBook;
  const bookData = new FormData(formAddBook);

  const bookTitle = bookData.get('title');
  const bookAuthor = bookData.get('author');

  formAddBook.reset();

  saveBook(bookTitle, bookAuthor);
}

function deleteBook(id) {
  library = library.filter((book) => book.id !== id);

  localStorage.library = JSON.stringify(library);

  reloadLibrary();
}


function displayBook(book) {
  const clon = book.content.cloneNode(true);
  clon.querySelectorAll('p')[0].innerHTML = 'BOOK NAME: '+book.title;
  clon.querySelectorAll('p')[1].innerHTML = 'AUTHOR NAME: '+book.author;

  clon.querySelector('button').addEventListener('click', () => { deleteBook(book.id); });

  bookShelf.appendChild(clon);
}

reloadLibrary();