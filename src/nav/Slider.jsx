import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Slider = () => {

  useEffect(()=>{
    Aos.init({duration:1000})
},[])

    return (
        <div className="h-[500px]">
            <div data-aos="fade-right" className="carousel w-full h-[500px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/480652712/photo/dealer-new-cars-stock.jpg?s=1024x1024&w=is&k=20&c=BvpjxrSKrQXtcNKBzOIMI5BED1gARl9Z4uVv35R42G0=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src="https://media.istockphoto.com/id/1155392792/photo/young-woman-driving-car-on-a-sunny-day.jpg?s=1024x1024&w=is&k=20&c=gJheCD7_gOs9Djf2egggPqSI6nRAZ8G5ho0j3z9MF3c=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1303145841/photo/attractive-male-driver-using-the-gps-navigation-map-on-the-car.jpg?s=1024x1024&w=is&k=20&c=3sLousyxvRfK2ZPYO1nwpo7iPtkL_XPy3X1pjEW63bk=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1417064302/photo/young-and-cheerful-woman-enjoying-new-car-hugging-steering-wheel-sitting-inside-woman-driving.jpg?s=1024x1024&w=is&k=20&c=Ool6ELJnxcichEBu7n0dONeDTZo9DJDxaTtbrY-lWVs=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Slider;