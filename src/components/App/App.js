import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from '../../pages/Home'
import AllProducts from '../../pages/AllProducts'
import Yarn from '../../pages/Yarn'
import CraftTools from '../../pages/CraftTools'
import Books from '../../pages/Books'
import InduvidualItem from '../../pages/InduvidualBook'
import Login from '../../pages/Login'
import InduvidualBook from '../../pages/InduvidualBook'
import InduvidualYarn from '../../pages/InduvidualYarn'
import InduvidualTool from '../../pages/InduvidualTool'
import Cart from '../../pages/Cart'
import NavBar from '../NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/yarn' element={<Yarn />} />
        <Route path='/crafttools' element={<CraftTools />} />
        <Route path='/books' element={<Books />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/allproducts/:id' element={<InduvidualBook />} />
        {/* <Route path='/books/:id' element={<InduvidualBook />} />
        <Route path='/yarn/:id' element={<InduvidualYarn />} />
        <Route path='/crafttools/:id' element={<InduvidualTool />} /> */}
      </Routes>
    </div>
  );
}

export default App;
