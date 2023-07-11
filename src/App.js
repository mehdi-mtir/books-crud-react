import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListBook from './components/books/ListBooks';
import AddBook from './components/books/AddBooks';
import UpdateBook from './components/books/UpdateBooks';
import Book from './model/Book';
import { useState } from "react";


function App() {
  const [books, setBooks] = useState([
    new Book('1234', 'L\'orange mécanique', 'Anthony Burgess'),
    new Book('5678', 'La gloire de mon père', 'Marcel Pagnol'),
    new Book('9876', 'Martine à la plage', 'Terry Amartin')
  ])

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

  const deleteBook = (isbn)=>{
    if(window.confirm('Êtes-vous sûre de vouloir supprimer le livre?'))
      setBooks(books.filter(b=>b.isbn!==isbn));
  }

  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/books" exact element={<ListBook books={books} refDeleteBook={deleteBook} />} />
        <Route path="/books/add" exact element={<AddBook refAddBook={addBook} />} />
        <Route path="/books/update/:isbn" exact element={<UpdateBook books={books} refEditBook={editBook} />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
