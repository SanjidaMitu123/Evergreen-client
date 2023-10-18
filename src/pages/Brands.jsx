/* eslint-disable react/prop-types */
import Brandcart from "./Brandcart";


const Brands = ({brands}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center m-4"> Car Brands</h1>
            <div  className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-4 mb-5">
                {
                     // eslint-disable-next-line react/prop-types
                     brands?.map ((brand)=> <Brandcart key={brand._id} brand={brand}></Brandcart>)
                }
                
                
            </div>
           
        </div>
    );
};

export default Brands;