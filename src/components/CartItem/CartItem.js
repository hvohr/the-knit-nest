
function CartItem(props) {
  console.log(props)
  let cartList = props.finalCart.map((cart) => {
    return (
      <section className='cart-item-container'>
        <img className='cart-delete' src={require('../images/close (1).png')} alt='purple x rounded' />
        <img className='cart-image' src={cart.image} />
        <h3 className='cart-item-info'>{cart.name}</h3>
        <h3 className='cart-item-info'>{cart.quantity}</h3>
        <h3 className='cart-item-info'>{cart.price}</h3>
      </section>
    )
  })

  return (
    <section>
      {!props.finalCart.length && <h1>No items added to cart yet -- add some now!</h1>}
      {cartList}
    </section>
  )
}

export default CartItem