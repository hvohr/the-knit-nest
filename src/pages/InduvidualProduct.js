import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function InduvidualProduct(props) {
  const [cartItem, setCartItem] = useState(false)
  const [item, setItem] = useState(1)
  const [cart, setCart] = useState([])

  let refreshBook = sessionStorage.getItem('allproducts')
  let refreshBookArray = JSON.parse(refreshBook)
  const { id } = useParams();
  const singleCheck = () => {
    return refreshBookArray.find((book) => book.id === parseInt(id))
  }

  function postUserCart(item) {
    let loggedIn = sessionStorage.getItem('loggedIn')
    if (loggedIn === 'true') {
      const productInfo = {
        userID: sessionStorage.getItem('currentUser'),
        id: singleCheck().id
      }
      props.submitProduct(productInfo)
    } else {
      return props.setCart([...props.cart, item.id])
    }
  }

  function warnDuplicates() {
    if (!cart.includes(singleCheck().id)) {
      setCart([...cart, singleCheck().id])
      setItem(1)
    } else {
      setItem(2)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setCartItem(false);
    }, 3000);
  }, [cartItem]);

  useEffect(() => {
    setTimeout(() => {
      setItem(1);
    }, 3000);
  }, [item]);

  return (
    <section className='whole-ind-yarn-container'>
      <div className='go-home-container'>
        <Link to={`/${singleCheck().category}`}><img alt='return arrow' className='go-back' src={require('../components/images/left.png')} /></Link>
        <h1>Go Back</h1>
      </div>
      <section className='yarn-induvidual-container'>
        <div className='yarn-induvidual-image-container'>
          <img className='yarn-ind-image' alt={singleCheck().name} src={singleCheck().image} />
        </div>
        <div className='yarn-induvidual-detail-container'>
          <h1 className='ind-name'>{singleCheck().name}</h1>
          {singleCheck().color !== null && <h3 className='ind-brand'>{singleCheck().brand}</h3>}
          <div>
            <div className='add-cart-container'>
              <h4 className='ind-price'>{singleCheck().price}</h4>
              <button onClick={() => {
                warnDuplicates()
                props.setChange(singleCheck().id)
                postUserCart(singleCheck())
                setCartItem(true)
              }} className='add-to-cart'>Add to Cart</button>
            </div>
            {(cartItem && item === 1) && <p className='added-item-confirmation'>Item added to cart! 🎉</p>}
            {item !== 1 && <p className='added-item-confirmation'>Item was already added to cart! 🚫</p>}
          </div>
          {singleCheck().color !== null && <h4 className='ind-color'>Product Color: {singleCheck().color}</h4>}
          <p className='ind-description'>{singleCheck().description}</p>
          <div className='detail-container'>
            <p><strong>Extra Details:</strong> {singleCheck().details}</p>
          </div>
        </div>
      </section>
    </section>
  )
}

export default InduvidualProduct