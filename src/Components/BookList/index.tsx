import { useContext, useState } from "react";
import { BookDetails } from "./BookDetails";
import {ActionButtonsCell, RootContainer, StyledButton} from './BookList-styles';
import {FaPen, FaRegEye, FaTrashAlt} from 'react-icons/fa';
import { BooksContext } from "../../Context/books-context";
import { useNavigate } from "react-router-dom";

export function BookList() {
  const navigate = useNavigate();
  const {books, setBooks} = useContext(BooksContext);

  const [detailedBooks, setDetailedBooks] = useState([] as string[]);

  function toggleDetails(bookId: string) 
  {
    const newList = detailedBooks.filter(detailedBookId => detailedBookId !== bookId);
    if (newList.length === detailedBooks.length)
      newList.push(bookId);

    setDetailedBooks(newList);
  }

  function editBook(bookId: string)
  {
    navigate(`/edit/${bookId}`);
  }

  function addBook()
  {
    navigate("/new");
  }

  function deleteBook(bookId: string, bookTitle: string)
  {
    if(confirm(`Deseja realmenta apagar o livro '${bookTitle}'?`))
    setBooks(books.filter(b => b.id !== bookId));
  }

  return (
    <RootContainer>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Publicação</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {books.map(book => [
            (
              <tr key={book.id} className="book-line">
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishYear.toString()}</td>
                <td>
                  <ActionButtonsCell>
                    <StyledButton onClick={() => toggleDetails(book.id)}>
                      <FaRegEye/>
                    </StyledButton>
                    <StyledButton onClick={() => editBook(book.id)}>
                      <FaPen/>
                    </StyledButton>
                    <StyledButton onClick={() => deleteBook(book.id, book.title)}>
                      <FaTrashAlt/>
                    </StyledButton>
                  </ActionButtonsCell>
                </td>
              </tr>
            ),
            (
              <tr key={'_' + book.id}>
                <td colSpan={4}>
                  <BookDetails book={book} visible={detailedBooks.some(bookId => bookId === book.id)} />
                </td>
              </tr>
            )
          ])}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={4}>
              <StyledButton onClick={addBook}>Adicionar Livro</StyledButton>
            </td>
          </tr>
        </tfoot>
      </table>
    </RootContainer>
  )
}