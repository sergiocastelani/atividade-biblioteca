import { useState } from "react";
import { Book } from "../../Model/Book";
import { BookDetails } from "./BookDetails";
import {RootContainer} from './BookList-styles';
import {FaRegEye} from 'react-icons/fa';

export function BookList(props:{books: Book[]}) {
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
          {props.books.map(book => [
            (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishDate.getFullYear()}</td>
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