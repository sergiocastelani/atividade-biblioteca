import { Book } from "../../Model/Book";
import { RootContainer } from "./BookDetails-styles";

export function BookDetails(props:{book : Book}) 
{
 return (
  <RootContainer>
    <table>
      <thead>
        <tr>
          <th>Cadastro</th>
          <th>Gênero</th>
          <th>Descrição</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>{props.book.registrationDate.getFullYear()}</td>
          <td>{props.book.class}</td>
          <td>{props.book.description}</td>
        </tr>
      </tbody>

    </table>
  </RootContainer>

 );
}