import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from '../../pages/Home'
import Books from '../../pages/Books'
import Yarn from '../../pages/Yarn'
import CraftTools from '../../pages/CraftTools'
import InduvidualItem from '../../pages/InduvidualItem'
import Login from '../../pages/Login'
import Cart from '../../pages/Cart'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={ <Home/>} /> 
      <Route path='/yarn' element={<Yarn/>} />
      <Route path='/crafttools' element={<CraftTools/>} />
      <Route path='/books' element={<Books/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/product/:id' element={<InduvidualItem />} />
      </Routes>
    </div>
  );
}

export default App;
