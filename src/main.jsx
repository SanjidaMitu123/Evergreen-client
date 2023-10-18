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
import Addproduct from './pages/Addproduct';
import Upadateproduct from './pages/Upadateproduct';
import Addbrands from './pages/Addbrands';
// import AuthProvider from './providers/AuthProvider';
import Login from './login&reg/Login';
import Register from './login&reg/Register';

const router = createBrowserRouter([
  {
    path : '/',
    element : <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
          path : '/',
          element: <Home></Home>,
          loader : () => fetch('http://localhost:5000/brands')
      },
      {
          path : "/brands",
          element : <Brands ></Brands>,
          
      },
      {
        path : "/AddProduct",
        element : <Addproduct ></Addproduct>,
        
    },
    {
      path : "/MyCart",
      element : <Addproduct ></Addproduct>,
      
  },
  {
    path : "/UpdateProduct",
    element : <Upadateproduct></Upadateproduct>,
    
}
,
  {
    path : "/addbrand",
    element : <Addbrands></Addbrands>,
    
},
{
    path : "/login",
    element : <Login></Login>,
   
} ,
{
    path : "/register",
    element : <Register></Register>,
   
} 
    ]
   
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
