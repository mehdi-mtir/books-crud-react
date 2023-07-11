import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Book from '../../model/Book';

function UpdateBook(props){
  const [book, setBook] = useState(new Book('', '', ''));
  const {isbn} = useParams();
  const navigate = useNavigate();


  useEffect(
    ()=>{
      async function getBook(){
        console.log('use effect callback execute');
        const bookToEdit = await props.books.find(b=>b.isbn === isbn);
        if (bookToEdit)
          setBook(bookToEdit);
      }
      getBook();
    }, []);

  const inputHandler = ({target})=>{
    //console.log(target);
    setBook({...book, [target.name] : target.value});
  }

  return <div clasname="row">
      <h1>Update Book Component</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="isbn" className="form-label" >Isbn</label>
          <input type="text" className="form-control" id="isbn" name="isbn" value={book.isbn} onChange={inputHandler} readOnly/>
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
          props.refEditBook(book);
          navigate('/books');
        }
        }>Valider</button>
      </form>
    </div>
}

export default UpdateBook;
