import React from "react";
import { Books } from "../books";
import BookCard from "./BookCard";
import "../Stylescss/Ratinghigh.css"; 

const HighRatedBooks = () => {
  const highRatedBooks = Books.filter(book => book.rating > 4.5);

  return (
    <div className="high-rated-books-section">
      <h2 className="high-rated-books-title">High Rated Books</h2>
      <div className="high-rated-books-grid">
        {highRatedBooks.map(book => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            rating={book.rating}
            genre={book.genre}
          />
        ))}
      </div>
    </div>
  );
};

export default HighRatedBooks;
