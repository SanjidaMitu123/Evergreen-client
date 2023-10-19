import { useLoaderData } from "react-router-dom";
import Carcard from "./Carcard";
import Slider from "../nav/Slider";


const Car = () => {
    const cars = useLoaderData();
    return (
        <div>
            
            <Slider></Slider>
            <h1 className="text-4xl text-center font-medium">All Cars</h1>
            <div  className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 mb-5">
                {
                     // eslint-disable-next-line react/prop-types
                     cars?.map ((car)=> <Carcard key={car._id} car={car}></Carcard>)
                }
                
                
                
            </div>
        </div>
    );
};

export default Car;