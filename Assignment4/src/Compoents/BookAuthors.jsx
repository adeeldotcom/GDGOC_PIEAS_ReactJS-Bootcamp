
import { Books } from "../books";
import "../Stylescss/Bookauthors.css"; 
const BookAuthors = () => {
  const authors = Books.map((book) => book.author).join(", "); 
  return (
    <div className="writers-container">
      <h2 className="writers-title">Featured Book Authors</h2>
      <div className="writers-cards">
        <p className="writer-name">{authors}</p>
      </div>
    </div>
  );
};

export default BookAuthors;
