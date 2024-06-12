document.getElementById("showFormButton").addEventListener("click", function () {
  document.getElementById("formContainer").classList.remove("hidden");
});

const myList = document.getElementById("myList");

document.getElementById("showBooksButton").addEventListener("click", function () {
  document.querySelector(".listContainer").classList.remove("hidden");
});

document.getElementById("cancelButton").addEventListener("click", function () {
  document.getElementById("formContainer").classList.add("hidden");
});

document.getElementById("cancelButton2").addEventListener("click", function () {
  document.querySelector(".listContainer").classList.add("hidden");
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").value;

  addBookToLibrary(title, author, pages, read);
  updateBookList();
  alert("Form submitted!");
  document.getElementById("formContainer").classList.add("hidden");
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read'}`;
  };
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function updateBookList() {
  // Clear the current list
  myList.innerHTML = "";
  
  // Add books from myLibrary to the list
  myLibrary.forEach(book => {
      const listItem = document.createElement('li');
      listItem.textContent = book.info();
      myList.appendChild(listItem);
  });
}
