import React, { useEffect, useState } from 'react';
import { PencilSquareIcon,TrashIcon } from '@heroicons/react/24/solid'
const ShowProducts = ({product}) => {
    const [allData,setAllData]=useState([])
    const [newData,setNewData]=useState(allData)
    useEffect(()=>{
     fetch('https://fakestoreapi.com/products')
     .then(res=>res.json())
     .then(data=>setAllData(data))
    },[])
    const {id,title,category,description,image,price,rating}=product
    const handleEdit=(id)=>{
       const newDataId=newData.filter(data=>data.id===id)
       setNewData(newDataId);
    }
   
    return (
        <div>
            <div className="card w-full h-full card-side bg-base-100 shadow-xl">
  <figure><img className='w-40' src={image} alt="Movie"/></figure>
  <div className="card-body">
    <div className='flex gap-4 items-center'>
    <button onClick={()=>handleEdit(id)}> <PencilSquareIcon className="h-6 w-6 text-blue-500" /></button>
    <button > <TrashIcon className="h-6 w-6 text-red-500" /></button>
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