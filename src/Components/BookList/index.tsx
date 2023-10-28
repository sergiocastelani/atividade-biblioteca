import { Book } from "../../Model/Book";

export function BookList(props:{books: Book[]}) {

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>Ano de Publicação</th>
          </tr>
        </thead>

        <tbody>
          {props.books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishDate.getFullYear()}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}