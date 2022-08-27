import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {

    const { serviceName, img, description } = service
    return (
        <div className='text-center relative border border-black rounded-lg pb-4 h-[550px] '>

            <img className='w-full' src={img} alt="" />
            <h1 className='text-xl font-bold'>{serviceName}</h1>
            <p className=''>{description}</p>

            <div className='absolute bottom-0 w-full  font-bold'>

                <Link to='/Proceed'><p className=' bg-green-700 hover:bg-green-600 text-white rounded-b-lg py-5'>
                    By the service</p></Link>
            </div>


        </div>
    );
}

export default SingleService;
