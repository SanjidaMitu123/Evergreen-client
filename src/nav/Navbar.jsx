import { NavLink } from "react-router-dom";
import 'aos/dist/aos.css';
import Logo from "./Logo";
import { useContext, useEffect } from "react";
import { AuthContext } from "../firebase/Authprovider";
import Aos from "aos";


const Navbar = () => {




   const {user, logout}= useContext(AuthContext);

   useEffect(()=>{
            Aos.init({duration:1000})
   },[])

   const singOUT = () =>{
      logout()
        .then()
        .catch()
   }
    return (
        <div >
        <nav data-aos="zoom-out-left" className="lg:flex sm:grid sm:grid-cols-3 lg:ml-[40px] text-center items-center relative ">
            <Logo></Logo>
            <ul className=" lg:flex  sm:grid sm:grid-cols-3 lg:ml-12 text-right sm:gap-2 lg:gap-6 mr-6 lg:font-extrabold sm:font-bold lg:text-2xl mt-4 text-black ">
                <li data-aos="zoom-out-left">
                  
                  

                    <NavLink
                     to="/"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                      }
                     >
                      Home
                   </NavLink>
                   </li >
                   <li data-aos="zoom-out-left">
                   <NavLink
                     to="/AddProduct"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                      }
                     >
                     Add Product
                   </NavLink>
                </li>
                <li data-aos="zoom-out-left">
                   <NavLink
                     to="/MyCart"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                      }
                     >
                      My Cart
                   </NavLink>
                </li>
             
                <li data-aos="zoom-out-left">
                   <NavLink
                     to="/brands"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                      }
                     >
                      Brands
                   </NavLink>
                </li>
                <li data-aos="zoom-out-left">
                   <NavLink
                     to="/reviews"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                      }
                     >
                     Reviews
                   </NavLink>
                </li>
                <li data-aos="zoom-out-left">
                   <NavLink
                     to="/contact"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                      }
                     >
                     Contact Us
                   </NavLink>
                </li>
                
                {
                  user ?
                  
                  <li>
                   <div>
                   
                  <button onClick={singOUT} className=" btn btn-success">Sing out</button>
                  <span className="text-black"> {user.email} </span>
                  </div>
                

                  </li>
                  

                  
                  :
                  <li>
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                     }
                    >
                     My Account
                  </NavLink>
               </li>
                

                }
              
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;