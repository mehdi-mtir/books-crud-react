import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListBook from './components/books/ListBooks';
import AddBook from './components/books/AddBooks';
import UpdateBook from './components/books/UpdateBooks';
import Book from './model/Book';
import { useState, createContext } from "react";

export const BookContext = createContext();

function App() {

  const [books, setBooks] = useState([])

  return (
    <div className="container">
      <BookContext.Provider value={{books, setBooks}}>
        <BrowserRouter>
        <Routes>
          <Route path="/books" exact element={<ListBook />} />
          <Route path="/books/add" exact element={<AddBook />} />
          <Route path="/books/update/:isbn" exact element={<UpdateBook />} />
        </Routes>
      </BrowserRouter>
    </BookContext.Provider>
    </div>
  );
}

export default App;

/*
const addBook = (book)=>{
    setBooks([...books, book]);
  }

  const editBook = (book)=>{
    setBooks(books.map(
      b=>{
        if(b.isbn === book.isbn){
          return book;
        }
        else{
          return b;
        }
      }
    ));
  }
*/
