import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowProducts from '../ShowProduct/ShowProducts';

const Home = () => {
    const products =useLoaderData()
    console.log(products);
    return (
        <div className='grid grid-cols-2 gap-5 mt-20'>
           {
            products.map(product=><ShowProducts
           
                key={product.id}
                product={product}
                ></ShowProducts>)
           }
        </div>
    );
};

export default Home;