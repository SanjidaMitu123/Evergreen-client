import { useContext } from "react";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { AuthContext } from "../firebase/Authprovider";


const Register = () => {

    const { createUser } = useContext(AuthContext);


    const register = e => {
        e.preventDefault();
        console.log(e.currentTarget)
         const form = new FormData(e.currentTarget);
         const name = form.get('name');
         const phone = form.get('phone');
         const email = form.get('email');
         const password = form.get('password');
         console.log(name,phone,email, password)
          
         createUser(email,password)
         .then(result =>{
          console.log(result.user)
          swal ("Registration Done.Please Login")
         })
         .catch(error =>{
          console.error(error)
          swal ("please give 6 disit password and unique name which desn't register before")
         })

    }

    return (
        <div>
            <h1 className="text-4xl text-center" >Register</h1>
            <form onSubmit={register} className="md:w-3/4 lg:w-1/2 mx-auto" >
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="number" name="phone" placeholder="phone" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-success">Register</button>
        </div>
      </form>
      <p className="text-center mt-5">Existing Account <Link to='/login' className="font-bold text-lime-500 mt-5"> Login</Link></p>
        </div>
    );
};

export default Register;