import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Service = () => {

    const [services , setServices] = useState([]);
    useEffect(() => {
        
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setServices(data))        
    }, []);
    return (
        <div className=''>
            <h1 className='text-center font-bold text-3xl my-5'>Services</h1>
            <div className='grid grid-cols-3 gap-6 px-10'>
            {services.map(service=><SingleService key={service.id}  service={service}></SingleService>)}
        </div>
 
        </div>
        
        );
}

export default Service;
