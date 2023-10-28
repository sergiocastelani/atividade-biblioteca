import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../Context/books-context";
import { useNavigate, useParams } from "react-router-dom";
import { Book, BookClass, IBook } from "../../Model/Book";

function findBookOrThrow(books : IBook[], bookId:string)
{
  const book = books.find(b => b.id === bookId);
  if (! book)
    throw new Error("Book not found");

  return book;
}

function formatDate(d: Date)
{
  return d.getUTCFullYear().toString().padStart(4, '0') + '-' + (d.getUTCMonth()+1).toString().padStart(2, '0') + '-' + d.getUTCDate().toString().padStart(2, '0');
}

export function BookForm() 
{
  const navigate = useNavigate();

  function saveBook()
  {
    if (bookId)
    {
      const index = books.findIndex(b => b.id === bookId);
      if (index >= 0)
      {
        books[index] = book;
        setBooks([...books]);
      }
    }
    else
    {
      setBooks([...books, book]);
    }
    navigate('/');
  }

  const { books, setBooks } = useContext(BooksContext);
  const { bookId } = useParams();

  const [ book, setBook ] = useState( bookId ? findBookOrThrow(books, bookId) : new Book() );

  useEffect(()=>{
    setBook(
      bookId 
        ? findBookOrThrow(books, bookId)
        : new Book()
    );
  }, [bookId]);

  return (
    <div>
      <div>
        <label>Título<span>*</span></label>
        <input 
          type="text" 
          className="form-control" 
          name="title" 
          id="title" 
          required 
          aria-required="true" 
          value={book.title}
          onChange={e => setBook({...book, title: e.target.value})}
        />
      </div>
      <div>
        <label>Autor<span>*</span></label>
        <input 
          type="text" 
          className="form-control" 
          name="author" 
          id="author" 
          required 
          aria-required="true" 
          value={book.author}
          onChange={e => setBook({...book, author: e.target.value})}
        />
      </div>
      <div>
        <label>Ano de Publicação<span>*</span></label>
        <input 
          type="number" 
          className="form-control" 
          name="publishYear" 
          value={book.publishYear.toString()} 
          min="1600" 
          max="2023" 
          id="publishYear"
          required 
          onChange={e => setBook({...book, publishYear: e.target.valueAsNumber})}
        />
      </div>
      <div>
        <label>Data de Cadastro<span>*</span></label>
        <input 
          type="date" 
          className="form-control" 
          name="registrationDate" 
          id="registrationDate" 
          required
          readOnly={bookId !== undefined}
          value={formatDate(book.registrationDate)}
          onChange={e => setBook({...book, registrationDate: e.target.valueAsDate || new Date()})}
        />
      </div>
      <div>
        <label>Gênero<span>*</span></label>
        <select 
          className="form-control" 
          name="class" 
          id="class" 
          required 
          value={book.class}
          onChange={e => setBook({...book, class: e.target.value as BookClass})}
        >
          <option value="Épico" id="class-0">Épico</option>
          <option value="Lírico" id="class-1">Lírico</option>
          <option value="Dramático" id="class-2">Dramático</option>
        </select>
      </div>
      <div>
        <label>Descrição<span>*</span></label>
        <textarea 
          className="form-control" 
          name="description" 
          maxLength={300} 
          rows={10} 
          id="description"
          required 
          value={book.description}
          onChange={e => setBook({...book, description: e.target.value})}
        >
        </textarea>
      </div>

      <button onClick={saveBook}>Salvar</button>
    </div>
  );
}