import books from "./book.mjs";
const rating=(books)=>{
  books.forEach( books => {
    if(books.Rating>4.5){
        console.log(books.Title);   
    }
  });
}
console.log(`\n Books titles with rating higher than 4.5\n`);
rating(books);

const Details=(books)=>{
    books.forEach(({Author,Title,Rating ,Genre})=> {
    console.log(`Author : ${Author}, Title: ${Title}, Rating: ${Rating}, Genre: ${Genre}`);
    
    })
  };
  
console.log(`\n A function that iterates over an array of books and prints their details 
(title, author, rating, genre).\n`);
  Details(books);

  const genre=(books)=>{
    books.forEach(books => {
      if (books.Genre==='Fiction') {
     console.log(books.Title);
        
      }
    });

  }
  console.log(`\n A function that prints book titles with the genre “fiction”.\n`);    
  genre(books);

  const author=(books)=>{
    books.forEach(books => (
      console.log(books.Author)
    ));
  }
  console.log(`\n A function that display an array of book authors \n`);
  author(books);