

const Addproduct = () => {

       const addproduct = event =>{
          event.preventDefault(); 

          const form = event.target;
          const name = form.name.value;
          const img = form.img.value;
          const brandname = form.brandname.value;
          const type = form.type.value;
          const price = form.price.value;
          const shortdes = form.shortdes.value;
          const rating = form.rating.value;

          const newproduct = { name,img,brandname,type,price,shortdes,rating }
          console.log(newproduct)

          fetch('http://localhost:5000/products',{
            method : 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newproduct)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
          })


       }



    return (
        <div className="bg-lime-300 m-16 p-20">
            <h1 className="text-center text-3xl font-bold">Add Product details</h1>
            <form onSubmit={addproduct}>
                {/* row 1 */}
                <div className="flex">

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Name</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="name" placeholder="Name" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                  </label>
                </div>

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Image</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="img" placeholder="Image URL" className="input input-bordered mb-4 mt-0 m-4 w-full" />
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
                        <input type="text" name="brandname" placeholder="Brand Name" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                        </label>
                        </div>

                        <div className="form-control w-1/2">
                        <label className="label m-4 mb-0">
                        <span className="label-text text-xl font-bold">Type</span>
                        </label>
                        <label className="input-group">
                        <input type="text" name="type" placeholder="Type" className="input input-bordered mb-4 mt-0 m-4 w-full" />
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
                    <input type="text" name="price" placeholder="Price" className="input input-bordered mb-4 mt-0 m-4 w-full" />
                    </label>
                    </div>

                    <div className="form-control w-1/2">
                    <label className="label m-4 mb-0">
                    <span className="label-text text-xl font-bold">Short description</span>
                    </label>
                    <label className="input-group">
                    <input type="text" name="shortdes" placeholder="Short description" className="input input-bordered mb-4 mt-0 m-4 w-full" />
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

                      <input type="submit" value="Add Product" className="  btn btn-block " />


            </form>
        </div>
    );
};

export default Addproduct;