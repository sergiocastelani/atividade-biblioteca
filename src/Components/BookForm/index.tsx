import { useContext } from "react";
import { BooksContext } from "../../Context/books-context";
import { useParams } from "react-router-dom";

export function BookForm() 
{
  const { books } = useContext(BooksContext);
  const { bookId } = useParams();

  return (
    <div>
      <div>
        <label>Título<span>*</span></label>
        <input type="text" className="form-control" name="title" id="title" required aria-required="true"/>
      </div>
      <div>
        <label>Autor<span>*</span></label>
        <input type="text" className="form-control" name="author" id="author" required aria-required="true"/>
      </div>
      <div>
        <label>Ano de Publicação</label>
        <input type="number" className="form-control" name="publishYear" value="1900" min="1600" max="2023" id="publishYear"/>
      </div>
      <div>
        <label>Data de Cadastro</label>
        <input type="date" className="form-control" name="registrationDate" id="registrationDate"/>
      </div>
      <div>
        <label>Gênero</label>
        <select className="form-control" name="class" id="class">
          <option value="épico" selected id="class-0">Épico</option>
          <option value="lírico" id="class-1">Lírico</option>
          <option value="dramático" id="class-2">Dramático</option>
        </select>
      </div>
      <div>
        <label>Descrição</label>
        <textarea className="form-control" name="description" maxLength={300} rows={10} id="description"></textarea>
      </div>
    </div>
  );
}