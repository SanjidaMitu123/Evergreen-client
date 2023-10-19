

import { Link, useLocation, useNavigate } from "react-router-dom";



import { AuthContext } from "../firebase/Authprovider";
import { useContext } from "react";
import swal from "sweetalert";





const Login = () => {

  const {signIn, googleSingIn} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const googlelogin = () =>{
    googleSingIn().then(result =>{
      console.log(result.user)
    })
  }
  
  console.log(location)
  
    const Login = e => {
        e.preventDefault();
        console.log(e.currentTarget)
         const form = new FormData(e.currentTarget);
         const email = form.get('email');
         const password = form.get('password');
         console.log(email, password)

         signIn(email, password)
         .then(result =>{
          console.log(result)
          swal ('login successfully');
          navigate(location?.state ? location.state : '/');
          
         })
         .catch (error => {
          console.error(error)
          swal ("user name or password incorrect")
         })
         
    }
    
    return (
        <div>
         <h1 className="text-4xl text-center">Login</h1>
      <form onSubmit={Login} className="md:w-3/4 lg:w-1/2 mx-auto" >
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success">Login</button>
        </div>
      </form>

      <button onClick={googlelogin} className="lg:ml-[520px] mt-4 w-[300px] btn btn-primary">Login with Google</button>

      <p className="text-center mt-5 mb-5">For new Account <Link to='/register' className="font-bold text-lime-500 mt-5"> Resgister</Link> Now</p>
            
        
        </div>
    );
};

export default Login;