import { useState } from "react";
import Book from "../../model/Book";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from '../../App';

function AddBook(props){
  const{books, setBooks} = useContext(BookContext);

  const [book, setBook] = useState(new Book('', '', ''));
  const navigate = useNavigate();

  const inputHandler = ({target})=>{
    console.log(target);
    setBook({...book, [target.name] : target.value});
  }

  const addBook = (book)=>{
    setBooks([...books, book]);
  }

  return <div clasname="row">
      <h1>Add Book Component</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label">Isbn</label>
          <input type="text" className="form-control" id="isbn" name="isbn" value={book.isbn} onChange={inputHandler} />
        </div>
        <div className="mb-3">
          <label htmlFor="titre" className="form-label">Titre</label>
          <input type="text" className="form-control" id="titre" name="titre" value={book.titre} onChange={inputHandler} />
        </div>
        <div className="mb-3">
          <label htmlFor="auteur" className="form-label">Auteur</label>
          <input type="text" className="form-control" id="auteur" name="auteur" value={book.auteur} onChange={inputHandler} />
        </div>
        <button type="button" className="btn btn-primary" onClick={()=>{
          addBook(book);
          navigate('/books');
        }
        }>Valider</button>
      </form>
    </div>
}

export default AddBook;
