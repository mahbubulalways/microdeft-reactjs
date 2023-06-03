import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowProducts from '../ShowProduct/ShowProducts';
import EditProducts from '../EditProducts/EditProducts';

const Home = () => {
    const products =useLoaderData()
    console.log(products);
    return (
       <div className='flex gap-5'>
         <div className='w-4/5 grid grid-cols-2 gap-5 mt-20'>
           {
            products.map(product=><ShowProducts
           
                key={product.id}
                product={product}
                ></ShowProducts>)
           }
        </div>
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
       </div>
    );
};

export default Home;