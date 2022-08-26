import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({service}) => {

    const {serviceName , img , description} = service
    return (
        <div className='text-center relative border border-black rounded-lg pb-4 h-[550px] '>
            
            <img className='w-full' src={img} alt="" />
            <h1 className='text-xl font-bold'>{serviceName}</h1>
            <p className=''>{description}</p>

<div className='absolute bottom-0  w-full'>
    <Link to='/proceedcheckout'>

    <button className=' w-full py-4  border  z-20 border-black px-4 font-bold '>Buy a cervice</button>

    </Link>
</div>
            
        </div>
    );
}

export default SingleService;
