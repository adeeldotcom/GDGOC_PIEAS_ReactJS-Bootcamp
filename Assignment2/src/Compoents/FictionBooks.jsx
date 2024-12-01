import React from "react";
import { Books } from "../books";
import BookCard from "./BookCard";
import "../Stylescss/Booksfiction.css";

const FictionBooks = () => {
  const fictionBooks = Books.filter(book => book.genre.toLowerCase() === "fiction");

  return (
    <div className="fiction-books-section">
      <h2 className="fiction-books-title">Fiction Books</h2>
      <div className="fiction-books-grid">
        {fictionBooks.map(book => (
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

export default FictionBooks;
