import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Upadateproduct = () => {

    const cars = useLoaderData();
    console.log(cars)
  
    const {_id,name,img,brandname,type,price,shortdes} = cars;
    

    const updateproduct = event =>{
        event.preventDefault(); 

        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const brandname = form.brandname.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortdes = form.shortdes.value;
        const rating = form.rating.value;

        const updatedproduct = { name,img,brandname,type,price,shortdes,rating }
        console.log(updatedproduct)

        fetch(`https://evergreen-automobile-server-qksqlolff-sanjida-mitus-projects.vercel.app/products/${_id}`,{
          method : 'PUT',
          headers:{
              'content-type': 'application/json'
          },
          body: JSON.stringify(updatedproduct)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.modifiedCount > 0 ){
            Swal.fire({
              title: 'success!',
              text: 'Product Updated successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
            })
          }
        })


     }
    return (
        <div>
           <div className="bg-lime-300 m-16 p-20">
            <h1 className="text-center text-3xl font-bold">Update Product details of {name}</h1>
            <form
             onSubmit={updateproduct}
             >
                {/* row 1 */}
                <div className="flex">

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Name</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                  </label>
                </div>

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Image</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="img" defaultValue={img} placeholder="Image URL" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                  </label>
                </div>

                </div>

                 {/* row 2 */}
                 <div className="flex">

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Brand Name</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="brandname" defaultValue={brandname} placeholder="Brand Name" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                        </label>
                        </div>

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Type</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="type" defaultValue={type} placeholder="Type" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                        </label>
                        </div>

                        </div>

                    {/* row 3 */}
                    <div className="flex">

                    <div className="form-control w-1/2">
                    <label className="label m-4 mb-0">
                    <span className="label-text text-xl font-bold">Price</span>
                    </label>
                    <label className="input-group">
                    <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                    </label>
                    </div>

                    <div className="form-control w-1/2">
                    <label className="label m-4 mb-0">
                    <span className="label-text text-xl font-bold">Short description</span>
                    </label>
                    <label className="input-group">
                    <input type="text" name="shortdes" defaultValue={shortdes} placeholder="Short description" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                    </label>
                    </div>

                    </div>

                  {/* row 4 */}
                    <div className="flex">

                    <div className="form-control w-1/2 ">
                    <div>
                    <label className="label m-4 mb-0">
                    <span className="label-text text-center text-xl font-bold">Rating</span>
                    </label>
                    </div >
                    <div className="rating text-2xl w-1/2 m-2 mb-10">
                    <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    </div>


                    </div>

                      <input type="submit" value="Update Product" className="  btn btn-block " />



            </form>
            
             
        </div>
        </div>
    );
};

export default Upadateproduct;