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

