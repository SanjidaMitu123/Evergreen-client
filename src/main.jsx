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
import AuthProvider from './firebase/Authprovider';
import PrivateRoute from './privaterouter/PrivateRoute';
import Car from './pages/Car';
import Cardetails from './pages/Cardetails';
import Mycart from './pages/Mycart';

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
          loader : () => fetch('http://localhost:5000/brands')
          
      },
      {
        path : "/AddProduct",
        element : <Addproduct ></Addproduct>,
        
    },
    {
      path : "/MyCart",
      element : <Mycart></Mycart>
  },
  {
    path : "/UpdateProduct",
    element : <Upadateproduct></Upadateproduct>,
    
}
,
  {
    path : "/addbrand",
    element : <PrivateRoute><Addbrands></Addbrands></PrivateRoute>,
    
},
{
  path : "/cars",
  element : <Car></Car>,
  loader : () => fetch('http://localhost:5000/products')
  
},
{
    path : "/login",
    element : <Login></Login>,
   
} ,
{
    path : "/register",
    element : <Register></Register>,
   
}  ,
{
  
  path : "/cars/:_id",
  element : <Cardetails></Cardetails>,
  loader : () => fetch('http://localhost:5000/products')
   
} 
    ]
   
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
