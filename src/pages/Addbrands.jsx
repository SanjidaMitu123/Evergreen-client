

const Addbrands = () => {
   
    const addbrands = event =>{
        event.preventDefault(); 

        const form = event.target;
        const brandname = form.brandname.value;
        const img = form.img.value;

        const newbrand = { img,brandname}
        fetch('http://localhost:5000/brands',{
            method : 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newbrand )
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
          })


       }


    return (
        <div>
        <div className="bg-lime-300 m-16 p-20">
            <h1 className="text-center text-3xl font-bold">Add Product details</h1>
            <form onSubmit={addbrands}>
                {/* row 1 */}
                <div className="flex">

                <div className="form-control w-1/2">
                  <label className="label m-4 mb-0">
                  <span className="label-text text-xl font-bold">Brand Name</span>
                  </label>
                  <label className="input-group">
                  <input type="text" name="brandname" placeholder="Name" className="input input-bordered mb-4 mt-0 m-4 w-full" />
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
                <input type="submit" value="Add Product" className="  btn btn-block " />


            </form>
        </div>

            
        </div>
    );
};

export default Addbrands;