import CartItem from '../components/CartItem/CartItem'


function Cart(props) {
  let totalPrice = props.cart.reduce((acc, cur) => {
    let noSymbol = cur.price.split('$')
    acc += Number(noSymbol[1])
    return acc
  }, 0)

  return (
    <section>
      <h1>Shopping Cart</h1>
      <section>
        <h1>Items</h1>
        <CartItem cart={props.cart} />
      </section>
      <section>
        <h1>Checkout</h1>
        <h2>${totalPrice}</h2>
      </section>
    </section>
  )
}

export default Cart