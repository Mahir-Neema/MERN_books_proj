import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage.jsx'
import AddBook from './components/AddBook.jsx';
import ColorSchemesExample from './components/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ColorSchemesExample/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/viewbook",
        element: <AddBook/>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
