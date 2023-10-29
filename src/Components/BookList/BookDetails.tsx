import { IBook } from "../../Model/Book";
import { DetailsContainer } from "./BookDetails-styles";

export function BookDetails(props:{book : IBook, visible : boolean}) 
{
 return (
  <DetailsContainer className={props.visible ? "visible" : ""}>
    <h4>Cadastro</h4>
    <p>{props.book.registrationDate.getFullYear()}</p>
    <h4>Gênero</h4>
    <p>{props.book.class}</p>
    <h4>Descrição</h4>
    <p>{props.book.description}</p>
  </DetailsContainer>

 );
}