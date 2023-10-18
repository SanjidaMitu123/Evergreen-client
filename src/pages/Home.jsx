import Slider from "../nav/Slider";
import Brands from "./Brands";
import { useLoaderData } from "react-router-dom";


const Home = () => {

    const brands = useLoaderData();
    return (
        <div>
            <h1 className="text-5xl text-center text-lime-400 font-bold m-3">EverGreen AutoMobiles</h1>
            <Slider></Slider>
            <Brands brands={brands} ></Brands>
        </div>
    );
};

export default Home;