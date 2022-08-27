import React from 'react'
import { Link } from 'react-router-dom'

export default function ProceedCheckout() {
  return (
    <div className=' flex justify-center items-center border border-black rounded-lg pb-4 h-[580px] '>

      <div>
        <h1 className='font-bold text-4xl'>If you want to go the proceed checkout page you have to log in first</h1>

        <div className='flex justify-center  '>

          <div className='w-56 mt-10  text-white font-bold'>



            <Link to='/ProceedCheckout'>
              <p className=' bg-green-700 hover:bg-green-600 text-white rounded-lg py-3'>
                Proceed Chececkout</p>
            </Link>
          </div>
        </div>
      </div>


    </div>
  )
}



