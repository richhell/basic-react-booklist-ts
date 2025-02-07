import { useState } from 'react'
import Stack from 'react-bootstrap/Stack';
import './App.css'
import { Button } from 'react-bootstrap'
import { BookItem } from './types'
import BookList from './components/BookList.tsx'
import { listOfBooks } from './data'

function App() {
  const [books, setBooks] = useState<BookItem[]>(listOfBooks);
  console.log({ listOfBooks });

// Add a book to the list of books.
  const addBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "New Book",
      completed: false,
    };
    setBooks([...books, newBook]);
  };

  // Toggle the read status of a book.
  const toggleRead = (id: number) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        book.completed = !book.completed;
      }
        return book;
    });
    setBooks(updatedBooks);
  };

  // Delete a book from the list.
  const deleteBook = (id: number) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  // Display the list of books with the ability to add a book, toggle read status, and delete a book.
  return (
    <Stack gap={2}>
      <div className="title">
        <h1>Book List for 2025</h1>
        <Button className="mt-2 mb-2" onClick={addBook}>
          Add Book
          </Button>
      </div>
      
      <div className="p-2">
        <h5>Current List of Books to Read in 2025</h5>
        <BookList 
        books={books} 
        toggleRead={toggleRead}
        deleteBook={deleteBook}
        />
      </div>
  </Stack>
      
  )

}

export default App