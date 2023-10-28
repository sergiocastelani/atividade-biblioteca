import { useState } from 'react'
import { Book, initialBooks } from '../../Model/Book';
import './styles.css'
import { BookList } from '../BookList';

export function App() {
  const [bookList, setBookList] = useState(initialBooks);

  return (
    <>
      <BookList books={bookList}/>
    </>
  )
}
