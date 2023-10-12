import { useState, useEffect } from 'react'


function CartItem(props) {

  function removeItem(itemID) {
    let loggedIn = sessionStorage.getItem('loggedIn')
    if (loggedIn === 'false') {
      let newCart = props.finalCart.filter((cart) => cart.id !== itemID)
      props.setFinalCart(newCart)
    }
  }

  function deleteLogItem(id) {
    let loggedIn = sessionStorage.getItem('loggedIn')
    let currentUserID = sessionStorage.getItem('currentUser')
    if (loggedIn === 'true') {
      const removedItem = {
        userID: currentUserID,
        id: id
      }
      props.deleteLoggedItem(removedItem)
    }
  }

  let cartList = props.finalCart.map((cart) => {
    return (
      <section id={cart.id} key={props.finalCart.indexOf(cart) + Date.now()} className='cart-item-container'>
        <button className='delete-item-button' onClick={() => {
          deleteLogItem(cart.id)
          removeItem(cart.id)
        }}><img className='cart-delete' src={require('../images/close (3).png')} alt='purple x rounded' /></button>
        <img className='cart-image' src={cart.image} />
        <h3 className='cart-item-info'>{cart.name}</h3>
        <h3 className='cart-item-info'>{cart.quantity}</h3>
        <h3 className='cart-item-info'>{cart.price}</h3>
      </section>
    )
  })

  return (
    <section>
      {!props.finalCart.length && <h1 className='no-items'>No items added to cart yet -- add some now!</h1>}
      {cartList}
    </section>
  )
}

export default CartItem