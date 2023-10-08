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
import { postUser, getUsers } from '../apiCalls'
import { useEffect } from 'react'

function App() {
  const [cart, setCart] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState('')
  const [allUsers, setAllUsers] = useState([])

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
    setUsers(allUsers)
  }, [allUsers])

  useEffect(() => {
    getUsers().then(
      data => {
        setAllUsers(data.users)
      })
  }, [loggedIn])

  useEffect(() => {
    findCurrentUser()
  }, [users])

  function findCurrentUser() {
    let currentUserID = sessionStorage.getItem('currentUser')
    if (currentUserID !== '') {
      let currentFind = allUsers.filter((user) => {
        return Number(user.userID) === Number(currentUserID)
      })
      setCurrentUser(currentFind)
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
        <Route path='/cart' element={<Cart currentUser={currentUser} loggedIn={loggedIn} cart={cart} />} />
        <Route path='/login' element={<Login allUsers={allUsers} />} />
        <Route path='/createaccount' element={<CreateAccount allUsers={allUsers} submitUser={submitUser} />} />
        <Route path='/account' element={<AccountInfo setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
        <Route path='/:category/:id' element={<InduvidualProduct cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
}

export default App;
