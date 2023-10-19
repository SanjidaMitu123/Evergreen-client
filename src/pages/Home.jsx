import Slider from "../nav/Slider";
import Brands from "./Brands";
import { useLoaderData } from "react-router-dom";
import Reviews from "./Reviews";
import Contract from "./Contract";
import { useEffect } from "react";
import Aos from "aos";


const Home = () => {
    
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])

    const brands = useLoaderData();
    return (
        <div>
            <h1 data-aos="zoom-out-down" className="text-5xl text-center text-lime-400 font-bold m-3">EverGreen AutoMobiles</h1>
            <Slider></Slider>
            <Brands brands={brands} ></Brands>
            <Reviews></Reviews>
            <Contract></Contract>
        </div>
    );
};

export default Home;