import "./books.css";

import { Button } from "react-bootstrap";
import type { BookItem } from "../types";

type BookProps = {  
  book: BookItem;
  toggleRead: (id: number) => void;
  deleteBook: (id: number) => void;
};

export default function Book({ book, toggleRead, deleteBook }: BookProps) {
  return (
    <div className="book">
      <p className={book?.completed ? "book-title-completed " : ""}>
        {book.title}
      </p>
      <div className="btn-group">
        <Button 
          variant="success" 
          onClick={() => toggleRead(book?.id)}>
          {book?.completed ? "Read" : "Unread"}
          
        </Button>
        <Button variant="danger"
          onClick={() => deleteBook(book.id)}>
        Delete
        </Button>
      </div>
    </div>
  );
}