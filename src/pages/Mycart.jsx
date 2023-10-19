import { useEffect, useState } from "react";

import Carcart from "./Carcart";

const Mycart = () => {

    const [carlistview,setcarlistview] = useState ([])

    const [nodata,setnodata] = useState ("")
    const [showall,setshowall] =useState(false)

    const [totald,settotald] = useState (0)
    console.log(totald)

    useEffect(()=>{
        const carlist = JSON.parse(localStorage.getItem('list'))
        if(carlist){
            setcarlistview(carlist)

            const total = carlist.reduce((preValue,currentValue)=> preValue + currentValue.price,0)
            settotald(total)
        }
        else{
            
            setnodata('Please somthing add to cart')
        }
    },[])

    console.log(carlistview)

    
    

    


    return (
        <div>
            <h1  className="text-5xl font-bold text-center m-4">My Cart</h1>
            { nodata ? <p className="h-[80vh] flex justify-center items-center text-5xl">{nodata}</p> :
           
            <div>
                
                <div className="grid grid-cols-2 gap-16 ">
                    {
                        showall? carlistview.map((car) => (
                <Carcart key={car._id} car={car} ></Carcart>))
                :
                carlistview.slice(0,4).map((car) => (
                    <Carcart key={car._id} car={car} ></Carcart>))

                    }
               
                </div>
              
              
              { carlistview.length > 3 &&
                <button onClick={()=>setshowall(!showall)} className="px-5 p-2 mt-4 bg-[#009444] text-white block mx-auto rounded-md"> 
                { showall ? "Show Less": "Show All"} 
                </button>
              }

            </div>
           
           
           
           }

        </div>
    );
};

export default Mycart;