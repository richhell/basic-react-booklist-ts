import { useState } from 'react'
import Stack from 'react-bootstrap/Stack';
import './App.css'
import Alert from "react-bootstrap/Alert";


import { Button, Form } from 'react-bootstrap'
import { BookItem } from './types'
import BookList from './components/BookList.tsx'
import { listOfBooks } from './data.ts'

function App() {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [books, setBooks] = useState<BookItem[]>(listOfBooks);
  console.log({ listOfBooks });
  const [newBook, setNewBook] = useState<string>("");

// Add a book to the list of books.
  const addBook = () => {
      if (!newBook) {
        setShowAlert(true);
      return;
      }
      const book: BookItem = {
      id: books.length + 1,
      title: newBook,
      completed: false,
    };
    setBooks([...books, book]);
    setNewBook("");
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
      <div className="title" style ={{ width: "500px"}}>
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>Error!</Alert.Heading>
          <p>
            Please enter a book title before adding it to the list! The field cannot be
            empty.
          </p>
        </Alert>)}

        <h1>Book List for 2025</h1>
        <Form.Control 
          type="text"
          value={newBook}
          onChange={(e) => setNewBook(e.target.value)}
          placeholder="Enter a book title"
        />
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