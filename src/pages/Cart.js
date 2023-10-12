import CartItem from '../components/CartItem/CartItem'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllProducts, getUsers } from '../components/apiCalls'

function Cart(props) {
  const [products, setProducts] = useState([])
  const [finalCart, setFinalCart] = useState([])
  const [users, setUsers] = useState([])
  const [log, setLog] = useState(false)
  const [promo, setPromo] = useState('')
  const [success, setSuccess] = useState('')
  const [valid, setValid] = useState(false)
  const [invalid, setInvalid] = useState(false)
  const [change, setChange] = useState(false)

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
    let promo = sessionStorage.getItem('success')
    if (promo === 'true') {
      setSuccess(true)
    } else {
      setSuccess(false)
    }
  }, [promo, change])

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

  function checkPromo(event) {
    event.preventDefault()
    if (promo === 'FALL23' || promo === 'fall23' || promo === 'Fall23') {
      setValid(true)
      setChange(false)
      sessionStorage.setItem('success', 'true')
      setInvalid(false)
      setPromo('')
    } else {
      setPromo('')
      setChange(true)
      setValid(false)
      setInvalid(true)
    }
  }

  let newPrice = () => {
    let discount = totalPrice() * 0.2
    return Number(totalPrice() - discount).toFixed(2)
  }


  let totalPrice = () => {
    if (finalCart.length) {
      return finalCart.reduce((acc, cur) => {
        let noSymbol = cur.price.split('$')
        acc += Number(noSymbol[1])
        return Number(acc.toFixed(2))
      }, 0)
    } else {
      return 0
    }
  }

  return (
    <section className='big-cart-container'>
      <h1 className='cart-title'>Shopping Cart</h1>
      {!log && <h1 className='cart-login-warning'>Login <Link className='login-link' to='/login'>here</Link> or <Link className='create-account-link' to='/createaccount'>create an account</Link> to save your cart!</h1>}
      <section className='small-cart-container'>
        <section className='cart-items-container'>
          <h1 className='checkout-title'>Items</h1>
          <CartItem finalCart={finalCart} setFinalCart={setFinalCart} />
        </section>
        <section className='checkout-container'>
          <section className='cost-container'>
            <h1 className='checkout-title'>Checkout</h1>
            {!success && <h2 className='checkout-title'>${totalPrice()}</h2>}
            {success && <h2 className='checkout-title'>${totalPrice()} - 20% = <span className='new-price'>${newPrice()}</span></h2>}
          </section>
          <section className='promo-container'>
            <span className='promo-input'>Promo Code:<input type='text' onChange={(event) => setPromo(event.target.value)} value={promo} className='promo' /></span><button className='promo-button' onClick={(event) => checkPromo(event)}>Submit</button>
          </section>
          <section>
            {invalid && <h1 className='empty-suggest'>Not a valid promo code</h1>}
            {success && <h1 className='success-promo'>Success! Fall23 has been applied to your cart!<button onClick={() => {
              sessionStorage.setItem('success', 'false')
              setChange(true)
            }} className='remove-promo'>Remove</button></h1>}
          </section>
        </section>
      </section>
      <img className='cart-cat' src={require('../components/images/cat.png')} />
    </section>
  )
}

export default Cart