//Create a book object constructor
//title, author, pages, read or not

const Book = function(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read

    this.info = function(){
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "you have read this book" : "you haven't read this book"}`);
    }
}

const book1 = new Book("Harry Potter", "J.K Rowling", 245, false);
const book2 = new Book("Catcher in the Rye", "H.K Porzingas", 300, true);
console.log(book1.info());
console.log(book2.info());
