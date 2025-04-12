// Class for Library System
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
        // Preload some books
        this.books = [
            { id: 1, title: "1984", author: "George Orwell", isAvailable: true },
            { id: 2, title: "The Alchemist", author: "Paulo Coelho", isAvailable: true },
            { id: 3, title: "Clean Code", author: "Robert C. Martin", isAvailable: true }
        ];
        // Preload some members
        this.members = [
            { id: 101, name: "Alice", borrowedBooks: [] },
            { id: 102, name: "Bob", borrowedBooks: [] }
        ];
    }
    Library.prototype.borrowBook = function (memberId, bookId) {
        var member = this.members.find(function (m) { return m.id === memberId; });
        var book = this.books.find(function (b) { return b.id === bookId; });
        if (!member) {
            console.log("❌ Member not found.");
            return;
        }
        if (!book) {
            console.log("❌ Book not found.");
            return;
        }
        if (!book.isAvailable) {
            console.log("\u26A0\uFE0F Book \"".concat(book.title, "\" is already borrowed."));
            return;
        }
        member.borrowedBooks.push(book);
        book.isAvailable = false;
        console.log("\u2705 ".concat(member.name, " borrowed \"").concat(book.title, "\"."));
    };
    Library.prototype.returnBook = function (memberId, bookId) {
        var member = this.members.find(function (m) { return m.id === memberId; });
        var book = this.books.find(function (b) { return b.id === bookId; });
        if (!member || !book) {
            console.log("❌ Member or book not found.");
            return;
        }
        var bookIndex = member.borrowedBooks.findIndex(function (b) { return b.id === bookId; });
        if (bookIndex === -1) {
            console.log("\u26A0\uFE0F Book not borrowed by ".concat(member.name, "."));
            return;
        }
        member.borrowedBooks.splice(bookIndex, 1);
        book.isAvailable = true;
        console.log("\uD83D\uDD04 ".concat(member.name, " returned \"").concat(book.title, "\"."));
    };
    Library.prototype.displayAvailableBooks = function () {
        console.log("📚 Available Books:");
        this.books.filter(function (b) { return b.isAvailable; }).forEach(function (book) {
            console.log("ID: ".concat(book.id, ", Title: \"").concat(book.title, "\", Author: ").concat(book.author));
        });
    };
    Library.prototype.displayBorrowedBooks = function () {
        console.log("📕 Borrowed Books:");
        this.members.forEach(function (member) {
            if (member.borrowedBooks.length > 0) {
                console.log("\n\uD83D\uDC64 ".concat(member.name, " borrowed:"));
                member.borrowedBooks.forEach(function (book) {
                    console.log(" - \"".concat(book.title, "\" by ").concat(book.author));
                });
            }
        });
    };
    return Library;
}());
// Sample usage
var library = new Library();
library.displayAvailableBooks();
library.borrowBook(101, 1);
library.borrowBook(102, 2);
library.borrowBook(101, 3);
library.displayBorrowedBooks();
library.displayAvailableBooks();
library.returnBook(101, 1);
library.displayAvailableBooks();
