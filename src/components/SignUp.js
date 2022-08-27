import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { auth } from '../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';



export default function SignUp() {

  const [
    createUserWithEmailAndPassword,
    user

  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value
    if(password.length < 6){
      alert('Please give at least 6 characters in the password field')
      return ;
    }
    createUserWithEmailAndPassword(email, password)
  }


  const navigate = useNavigate()
  if (user) {
    navigate('/')
  }

  return (
    <div>
      <h1 className='text-center text-3xl font-bold my-4'>Sign Up</h1>
      <div className='flex justify-center'>

        <form onSubmit={handleSubmit} >
          <input className='border border-black block  pl-2 rounded-md w-96 h-10 mb-3' placeholder='Your Name..' type="text" />
          <input name='email' className='border border-black block pl-2 rounded-md w-96 h-10  mb-3' placeholder='Your Email..' type="email" />

          <input name='password' className='border border-black block  pl-2 rounded-md w-96 h-10 mb-3' placeholder='Give a strong password..' type="password" />
          <div className='flex justify-center'>  <button className='border border-black block rounded-lg px-4 py-2 mb-3' type='submit'>SignUp</button></div>

        </form>


      </div>
      <div className='flex justify-center'> <p className='mx-3'>Have a account ? </p> <Link to='/login' className='text-red-500'>Go to Log In</Link></div>
    </div>

  )
}
