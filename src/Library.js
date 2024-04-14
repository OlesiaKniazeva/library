class Library {
  storage = [];
}

Library.prototype.addBook = function(book) {
  this.storage.push(book);
}

Library.prototype.addAllBooks = function(...books) {
  this.storage.push(...books); 
}

Library.prototype.booksAmount = function() {
  return this.storage.length;
}

module.exports = {Library};