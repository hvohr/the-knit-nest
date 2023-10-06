
function CartItem(props) {
  let cartList = props.cart.map((cart) => {
    return (
      <section>
        <img className='cart-delete' src={require('../images/close (1).png')} alt='purple x rounded' />
        <img className='cart-image' src={cart.image} />
        <h3>{cart.name}</h3>
        <h3>{cart.quantity}</h3>
        <h3>{cart.price}</h3>
      </section>
    )
  })
  return (
    <section>
      {props.cart.length === 0 && <h1>No items added to cart yet -- add some now!</h1>}
      {props.cart.length !== 0 && cartList}
    </section>
  )
}

export default CartItem