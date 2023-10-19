import Aos from "aos";
import { useEffect } from "react";


const Contract = () => {

    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    
    return (
        <div>
            <h1 data-aos="flip-right" className="text-4xl text-center font-medium">Contact Us</h1>
            <img  data-aos="flip-up" className="h-[300px] w-full" src="https://www.shutterstock.com/image-photo/contact-us-panoramic-banner-background-260nw-1921198244.jpg"></img>
            </div>
    );
};

export default Contract;