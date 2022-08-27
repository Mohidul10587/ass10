import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='bg-gray-600  py-5 text-center'>

            <Link className='md:mx-4 mx-2 hover:text-orange-200 font-bold text-white' to='/'>HOME</Link>
            <Link className='md:mx-4 mx-2 hover:text-orange-200 font-bold text-white' to='/Blog'>BLOG</Link>
            <Link className='md:mx-4 mx-2 hover:text-orange-200 font-bold text-white' to='/Login'>lOG IN</Link>
            <Link className='md:mx-4 mx-2 hover:text-orange-200 font-bold text-white' to='/Checkout'>lOG IN</Link>

        
           
        </div>
    );
}

export default Header;
