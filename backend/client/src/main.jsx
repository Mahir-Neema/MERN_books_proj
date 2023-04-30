import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.jsx'
import AddBook from './components/AddBook.jsx';
import ColorSchemesExample from './components/Navbar.jsx';
import ViewBook from './components/ViewBook.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ColorSchemesExample/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/addbook",
        element: <AddBook/>
      },
      {
        path:"/viewbook",
        element: <ViewBook/>
      },
      {
        path:"/",
        element: <App/>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
