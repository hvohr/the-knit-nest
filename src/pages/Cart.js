import CartItem from '../components/CartItem/CartItem'
import { Link } from 'react-router-dom'

function Cart(props) {
  console.log(props)
  let totalPrice = props.postedCart.reduce((acc, cur) => {
    let noSymbol = cur.price.split('$')
    acc += Number(noSymbol[1])
    return acc
  }, 0)

  return (
    <section className='big-cart-container'>
      <h1 className='cart-title'>Shopping Cart</h1>
      {!props.loggedIn && <h1 className='cart-login-warning'>Login <Link className='login-link' to='/login'>here</Link> or <Link className='create-account-link' to='/createaccount'>create an account</Link> to save your cart!</h1>}
      <section className='small-cart-container'>
        <section className='cart-items-container'>
          <h1>Items</h1>
          <CartItem cart={props.postedCart} />
        </section>
        <section className='checkout-container'>
          <h1>Checkout</h1>
          <h2>${totalPrice}</h2>
        </section>
      </section>
    </section>
  )
}

export default Cart