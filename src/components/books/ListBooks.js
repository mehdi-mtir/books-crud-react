
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from '../../App';

function ListBook(props){
  const{books, setBooks} = useContext(BookContext);

  const deleteBook = (isbn)=>{
    if(window.confirm('Êtes-vous sûre de vouloir supprimer le livre?'))
      setBooks(books.filter(b=>b.isbn!==isbn));
  }

  return (
    <div className="row">
      <h1>List Book Component</h1>
      <Link className="btn btn-success col-3" to={'/books/add'}>Ajouter un nouveau livre</Link>
      <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Titre</th>
        <th scope="col">Auteur</th>
        <th scope="col">Editer</th>
        <th scope="col">Supprimer</th>
      </tr>
    </thead>
    <tbody>
      {
        books.map(book=><tr key={book.isbn}>
          <th scope="row">{book.isbn}</th>
          <td>{book.titre}</td>
          <td>{book.auteur}</td>
          <td><Link className="btn btn-primary" to={`/books/update/${book.isbn}`} >Editer</Link></td>
          <td><button className="btn btn-danger" onClick={()=>{deleteBook(book.isbn)}}>Supprimer</button></td>
        </tr>)
      }

      </tbody>
      </table>
    </div>
  );
}

export default ListBook;
