import React from 'react';

const Banner = () => {
    return (
        <div className='lg:flex justify-between items-center mt-10 px-10 '>
           
            <div className='lg:w-1/2 '>
                <img className='w-full' src='dentist.webp' alt='' />
            </div>
            <div className=' lg:w-1/2 pl-10 '>
                <h1 className='text-5xl font-bold mt-36'>Suzuki  your first choice for smart life.</h1>
                <p className=' mt-3 italic text-2xl'>
                    Excellent all round bike, comfortable riding position, can easily do over an hour in the saddle without complaint. Brakes really strong and at its happiest on fast country roads.</p>
                    <p className=' mt-3 italic text-2xl'>
                    Only downside is it can require plenty of clutch control in slow traffic.</p>
            </div>
        </div>
    );
}

export default Banner;
