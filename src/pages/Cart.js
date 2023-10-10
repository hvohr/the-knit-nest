import CartItem from '../components/CartItem/CartItem'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getAllProducts, getUsers } from '../components/apiCalls'

function Cart(props) {
  const [products, setProducts] = useState([])
  const [finalCart, setFinalCart] = useState([])

  function displayCart() {
    console.log(props.cart)
    console.log(products)
    let loggedIn = sessionStorage.getItem('loggedIn')
    if (loggedIn === "false") {
      let currentFilter = products.filter((product) => props.cart.includes(product.id))
      setFinalCart(currentFilter)
    } else {
      console.log('fuck that')
    }
  }

  useEffect(() => {
  })

  useEffect(() => {
    displayCart()
  }, [products, props.cart])

  // console.log(props)
  // const [allProducts, setAllProducts] = useState([])
  // const [finalCart, setFinalCart] = useState([])
  // const [cart, setCart] = useState([])
  // const [log, setLog] = useState(false)
  // const [allUsers, setAllUsers] = useState([])

  // useEffect(() => {
  //   let loggedIn = sessionStorage.getItem('loggedIn')
  //   if (loggedIn === "true") {
  //     setLog(true)
  //   } else {
  //     setLog(false)
  //   }
  // }, [cart])

  // useEffect(() => {
  //   displayUserCart()
  // }, [cart])


  // function displayUserCart() {
  //   if (log) {
  //     displayProduct2()
  //   } else {
  //     displayProduct()
  //     console.log('display', displayProduct())
  //   }
  // }


  // useEffect(() => {
  //   getUsers().then(
  //     data => {
  //       setAllUsers(data.users)
  //     })
  // }, [])

  // function displayProduct() {
  //   if (cart) {
  //     let filter = allProducts.filter((product) => cart.includes(product.id))
  //     console.log('filter', filter)
  //     return setFinalCart(filter)
  //   }
  // }

  // function displayProduct2() {
  //   let currentUserID = sessionStorage.getItem('currentUser')
  //   let currentFind = allUsers.filter((user) => {
  //     return Number(user.userID) == Number(currentUserID)
  //   })
  //   console.log(currentFind)
  //   let cartFilter = allProducts.filter((product) => {
  //     return currentFind[0].cart.includes(product.id)
  //   })
  //   setFinalCart(cartFilter)
  // }


  useEffect(() => {
    getAllProducts().then(
      data => {
        setProducts(data.products)
      })
  }, [])

  // let totalPrice = () => {
  //   if (finalCart) {
  //     return props.reduce((acc, cur) => {
  //       let noSymbol = cur.price.split('$')
  //       acc += Number(noSymbol[1])
  //       return acc
  //     }, 0)
  //   }
  // }

  return (
    <section className='big-cart-container'>
      <h1 className='cart-title'>Shopping Cart</h1>
      <h1 className='cart-login-warning'>Login <Link className='login-link' to='/login'>here</Link> or <Link className='create-account-link' to='/createaccount'>create an account</Link> to save your cart!</h1>
      <section className='small-cart-container'>
        <section className='cart-items-container'>
          <h1>Items</h1>
          <CartItem finalCart={finalCart} />
        </section>
        <section className='checkout-container'>
          <h1>Checkout</h1>
          {/* <h2>${totalPrice()}</h2> */}
        </section>
      </section>
    </section>
  )
}

export default Cart