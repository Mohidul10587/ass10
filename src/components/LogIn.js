import React from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase.init';






export default function LogIn() {

  const [
    signInWithEmailAndPassword,
    user,
 
  ] = useSignInWithEmailAndPassword(auth);


const navigate = useNavigate()
if(user){
  navigate('/')
}
  const handleSubmitLogIn = (e) => {
    e.preventDefault()
    const email = e.target.email.value ;
    const password =e.target.password.value
    signInWithEmailAndPassword(email,password)
  }
  return (
    <div className=' h-[580px] '>
      <h1 className='text-center text-3xl font-bold my-4'>Log IN</h1>
     <div className='flex justify-center'>
     <form onSubmit={handleSubmitLogIn} >
        <input name='email' className='border border-black block pl-2 rounded-md w-96 h-10  mb-3' placeholder='Your Email..' type="email" />

        <input name='password' className='border border-black block  pl-2 rounded-md w-96 h-10 mb-3' placeholder='Give a strong password..' type="password" />
        <div className='flex justify-center'>  <button className='border border-black block rounded-lg px-4 py-2 mb-3' type='submit'>SignUp</button></div>

      </form>
     </div>

     <div className='flex justify-center'> <p className='mx-3'>New to site </p> <Link to='/SignUp' className='text-red-500'>Go to resister</Link></div>
    </div>
  )
}
