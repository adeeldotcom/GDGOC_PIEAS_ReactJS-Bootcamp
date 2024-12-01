import React from "react";
import { Books } from "../books";
import BookCard from "./BookCard";
import "../Stylescss/Bookdetails.css"; 
const BookDetails = () => {
  return (
    <div className="book-details-container">
      <h2>All Book Details</h2>
      <div className="book-details-grid">
        {Books.map(book => (
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

export default BookDetails;
