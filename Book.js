function Book(title, author, pagesAmount, status) {
  this.title = title;
  this.author = author;
  this.pagesAmount = pagesAmount;
  this.status = status;
}

Book.prototype.getTitle = function() {
  return this.title;
}

Book.prototype.getAuthor = function() {
  return this.author;
}

Book.prototype.getPagesAmount = function() {
  return this.pagesAmount;
}

Book.prototype.getStatus = function() {
  return this.status;
}

module.exports = {Book};