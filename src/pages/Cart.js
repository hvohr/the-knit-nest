import CartItem from '../components/CartItem/CartItem'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllProducts, getUsers } from '../components/apiCalls'

function Cart(props) {
  const [products, setProducts] = useState([])
  const [finalCart, setFinalCart] = useState([])
  const [users, setUsers] = useState([])
  const [log, setLog] = useState(false)

  function displayCart() {
    let loggedIn = sessionStorage.getItem('loggedIn')
    if (loggedIn === "false") {
      let currentFilter = products.filter((product) => props.cart.includes(product.id))
      setFinalCart(currentFilter)
      setLog(false)
    }
    else {
      displayProduct2()
      setLog(true)
    }
  }

  useEffect(() => {
    displayCart()
  }, [products, users])


  useEffect(() => {
    getUsers().then(
      data => {
        setUsers(data.users)
      })
  }, [])

  function displayProduct2() {
    let currentUserID = sessionStorage.getItem('currentUser')
    let currentFind = users.filter((user) => {
      return Number(user.userID) == Number(currentUserID)
    })
    let cartFilter = products.filter((product) => {
      return currentFind[0].cart.includes(product.id)
    })
    setFinalCart(cartFilter)
  }

  useEffect(() => {
    getAllProducts().then(
      data => {
        setProducts(data.products)
      })
  }, [])

  let totalPrice = () => {
    if (finalCart.length) {
      return finalCart.reduce((acc, cur) => {
        let noSymbol = cur.price.split('$')
        acc += Number(noSymbol[1])
        return acc
      }, 0)
    }
  }

  return (
    <section className='big-cart-container'>
      <h1 className='cart-title'>Shopping Cart</h1>
      {!log && <h1 className='cart-login-warning'>Login <Link className='login-link' to='/login'>here</Link> or <Link className='create-account-link' to='/createaccount'>create an account</Link> to save your cart!</h1>}
      <section className='small-cart-container'>
        <section className='cart-items-container'>
          <h1>Items</h1>
          <CartItem finalCart={finalCart} />
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