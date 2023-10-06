import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from '../../pages/Home'
import AllProducts from '../../pages/AllProducts'
import Yarn from '../../pages/Yarn'
import CraftTools from '../../pages/Tools'
import Books from '../../pages/Books'
import AccountInfo from '../../pages/AccountInfo'
import InduvidualProduct from '../../pages/InduvidualProduct'
import Login from '../../pages/Login'
import { useState } from 'react'
import Cart from '../../pages/Cart'
import CreateAccount from '../../pages/CreateAccount'
import NavBar from '../NavBar/NavBar'

function App() {
const [cart, setCart] = useState([])
const [loggedIn, setLoggedIn] = useState(false)

// useEffect(() => {
//   setCart(cart)
// }, [cart])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/yarn' element={<Yarn />} />
        <Route path='/tools' element={<CraftTools />} />
        <Route path='/books' element={<Books />} />
        <Route path='/cart' element={<Cart loggedIn ={loggedIn} cart ={cart}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/createaccount' element={<CreateAccount />} />
        <Route path='/account' element={<AccountInfo />} />
        <Route path='/:category/:id' element={<InduvidualProduct cart={cart} setCart={setCart}/>} />
      </Routes>
    </div>
  );
}

export default App;
