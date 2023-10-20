/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";



const Carcart = ({car}) => {
    const {_id,name,shortdes,price,brandname,img,type} = car;

    

    // const handleDelete=(id)=>{
    //     const carslist = [] ;
    //     const carlist = JSON.parse(localStorage.getItem('list'))
    //     const filtered = 
    // }
 
    return (
        <div>
            <div key={_id}   className="relative m-11 h-[350px] flex  w-69 flex-col rounded-xl mt-5 bg-clip-border text-gray-700 shadow-md">
      
      <div  className="relative mb-5  h-36 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img
          src={img}
          className="h-full w-full object-cover "
        />
      </div>
    
      <div className="p-2">
        <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
          <p className="block font-sans text-center text-2xl font-medium leading-relaxed text-cyan-500 antialiased">
          {name}
          </p>
          <p className="block font-sans text-center text-xl font-medium leading-relaxed text-lime-500 antialiased">
          {brandname}
          </p>
    
        </div>
      </div>
      <div className="p-2">
        <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
          <p className="block font-sans text-sm text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
          {shortdes}
          </p>
    
        </div>
      </div>
      <div className="p-2">
        <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
          <p className="block font-sans text-sm text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
          Car Type: {type}
          </p>
    
        </div>
      </div>
      <div className="p-2">
        <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
          <p className="block text-xl font-sans text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            Cost ${price}
          </p>
    
        </div>
      </div>
     
      <div className=" flex gap-3 p-2 pt-2">
      <Link to={`/cars/${_id}`}>
        <button
          className="block text-xl w-[400px] border-solid border-2 border-lime-500 text-black  select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          See Details
        </button>
        </Link>
        <button 
        // onClick={()=>handleDelete(_id)}
          className="block text-xl border-solid border-2 border-lime-500 text-black code w-[50%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          delete
        </button>
      </div>
    
    </div> 
            
        </div>
    );
};

export default Carcart;