/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Brandcart = ({brand}) => {

    const {brandname,img} = brand ;
    return (
     
        <div>
           <Link to='/cars'>
             <div className="card w-96 h-[300px] bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className=" text-2xl font-bold text-center">{brandname}</h2>
  </div>
  <figure><img src={img} alt="cars" /></figure>
</div>
</Link>    
        </div>
    );
};

export default Brandcart;