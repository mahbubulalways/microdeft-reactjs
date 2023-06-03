import React from 'react';
import { PencilSquareIcon,TrashIcon } from '@heroicons/react/24/solid'
const ShowProducts = ({product}) => {
    const {title,category,description,image,price,rating}=product
    return (
        <div>
            <div className="card w-full h-full card-side bg-base-100 shadow-xl">
  <figure><img className='w-40' src={image} alt="Movie"/></figure>
  <div className="card-body">
    <div className='flex gap-4 items-center'>
    <button> <PencilSquareIcon className="h-6 w-6 text-blue-500" /></button>
    <button> <TrashIcon className="h-6 w-6 text-red-500" /></button>
    </div>
    <h2 className="card-title text-start">{title}</h2>
    <p className='text-xl text-start font-semibold text-blue-600'>BDT{price}</p>
    <p className='text-start'>{category}</p>
    
  </div>
</div>
        </div>
    );
};

export default ShowProducts;