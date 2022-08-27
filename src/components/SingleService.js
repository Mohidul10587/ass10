import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {

    const { serviceName, img, description } = service
    return (
        <div className='text-center relative border border-black rounded-lg pb-4 h-[550px] '>

            <img className='w-full' src={img} alt="" />
            <h1 className='text-xl font-bold'>{serviceName}</h1>
            <p className=''>{description}</p>


            <Link className='md:mx-4 mx-2 font-bold' to='/Login'>lOG IN</Link>
       

        </div>
    );
}

export default SingleService;
