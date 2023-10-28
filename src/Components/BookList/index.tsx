import { useContext, useState } from "react";
import { BookDetails } from "./BookDetails";
import {RootContainer} from './BookList-styles';
import {FaRegEye} from 'react-icons/fa';
import { BooksContext } from "../../Context/books-context";

export function BookList() {
  const {books} = useContext(BooksContext);

  const [detailedBooks, setDetailedBooks] = useState([] as string[]);

  function toggleDetails(bookId: string) 
  {
    const newList = detailedBooks.filter(detailedBookId => detailedBookId !== bookId);
    if (newList.length === detailedBooks.length)
      newList.push(bookId);

    setDetailedBooks(newList);
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
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishYear.toString()}</td>
                <td>
                  <button onClick={() => toggleDetails(book.id)}>
                    <FaRegEye/>
                  </button>
                </td>
              </tr>
            ),
            (
              <tr key={'_' + book.id}>
                <td colSpan={3}>
                  <BookDetails book={book} visible={detailedBooks.some(bookId => bookId === book.id)} />
                </td>
              </tr>
            )
          ])}
        </tbody>
      </table>
    </RootContainer>
  )
}