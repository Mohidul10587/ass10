
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Blog from './components/Blog';
import { Routes, Route } from "react-router-dom";
import LogIn from './components/LogIn';
import Checkout from './components/ProceedCheckout';





function App() {
  
  return (
    <div className="App">
      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/LogIn' element={<LogIn></LogIn>}></Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
        <Route path='/Checkout' element={<Checkout></Checkout>}></Route>

      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
