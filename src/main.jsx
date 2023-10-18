import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import Brands from './pages/Brands';
import ErrorPage from './pages/ErrorPage';
import Root from './layout/Root';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
          path : '/',
          element: <Home></Home>,
          
      },
      {
          path : "/brands",
          element : <Brands ></Brands>,
          
      }
    ]
   
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
