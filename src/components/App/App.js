import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from '../../pages/Home'
import AllProducts from '../../pages/AllProducts'
import Yarn from '../../pages/Yarn'
import CraftTools from '../../pages/Tools'
import Books from '../../pages/Books'
import InduvidualProduct from '../../pages/InduvidualProduct'
import Login from '../../pages/Login'
import { useEffect } from 'react'
import { getAllProducts } from '../apiCalls'
import Cart from '../../pages/Cart'
import NavBar from '../NavBar/NavBar'

function App() {

  useEffect(() => {
    getAllProducts().then(
      data => {
        localStorage.setItem('allproducts', JSON.stringify(data.products))
      }
    )
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/yarn' element={<Yarn />} />
        <Route path='/tools' element={<CraftTools />} />
        <Route path='/books' element={<Books />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:category/:id' element={<InduvidualProduct />} />
      </Routes>
    </div>
  );
}

export default App;
