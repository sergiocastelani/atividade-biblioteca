import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { Container } from './styles';

import { IBook, initialBooks } from '../../Model/Book';
import { BooksContext } from '../../Context/books-context';

export function App() {
  const [books, setBooks] = useState<IBook[]>(initialBooks());

  return (
    <Container>
      <BooksContext.Provider value={{books, setBooks}}>
        <Outlet/>
      </BooksContext.Provider>
    </Container>
  )
}
