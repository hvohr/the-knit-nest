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
import Cart from '../../pages/Cart'
import CreateAccount from '../../pages/CreateAccount'
import NavBar from '../NavBar/NavBar'
import { postUser, getUsers, postCart, getAllProducts } from '../apiCalls'
import { useEffect, useState } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [postedCart, setPostedCart] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState('')
  const [allUsers, setAllUsers] = useState([])
  const [singleCheck, setSingleCheck] = useState('')
  const [allProducts, setAllProducts] = useState([])

  const submitUser = (newUser) => {
    setCurrentUser(newUser)
    const newUserList = { userID: newUser.userID, name: newUser.name, email: newUser.email, password: newUser.password, cart: [] }
    sessionStorage.setItem('currentUser', newUserList.userID)
    postUser(newUser).then(data => {
      setUsers([...users, newUserList])
    })
  }

  function submitProduct(item) {
    let loggedIn = sessionStorage.getItem('loggedIn')
    if (loggedIn === "true") {
      postCart(item).then(data => {
        setCart([...cart, data])
      })
    }
  }

  useEffect(() => {
    getAllProducts().then(
      data => {
        setAllProducts(data.products)
        sessionStorage.setItem('allproducts', JSON.stringify(data.products))
      }
    )
  }, [])

  useEffect(() => {
    let currentUserID = sessionStorage.getItem('currentUser')
    if (currentUserID) {
      sessionStorage.setItem('loggedIn', "true")
    } else {
      sessionStorage.setItem('loggedIn', "false")
    }
  }, [])


  useEffect(() => {
    getUsers().then(
      data => {
        setAllUsers(data.users)
      })
  }, [users, singleCheck])


  useEffect(() => {
    let currentUserID = sessionStorage.getItem('currentUser')
    let loggedIn = sessionStorage.getItem('loggedIn')
    if (loggedIn === "true") {
      let currentFind = allUsers.filter((user) => {
        return Number(user.userID) === Number(currentUserID)
      })
      setCart([...cart, currentFind.cart])
      setCurrentUser(currentFind)
    } else {
      setCart(cart)
    }
  }, [singleCheck])


  useEffect(() => {
    submitProduct()
  }, [singleCheck])


return (
  <div className="App">
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/allproducts' element={<AllProducts />} />
      <Route path='/yarn' element={<Yarn />} />
      <Route path='/tools' element={<CraftTools />} />
      <Route path='/books' element={<Books />} />
      <Route path='/cart' element={<Cart cart={cart} postedCart={postedCart} singleCheck={singleCheck}/>} />
      <Route path='/login' element={<Login setCurrentUser={setCurrentUser} allUsers={allUsers} />} />
      <Route path='/createaccount' element={<CreateAccount allUsers={allUsers} submitUser={submitUser} />} />
      <Route path='/account' element={<AccountInfo allUsers={allUsers} />} />
      <Route path='/:category/:id' element={<InduvidualProduct setChange={setSingleCheck} currentUser={currentUser} cart={cart} submitProduct={submitProduct} setCart={setCart} />} />
    </Routes>
  </div>
);
}

export default App;
