import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { PencilSquareIcon,TrashIcon } from '@heroicons/react/24/solid'
const Home = () => {
    const allProduct =useLoaderData()
    const [products,setProducts]=useState(allProduct)
    console.log(products);
    const [edit,setEdit]=useState({})

    const handleDelete=(id)=>{
        const deleteItem=products.filter(product=>product.id !== id)
        setProducts(deleteItem)
    }
const handleEdit=(id)=>{
    const editItem=products.find(product=>product.id === id)
    setEdit(editItem)
        console.log(editItem);
}
    return (
       <div className='flex gap-5'>
         <div className='w-4/5 grid grid-cols-2 gap-5 mt-20'>
           {
            products.map(product=><div key={product.id}>
                <div className="card w-full h-full card-side bg-base-100 shadow-xl">
      <figure><img className='w-40' src={product.image} alt="Movie"/></figure>
      <div className="card-body">
        <div className='flex gap-4 items-center'>
        <button onClick={()=>handleEdit(product.id)}> <PencilSquareIcon className="h-6 w-6 text-blue-500" /></button>
        <button onClick={()=>handleDelete(product.id)}> <TrashIcon className="h-6 w-6 text-red-500" /></button>
        </div>
        <h2 className="card-title text-start">{product.title}</h2>
        <p className='text-xl text-start font-semibold text-blue-600'>BDT{product.price}</p>
        <p className='text-start'>{product.category}</p>
        
      </div>
    </div>
            </div>)
           }
        </div>
        <div className='mt-20'>
            <h1 className=''>Add New Product</h1>
           <form action="">
            <p className='text-start'>Product Name</p>
           <input type="text" placeholder="Type here" className="input input-bordered w-full " defaultValue={edit.title} />
            <p className='text-start'>Description</p>
           <input type="text" placeholder="Type here" className="input input-bordered w-full " defaultValue={edit.description} />
            <p className='text-start'>Category</p>
           <input type="text" placeholder="Type here" className="input input-bordered w-full " defaultValue={edit.category} />
            <p className='text-start'>Image Url</p>
           <input type="text" placeholder="Type here" className="input input-bordered w-full " defaultValue={edit.image} />
           <p className='text-start'>Price</p>
           <input type="text" placeholder="Type here" className="input input-bordered w-full " defaultValue={edit.price} />
           <button className='bg-blue-600 text-white px-5 py-2 rounded mt-5'>Add</button>
           </form>
        </div>
       </div>
    );
};

export default Home;