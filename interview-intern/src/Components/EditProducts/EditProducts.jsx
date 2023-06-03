import React from 'react';

const EditProducts = () => {
    return (
        <div className='mt-20'>
            <h1 className=''>Add New Product</h1>
           <form action="">
            <p className='text-start'>Product Name</p>
           <input type="text" placeholder="Type here" className="input input-bordered w-full " />
            <p className='text-start'>Description</p>
           <input type="text" placeholder="Type here" className="input input-bordered w-full " />
            <p className='text-start'>Category</p>
           <input type="text" placeholder="Type here" className="input input-bordered w-full " />
            <p className='text-start'>Image Url</p>
           <input type="text" placeholder="Type here" className="input input-bordered w-full " />
           <p className='text-start'>Price</p>
           <input type="text" placeholder="Type here" className="input input-bordered w-full " />
           </form>
        </div>
    );
};

export default EditProducts;