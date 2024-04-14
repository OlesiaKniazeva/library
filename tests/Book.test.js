const {Book} = require('../src/Book');

describe('Book', () => {
  let book;

  beforeEach(() => {
    book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218, 'read');
  });

  it('should have the correct title', () => {
    expect(book.getTitle()).toBe('The Great Gatsby');
  });

  it('should have the correct author', () => {
    expect(book.getAuthor()).toBe('F. Scott Fitzgerald');
  });

  it('should have the correct number of pages', () => {
    expect(book.getPagesAmount()).toBe(218);
  });

  it('should have the correct status', () => {
    expect(book.getStatus()).toBe('read');
  });
});
