import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <h1 className='text-2xl font-semibold'>Shopping Center</h1>
            <div className='flex gap-5'>
                <Link>Products</Link>
                <Link>Wishlist</Link>
                <Link>My Collection</Link>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
    );
};

export default Navbar;