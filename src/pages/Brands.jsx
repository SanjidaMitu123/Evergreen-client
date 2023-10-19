/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Brandcart from "./Brandcart";
import { useEffect } from "react";
import Aos from "aos";


const Brands = ({brands}) => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    const brand1 = useLoaderData();
    return (
        <div>
            <h1 data-aos="flip-down" className="text-5xl font-bold text-center m-4"> Car Brands</h1>
            <div  data-aos="zoom-in" className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 mb-5">
                {
                     // eslint-disable-next-line react/prop-types
                     brands?.map ((brand)=> <Brandcart key={brand._id} brand={brand}></Brandcart>)
                }
                 {
                     // eslint-disable-next-line react/prop-types
                     brand1?.map ((brand)=> <Brandcart key={brand._id} brand={brand}></Brandcart>)
                }
                
                
            </div>
           
        </div>
    );
};

export default Brands;