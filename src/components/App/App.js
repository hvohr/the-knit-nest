import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from '../../pages/Home'
import Books from '../../pages/Books'
import Yarn from '../../pages/Yarn'
import CraftTools from '../../pages/CraftTools'
import InduvidualItem from '../../pages/InduvidualBook'
import Login from '../../pages/Login'
import InduvidualBook from '../../pages/InduvidualBook'
import Cart from '../../pages/Cart'
import NavBar from '../NavBar/NavBar'
import { useState, useEffect } from 'react'
import { getAllBooks } from '../apiCalls'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getAllBooks().then(
      data => {
        setBooks(data.books)
      }
    )
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/yarn' element={<Yarn />} />
        <Route path='/crafttools' element={<CraftTools />} />
        <Route path='/books' element={<Books books={books}/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/product/:id' element={<InduvidualBook books={books}/>} />
      </Routes>
    </div>
  );
}

export default App;
