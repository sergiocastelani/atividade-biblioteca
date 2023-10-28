import { createContext, useDebugValue } from "react";
import { IBook } from "../Model/Book";

export interface IBooksContext {
  books : IBook[];
  setBooks : (books : IBook[]) => void;
}

export const BooksContext = createContext<IBooksContext>({
  books: [],
  setBooks: (books : IBook[]) => {}
});