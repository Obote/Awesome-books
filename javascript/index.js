let books = [];
const inputTitle = document.querySelector('#input1');
const inputAuthor = document.querySelector('#input2');
const btn = document.querySelector('.btn-add');
const bookHolder = document.querySelector('.list');

class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }

  addBookMethod() {
    books.push({ id: this.id, title: this.title, author: this.author });

    const newBookHTML = `<ul id="${this.id}"><span>${this.title}&nbsp&nbsp&nbsp&nbsp</span>
    <span>${this.author}&nbsp&nbsp&nbsp&nbsp</span>
    <button id="${this.id}" class="btn btn-danger">Remove</button>
    <hr></ul`;

    bookHolder.insertAdjacentHTML('beforeend', newBookHTML);

    localStorage.setItem('data', JSON.stringify(books));
  }

  removeBookMethod() {
    books = books.filter((book) => book.id.toString() !== this.id);

    const bookToDelete = document.getElementById(this.id);
    bookToDelete.remove();
    localStorage.setItem('data', JSON.stringify(books));
  }
}

function addBook() {
  const id = Math.random();
  const title = inputTitle.value;
  const author = inputAuthor.value;

  const newBook = new Book(id, title, author);
  newBook.addBookMethod();

  const removeButton = document.getElementById(id);
  removeButton.addEventListener('click', newBook.removeBookMethod);

  inputTitle.value = '';
  inputAuthor.value = '';
}
btn.addEventListener('click', addBook);

const onLoadBooks = (id, title, author) => {
  const newBook = new Book(id, title, author);
  newBook.addBookMethod();

  const removeButton = document.getElementById(id);
  removeButton.addEventListener('click', newBook.removeBookMethod);
};

window.onload = function onload() {
  const tempBooks = JSON.parse(localStorage.getItem('data'));

  if (tempBooks && tempBooks.length) {
    for (let i = 0; i < tempBooks.length; i += 1) {
      onLoadBooks(tempBooks[i].id, tempBooks[i].title, tempBooks[i].author);
    }
  }
};

// Navigation section

function navSection(navItem) {
  const booklist = document.getElementById('bookList');
  const addbook = document.getElementById('addBook');
  const cont = document.getElementById('contact');

  if (navItem === 'bookList') {
    booklist.style.display = 'block';
    addbook.style.display = 'none';
    cont.style.display = 'none';
  } else if (navItem === 'addBook') {
    addbook.style.display = 'block';
    booklist.style.display = 'none';
    cont.style.display = 'none';
  } else {
    cont.style.display = 'block';
    booklist.style.display = 'none';
    addbook.style.display = 'none';
  }
}
navSection();

function dateTime() {
  // eslint-disable-next-line no-undef
  const luxonDate = luxon.DateTime.local();
  const dateFormat = `${luxonDate.monthLong} ${luxonDate.day}th ${luxonDate.year}, ${luxonDate.hour}:${luxonDate.minute}:${luxonDate.second} `;
  document.getElementById('timeDiv').innerHTML = `${dateFormat}`;
}
dateTime();
window.onload = function onload() {
  setInterval(dateTime, 100);
};
