// store The Books Details In Arrays 2D
let books = [];

function AddBooks(BookId, BookTitle, Author, Price, Quantity) {
  let ArrayOfAddBooks = [BookId, BookTitle, Author, Price, Quantity];
  return books.push(ArrayOfAddBooks);
}

function DeleteBooks(BookId, BookTitle, Author, Price, Quantity) {
  let ArrayOfDeleteBooks = [BookId, BookTitle, Author, Price, Quantity];
  return books.shift(ArrayOfDeleteBooks);
}

function EditsBooks(BookId, newBookTitle, newAuthor, newPrice, newQuantity) {
  for (let i = 0; i < books.length; i++) {
    if (books[i][0] === BookId) {
      books[i][1] == newBookTitle;
      books[i][2] == newAuthor;
      books[i][3] == newPrice;
      books[i][4] == newQuantity;
      return `Book ${BookId} has been updated successfully.`;
    }
  }
}

function SearchBooks(BookId, BookTitle, Author, Price, Quantit) {
  let Checker = false;
  const SearchBar = BookId || BookTitle || Author || Price || Quantit;
  for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].length; i++) {
      if (books[i][j] == SearchBar) {
        Checker = true;
      }
      if (Checker) {
        return SearchBar + " !Found";
      } else {
        return SearchBar + " !NotFound";
      }
    }
  }
}

function DisplayBooks() {
  console.log("---------------- AddBooks ----------------\n");
  console.log(AddBooks(2, "main-idea", "fahad", 100, 10)); // AddBooks function call
  console.log(AddBooks(1, "main-idea", "fahad", 100, 10)); // AddBooks function call
  console.log(books);
  console.log("\n---------------- DeleteBooks ----------------\n");
  console.log(DeleteBooks(1, "main-idea", "fahad", 100, 10)); // DeleteBooks function call
  console.log("\n---------------- SearchBooks ----------------\n");
  console.log(SearchBooks(1)); // SearchBooks function call
  console.log("\n---------------- EditBooks ----------------\n");
  console.log(EditsBooks(1, "main-fahad", "Ali", 101, 11)); // EditsBooks function call
  console.log(books); // print books array
}

DisplayBooks();
