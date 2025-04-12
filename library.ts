// Interface for Book
interface Book {
    id: number;
    title: string;
    author: string;
    isAvailable: boolean;
  }
  
  // Interface for Library Member
  interface LibraryMember {
    id: number;
    name: string;
    borrowedBooks: Book[];
  }
  
  // Class for Library System
  class Library {
    private books: Book[] = [];
    private members: LibraryMember[] = [];
  
    constructor() {
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
  
    borrowBook(memberId: number, bookId: number): void {
      const member = this.members.find(m => m.id === memberId);
      const book = this.books.find(b => b.id === bookId);
  
      if (!member) {
        console.log("❌ Member not found.");
        return;
      }
      if (!book) {
        console.log("❌ Book not found.");
        return;
      }
      if (!book.isAvailable) {
        console.log(`⚠️ Book "${book.title}" is already borrowed.`);
        return;
      }
  
      member.borrowedBooks.push(book);
      book.isAvailable = false;
      console.log(`✅ ${member.name} borrowed "${book.title}".`);
    }
  
    returnBook(memberId: number, bookId: number): void {
      const member = this.members.find(m => m.id === memberId);
      const book = this.books.find(b => b.id === bookId);
  
      if (!member || !book) {
        console.log("❌ Member or book not found.");
        return;
      }
  
      const bookIndex = member.borrowedBooks.findIndex(b => b.id === bookId);
      if (bookIndex === -1) {
        console.log(`⚠️ Book not borrowed by ${member.name}.`);
        return;
      }
  
      member.borrowedBooks.splice(bookIndex, 1);
      book.isAvailable = true;
      console.log(`🔄 ${member.name} returned "${book.title}".`);
    }
  
    displayAvailableBooks(): void {
      console.log("📚 Available Books:");
      this.books.filter(b => b.isAvailable).forEach(book => {
        console.log(`ID: ${book.id}, Title: "${book.title}", Author: ${book.author}`);
      });
    }
  
    displayBorrowedBooks(): void {
      console.log("📕 Borrowed Books:");
      this.members.forEach(member => {
        if (member.borrowedBooks.length > 0) {
          console.log(`\n👤 ${member.name} borrowed:`);
          member.borrowedBooks.forEach(book => {
            console.log(` - "${book.title}" by ${book.author}`);
          });
        }
      });
    }
  }
  
  // Sample usage
  const library = new Library();
  
  library.displayAvailableBooks();
  
  library.borrowBook(101, 1);
  library.borrowBook(102, 2);
  library.borrowBook(101, 3);
  
  library.displayBorrowedBooks();
  library.displayAvailableBooks();
  
  library.returnBook(101, 1);
  library.displayAvailableBooks();