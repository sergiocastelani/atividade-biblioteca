import { createBrowserRouter, useParams } from "react-router-dom";

import {App} from './Components/App'
import { BookList } from './Components/BookList';
import { BookForm } from "./Components/BookForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <BookList/>
      },
      {
        path: "/:id",
        element: <BookForm/>
      },
    ]
  },
]);
