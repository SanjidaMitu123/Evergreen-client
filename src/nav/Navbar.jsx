import { NavLink } from "react-router-dom";

// import { useContext, useEffect } from "react";
// import { AuthContext } from "../../firebase/AuthProvider";
// import Aos from "aos";
import 'aos/dist/aos.css';
import Logo from "./Logo";

const Navbar = () => {




//    const {user, logout}= useContext(AuthContext);

//    useEffect(()=>{
//             Aos.init({duration:1000})
//    },[])

//    const singOUT = () =>{
//       logout()
//         .then()
//         .catch()
//    }
    return (
        <div >
        <nav  className="lg:flex sm:grid sm:grid-cols-3 lg:ml-[240px] text-center items-center relative ">
            <Logo></Logo>
            <ul className=" lg:flex  sm:grid sm:grid-cols-3 lg:ml-12 text-right sm:gap-2 lg:gap-6 mr-6 lg:font-extrabold sm:font-bold lg:text-2xl text-black ">
                <li>
                  
                  

                    <NavLink
                     to="/"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                      }
                     >
                      Home
                   </NavLink>
                   </li>
                   <li>
                   <NavLink
                     to="/AddProduct"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                      }
                     >
                     Add Product
                   </NavLink>
                </li>
                <li>
                   <NavLink
                     to="/MyCart"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                      }
                     >
                      My Cart
                   </NavLink>
                </li>
             
                <li>
                   <NavLink
                     to="/brands"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                      }
                     >
                      Brands
                   </NavLink>
                </li>
                <li>
                   <NavLink
                     to="/blogs"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                      }
                     >
                     Reviews
                   </NavLink>
                </li>
                <li>
                   <NavLink
                     to="/contacts"
                     className={({ isActive, isPending }) =>
                     isPending ? "pending" : isActive ? "text-gray-400 underline" : ""
                      }
                     >
                      Contact
                   </NavLink>
                </li>

                {/* {
                  user ?
                   <div>
                   
                  <button onClick={singOUT} className=" btn btn-secondary">Sing out</button>
                  <span className="text-black"> {user.email} </span>
                  </div>
               

                  
                  :<li>
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#ff44b7] underline" : ""
                     }
                    >
                     My Account
                  </NavLink>
               </li>
                

                } */}
              
            </ul>
        </nav>
    </div>
    );
};

export default Navbar;