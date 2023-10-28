import { Book } from "../../Model/Book";
import { BookDetails } from "./BookDetails";
import {RootContainer} from './BookList-styles';
import {FaRegEye} from 'react-icons/fa';

export function BookList(props:{books: Book[]}) {

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
                  <button><FaRegEye/></button>
                </td>
              </tr>
            ),
            (
              <tr key={'_' + book.id}>
                <td colSpan={3}>
                  <BookDetails book={book}/>
                </td>
              </tr>
            )
          ])}
        </tbody>
      </table>
    </RootContainer>
  )
}