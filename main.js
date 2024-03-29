
const myLibrary = [];

let booksTable = document.querySelector('.books-data');
let tableData = document.querySelector('.table-data');
let addButton = document.querySelector('.add-book')


let dune = new Book("Dune", "Frank Herbert", 340, "read");
let learnLikeAPro = new Book("Learn Like a Pro", "Barbara Oakley", 200, "read");
myLibrary.push(dune);
myLibrary.push(learnLikeAPro);

console.log(myLibrary);

addBookToLibrary();


function addBookToLibrary() {

  myLibrary.forEach(book => {
    const row = createTableRow(book);
    tableData.appendChild(row);
});

}

function createTableRow(book) {
  const bookProperties = ['title', 'author', 'pagesAmount', 'status'];

  const row = document.createElement('tr');

  bookProperties.forEach(property => {
    const cell = document.createElement('td');
    const cellText = document.createTextNode(book[property]);
    cell.appendChild(cellText);
    row.appendChild(cell);
  })

  return row;
}