import CartItem from '../components/CartItem/CartItem'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllProducts, getUsers } from '../components/apiCalls'

function Cart(props) {
  const [allProducts, setAllProducts] = useState([])
  const [finalCart, setFinalCart] = useState([])
  const [cart, setCart] = useState([])
  const [log, setLog] = useState(false)
  const [allUsers, setAllUsers] = useState([])

  let loggedIn = sessionStorage.getItem('loggedIn')

  useEffect(() => {
    let currentUserID = sessionStorage.getItem('currentUser')
    let loggedIn = sessionStorage.getItem('loggedIn')
    if (loggedIn) {
      let currentFind = allUsers.filter((user) => {
        return Number(user.userID) === Number(currentUserID)
      })
      setFinalCart(currentFind.cart)
    }
  }, [])

  useEffect(() => {
    let loggedIn = sessionStorage.getItem('loggedIn')
    if (loggedIn === true) {
      let newCart = sessionStorage.getItem('cart')
      let final = JSON.parse(newCart)
      let newCart1 = final.filter(char => !isNaN(parseInt(char)))
      setFinalCart([...finalCart, newCart1])
    } else {
      setFinalCart([props.postedCart])
    }
  }, [props.cart])

  useEffect(() => {
    let loggedIn = sessionStorage.getItem('loggedIn')
    if (loggedIn === true) {
      setLog(true)
      let newCart = sessionStorage.getItem('cart')
      let final = JSON.parse(newCart)
      let newCart1 = final.filter(char => !isNaN(parseInt(char)))
      setFinalCart(newCart1)
    } else {
      setFinalCart(props.postedCart)
      setLog(false)
    }
  }, [])

  useEffect(() => {
    getUsers().then(
      data => {
        setAllUsers(data.users)
      })
  }, [])

  useEffect(() => {
    console.log(finalCart)
  })


  useEffect(() => {
    getAllProducts().then(
      data => {
        setAllProducts(data.products)
      }
    )
  }, [])

  let totalPrice = () => {
    if (finalCart) {
      return props.postedCart.reduce((acc, cur) => {
        let noSymbol = cur.price.split('$')
        acc += Number(noSymbol[1])
        return acc
      }, 0)
    }
  }

  return (
    <section className='big-cart-container'>
      <h1 className='cart-title'>Shopping Cart</h1>
      {log === false && <h1 className='cart-login-warning'>Login <Link className='login-link' to='/login'>here</Link> or <Link className='create-account-link' to='/createaccount'>create an account</Link> to save your cart!</h1>}
      <section className='small-cart-container'>
        <section className='cart-items-container'>
          <h1>Items</h1>
          <CartItem postedCart={finalCart} />
        </section>
        <section className='checkout-container'>
          <h1>Checkout</h1>
          <h2>${totalPrice()}</h2>
        </section>
      </section>
    </section>
  )
}

export default Cart