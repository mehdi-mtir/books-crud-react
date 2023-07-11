import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BookContext } from '../../App';

function ListBook(props){
  const{books, setBooks} = useContext(BookContext);
  const[search, setSearch] = useState('');

  useEffect(
    ()=>{
      async function getBooks(){
        const reponse = await fetch("http://localhost:3000/books");
        const data = await reponse.json();
        setBooks(data);
      }
      getBooks();
    }, []);

  const deleteBook = (book)=>{
    if(window.confirm('Êtes-vous sûre de vouloir supprimer le livre?'))
      fetch(`http://localhost:3000/books/${book.id}`, {'method' : 'DELETE'}).then(
        ()=> setBooks(books.filter(b=>b.isbn!==book.isbn))
      )
  }

  const inputHandler = ({target})=>{
    setSearch(target.value);
  }

  return (
    <div className="row">
      <h1>List Book Component</h1>
      <Link className="btn btn-success col-3" to={'/books/add'}>Ajouter un nouveau livre</Link>
      <input type="text" placeholder="Veuillez saisir un titre" name="search" value={search} onChange={inputHandler} />
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
        books
        .filter(book=>book.titre.includes(search))
        .map(book=><tr key={book.isbn}>
          <th scope="row">{book.isbn}</th>
          <td>{book.titre}</td>
          <td>{book.auteur}</td>
          <td><Link className="btn btn-primary" to={`/books/update/${book.isbn}`} >Editer</Link></td>
          <td><button className="btn btn-danger" onClick={()=>{deleteBook(book)}}>Supprimer</button></td>
        </tr>)
      }

      </tbody>
      </table>
    </div>
  );
}

export default ListBook;
