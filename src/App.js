
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Blog from './components/Blog';

import { Routes, Route } from "react-router-dom";
import { auth } from './firebase.init';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import LogIn from './components/LogIn';
import ProceedCheckout from './components/ProceedCheckout';

const provider = new GoogleAuthProvider()



function App() {
const [user , setUser] = useState()
  const handle =()=>{
    signInWithPopup(auth,provider)
    .then(result=>{
      const user = result.user ;
      console.log(user)
      setUser(user)
      
    })
    .catch(error=>console.log(error))
  }

  return (
    <div className="App">
      <Header></Header>

<button onClick={handle}>sing up</button>
<p>{user?.displayName}</p>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/LogIn' element={<LogIn></LogIn>}></Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
        <Route path='/proceedcheckout' element={<ProceedCheckout></ProceedCheckout>}></Route>

      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
