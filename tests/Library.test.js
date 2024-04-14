const {Library} = require('../src/Library');
const {Book} = require('../src/Book');

describe('Library', () => {
  let library;

  beforeEach(() => {
    library = new Library();
  });

  test('should add a book to the library', () => {
    const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218, 'read');
    library.addBook(book);
    expect(library.booksAmount()).toBe(1);
  });

  test('should add multiple books to the library', () => {
    const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218, 'read');
    const book2 = new Book('Harry Potter', 'Rowling', 400, 'not-read');
    library.addAllBooks(book, book2);
    expect(library.booksAmount()).toBe(2);
  });

  test('should return the correct number of books in the library', () => {
    const book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218, 'read');
    const book2 = new Book('Harry Potter', 'Rowling', 400, 'not-read');
    library.addAllBooks(book, book2);
    expect(library.booksAmount()).toBe(2);
  });
});

