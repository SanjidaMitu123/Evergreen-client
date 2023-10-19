/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Brandcart from "./Brandcart";


const Brands = ({brands}) => {

    const brand1 = useLoaderData();
    return (
        <div>
            <h1 className="text-5xl font-bold text-center m-4"> Car Brands</h1>
            <div  className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 mb-5">
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