import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Cardetails = () => {

    const [cardetails,setcardetails] = useState ({});
    const {_id} = useParams();
    
    const cars = useLoaderData();

    useEffect(()=>{
        const finddetails = cars?.find((car1)=> car1._id == _id)


        setcardetails(finddetails);


},[_id,cars])

const { name,shortdes,price,brandname,img,type} = cardetails || {}

const addtocart = () =>{

    const carslist = [] ;

    const carlist = JSON.parse(localStorage.getItem('list'))

    if (!carlist){
         
        carslist.push(cardetails)
        localStorage.setItem('list',JSON.stringify(carslist))
        swal('Sucecssfully add to cart');
        
    }
    else{


        const similer = carlist.find(cardetails => cardetails._id == _id )
         if(!similer){

       
        carslist.push(...carlist,cardetails)
        localStorage.setItem('list',JSON.stringify(carslist))
        swal ('Sucecssfully add to cart');
        }
    else{
        swal ('Sorry,this car already added in your cart')
        }
    }

   }


    return (
        <div>
            <h1 className="text-4xl text-center font-medium">Car Details</h1>
            <div  key={_id}  className="relative flex w-69 flex-col rounded-xl mt-5 bg-clip-border text-gray-700 shadow-md">
    
    <div  className="relative  h-[400px] overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
      <img
        src={img}
        className="h-full w-full object-cover relative"
      />
    </div>
   
    <div className="p-2 mb-2">
      <div className=" mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
        <p className="block ml-60 mt-2 text-5xl text-black font-sans ml-[-15px] font-medium leading-relaxed text-blue-gray-900 antialiased">
        {name}
        </p>
      
  
      </div>
    </div>
    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
      <p className="block text-[#0B0B0BB2] font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        Brand Name : {brandname}
        </p>
       
  
      </div>
      
      
    </div>

    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
      
        <p className="block text-[#0B0B0BB2] font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        Car Type : {type}
        </p>
       
  
      </div>
      
      
    </div>

    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
     
        <p className="block text-[#0B0B0BB2] font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
        {shortdes}
        </p>
  
      </div>
      
      
    </div>


    <div className="p-2">
      <div className="mb-2 mt-[-20px] mr-[40px] ml-10 flex items-center justify-between">
        <p className="block text-black font-bold font-sans text-3xl leading-relaxed text-blue-gray-900 antialiased">
        price ${price}
        </p>
  
      </div>
    </div>
    
    <div className="p-2 pt-2  h-14  ">
      <button 
      onClick={addtocart}
          className="block absolute ml-0 bg-lime-400 h-[40px] mb-2 text-white w-[30%] select-none rounded-lg bg-blue-gray-900/10 py-1 px-2 text-center font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
      Add to Card
      </button>
    </div>
  </div>
            
        </div>
    );
};

export default Cardetails;