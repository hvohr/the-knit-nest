import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from '../../pages/Home'
import Books from '../../pages/Books'
import Yarn from '../../pages/Yarn'
import CraftTools from '../../pages/CraftTools'
import InduvidualItem from '../../pages/InduvidualBook'
import Login from '../../pages/Login'
import InduvidualBook from '../../pages/InduvidualBook'
import InduvidualYarn from '../../pages/InduvidualYarn'
import InduvidualTool from '../../pages/InduvidualTool'
import Cart from '../../pages/Cart'
import NavBar from '../NavBar/NavBar'
import { useState, useEffect } from 'react'
import { getAllBooks, getAllCraftTools, getAllYarn } from '../apiCalls'

function App() {
  const [books, setBooks] = useState([])
  const [tools, setTools] = useState([])
  const [yarn, setYarn] = useState([])


  useEffect(() => {
    getAllBooks().then(
      data => {
        setBooks(data.books)
        sessionStorage.setItem('singlebook', JSON.stringify(data.books))
      }
    )
  }, [])

  useEffect(() => {
    getAllCraftTools().then(
      data => {
        setTools(data.tools)
        sessionStorage.setItem('singletool', JSON.stringify(data.tools))
      }
    )
  }, [])

  useEffect(() => {
    getAllYarn().then(
      data => {
        setYarn(data.yarn)
        sessionStorage.setItem('singleyarn', JSON.stringify(data.yarn))
      }
    )
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/yarn' element={<Yarn yarn={yarn}/>} />
        <Route path='/crafttools' element={<CraftTools tools={tools}/>} />
        <Route path='/books' element={<Books books={books}/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/books/:id' element={<InduvidualBook />} />
        <Route path='/yarn/:id' element={<InduvidualYarn />} />
        <Route path='/crafttools/:id' element={<InduvidualTool />} />
      </Routes>
    </div>
  );
}

export default App;
