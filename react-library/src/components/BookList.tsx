import React from "react";

interface Book {
  id: number;
  title: string;
  author: string;
}

interface BookListProps {
  books: Book[];
  onBookClick: (title: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onBookClick }) => {
  return (
    <div className="mt-6">
      {books.length > 0 ? (
        books.map((book) => (
          <div
            key={book.id}
            className="bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer"
            onClick={() => onBookClick(book.title)}
          >
            <p>{book.title} - {book.author}</p>
          </div>
        ))
      ) : (
        <p>No se encontraron libros.</p>
      )}
    </div>
  );
};

export default BookList;
