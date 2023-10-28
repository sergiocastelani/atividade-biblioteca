import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import './styles.css'
import { IBook, initialBooks } from '../../Model/Book';
import { BooksContext } from '../../Context/books-context';

export function App() {
  const [books, setBooks] = useState<IBook[]>(initialBooks());

  return (
    <BooksContext.Provider value={{books, setBooks}}>
      <Outlet/>
    </BooksContext.Provider>
  )
}
