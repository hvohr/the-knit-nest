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
import { postUser, getUsers, postCart, getAllProducts } from '../apiCalls'
import { useEffect } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [postedCart, setPostedCart] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState('')
  const [allUsers, setAllUsers] = useState([])
  const [allProducts, setAllProducts] = useState([])

  const submitUser = (newUser) => {
    setCurrentUser(newUser)
    const newUserList = { userID: newUser.userID, name: newUser.name, email: newUser.email, password: newUser.password, cart: [] }
    sessionStorage.setItem('currentUser', newUserList.userID)
    postUser(newUser).then(data => {
      setUsers([...users, newUserList])
      setLoggedIn(true)
    })
  }

  useEffect(() => {
    getAllProducts().then(
      data => {
        setAllProducts(data.products)
      }
    )
  }, [])

  // useEffect(() => {
  //   displayLoginCart()
  // }, [currentUser])

  useEffect(() => {
    setUsers(allUsers)
  }, [])

  useEffect(() => {
    getUsers().then(
      data => {
        setAllUsers(data.users)
        sessionStorage.setItem('allUsers', JSON.stringify(data.users))
      })
  }, [users])



  useEffect(() => {
    let currentUserID = sessionStorage.getItem('currentUser')
    if (currentUserID) {
      let currentFind = allUsers.filter((user) => {
        return Number(user.userID) === Number(currentUserID)
      })
      setCurrentUser(currentFind)
      setLoggedIn(true)
    }
  }, [loggedIn])

  useEffect(() => {
    submitProduct()
  }, [loggedIn])

  useEffect(() => {
    filterCart()
  }, [cart])

  function submitProduct(item) {
    if (currentUser) {
      postCart(item).then(data => {
        setCart([...cart, data])
      })
    }
  }


  function filterCart() {
    let cartFilter = allProducts.filter((product) => {
      return cart.includes(product.id)
    })
    setPostedCart(cartFilter)
  }

  function displayLoginCart() {
    if (currentUser) {
      return allUsers.find((user) => {
        if (currentUser.userID === user.userID) {
          return setCart([...cart, user.cart])
        }
      })
    }
  }

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allproducts' element={<AllProducts />} />
        <Route path='/yarn' element={<Yarn />} />
        <Route path='/tools' element={<CraftTools />} />
        <Route path='/books' element={<Books />} />
        <Route path='/cart' element={<Cart currentUser={currentUser} loggedIn={loggedIn} postedCart={postedCart} />} />
        <Route path='/login' element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser} allUsers={allUsers} />} />
        <Route path='/createaccount' element={<CreateAccount setLoggedIn={setLoggedIn} allUsers={allUsers} submitUser={submitUser} />} />
        <Route path='/account' element={<AccountInfo setLoggedIn={setLoggedIn} allUsers={allUsers} />} />
        <Route path='/:category/:id' element={<InduvidualProduct currentUser={currentUser} loggedIn={loggedIn} cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
}

export default App;
