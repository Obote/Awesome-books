const { constant } = require("async");

let library = [];

const book = document.querySelector('.book');
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
  bookShelf.appendChild(book);

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

