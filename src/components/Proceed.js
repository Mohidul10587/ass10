import React from 'react'
import { Link } from 'react-router-dom'

export default function ProceedCheckout() {
  return (
    <div className=' flex justify-center items-center border border-black rounded-lg pb-4 h-[580px] '>

   <div>
   <h1 className='font-bold text-4xl'>If you want to go the proceed checkout page you have to log in first</h1>
 
    <div className='flex justify-center  '>

       <div className='w-56 mt-10  text-white bg-green-700 rounded-lg hover:bg-green-600 py-5 font-bold'>
       <Link to='/ProceedCheckout'>Proceed Chececkout</Link>
       </div>
    </div>
   </div>


</div>
  )
}



