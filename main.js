const container = document.querySelector(".books-container");
const dialog = document.querySelector(".add-book-dialog");
let tableData = document.querySelector(".table-data");
let form = document.querySelector(".add-new-book-form");
let library = new Library();

let checkForm;

container.addEventListener("click", processPageClicks);

let dune = new Book("Dune", "Frank Herbert", 340, "read");
let learnLikeAPro = new Book(
  "Learn Like a Pro",
  "Barbara Oakley",
  200,
  "not-read"
);

updateLibraryData(dune);
updateLibraryData(learnLikeAPro);



function processPageClicks(event) {
  if (event.target.classList.contains("add-book")) {
    openDialog();
    dialog.addEventListener("click", processDialogClicks);

    let inputs = dialog.querySelectorAll("input");
    let submitButton = dialog.querySelector(".submit-button");

    checkForm = () => checkIfFormIsFilled(inputs, submitButton);
    dialog.addEventListener("input", checkForm);
  } else if (event.target.classList.contains('status-span')) {
    toggleReadStatus(event);
  } else if (event.target.parentNode.classList.contains('table-row')) {
    toggleCheckbox(event);
  }
}

function checkIfFormIsFilled(inputs, submitButton) {
  let allFilled = Array.from(inputs).every((input) => input.value !== "");

  submitButton.disabled = !allFilled;
}

function processDialogClicks(event) {
  if (event.target.classList.contains("close-dialog")) {
    closeDialog();
  } else if (event.target.classList.contains('submit-button')) {
    addNewBook(event);
    closeDialog();
  }
}

function addNewBook(event) {
  event.preventDefault();
  let book = createBookFromUserData();
  console.log(book);
  
  updateLibraryData(book);

  closeDialog();
}

function createBookFromUserData() {
  let bookData = {};
  Book.properties.forEach((property) => {
    console.log(form.elements[property].value);
    bookData[property] = form.elements[property].value;
  });  
  console.log(bookData);
  
  return new Book(bookData.title, bookData.author, bookData['pages-amount'], bookData.status);
}

function updateLibraryData(book) {
  library.addBook(book);
  addBookToTable(book);
}

function addBookToTable(book) {
  const row = createTableRow(book);
  console.log(library.booksAmount() - 1);
  
  row.id = library.booksAmount() - 1;
  tableData.appendChild(row);
}

function createTableRow(book) {
  const row = document.createElement("tr");
  row.classList.add("table-row");

  addCheckbox(row);

  Book.properties.forEach((property) => {
    const cell = document.createElement("td");
    cell.classList.add(property);

    if (property === "status") {
      const span = document.createElement("span");
      span.classList.add("status-span", book[property]);
      span.textContent = book[property];
      cell.appendChild(span);
    } else {
      const cellText = document.createTextNode(book[property]);
      cell.appendChild(cellText);
    }

    row.appendChild(cell);
  });

  return row;
}

function toggleReadStatus(event) {
  let element = event.target;
  let parentId = element.parentNode.parentNode.id;

  let currentBook = library.storage[parentId];
  currentBook.status = currentBook.status === "read" ? "not-read" : "read";

  if (element.classList.contains("read")) {
    element.classList.replace("read", "not-read");
  } else if (element.classList.contains("not-read")) {
    element.classList.replace("not-read", "read");
  }

  element.textContent = element.textContent === "read" ? "not-read" : "read";
}


/* Dialog Processing */

function closeDialog() {
  dialog.removeEventListener("click", processDialogClicks);
  dialog.removeEventListener("input", checkForm);
  dialog.close();
  form.reset();
}

function openDialog() {
  dialog.showModal();
}

function addAllBooks(books) {
  books.forEach((book) => {
    addBookToLibrary(book);
  });
}

/* Checkbox Processing */

function addCheckbox(row) {
  let checkboxCell = document.createElement("td");
  checkboxCell.classList.add("checkbox-cell");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkboxCell.appendChild(checkbox);
  row.appendChild(checkboxCell);
}

function toggleCheckbox(event) {
  if (event.target.classList.contains("status-span")) {
    return;
  }

  let currentRow = event.target.parentNode;
  
  let checkbox = currentRow.querySelector('input[type="checkbox"]');
  checkbox.checked = !checkbox.checked;
}