import { ListGroup } from "react-bootstrap";
import Book from "./Books.tsx";
import{ BookItem } from '../types.ts';

type BookListProps = {
    books: BookItem[];
    toggleRead: (id: number) => void;
    deleteBook: (id: number) => void;
}

export default function BookList({ 
    books,
    toggleRead,
    deleteBook
 }: BookListProps) {
  console.log( {books} );

  return (
    <ListGroup>
      {books.map((book: BookItem) => (
        <ListGroup.Item key={book.id}>
          <Book 
          book={book} 
          toggleRead={toggleRead}
          deleteBook={deleteBook}/>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}