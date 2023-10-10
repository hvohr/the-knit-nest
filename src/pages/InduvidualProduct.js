import { useParams, Link } from 'react-router-dom'

function InduvidualProduct(props) {
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
      console.log('fuck')
      return props.setCart([...props.cart, item.id])
    }
  }

  return (
    <section className='whole-ind-yarn-container'>
      <div className='go-home-container'>
        <Link to={`/${singleCheck().category}`}><img className='go-back' src={require('../components/images/left.png')} /></Link>
        <h1>Go Back</h1>
      </div>
      <section className='yarn-induvidual-container'>
        <div className='yarn-induvidual-image-container'>
          <img className='yarn-ind-image' src={singleCheck().image} />
        </div>
        <div className='yarn-induvidual-detail-container'>
          <h1 className='ind-name'>{singleCheck().name}</h1>
          {singleCheck().color !== null && <h3 className='ind-brand'>{singleCheck().brand}</h3>}
          <h4 className='ind-price'>{singleCheck().price}</h4>
          <div>
            <button onClick={() => {
              props.setChange(singleCheck().id)
              postUserCart(singleCheck())
            }} className='add-to-cart'>Add to Cart</button>
          </div>
          {singleCheck().color !== null && <h4 className='ind-color'>{singleCheck().color}</h4>}
          <p className='ind-description'>{singleCheck().description}</p>
        </div>
      </section>
      <div>
        <h1>{singleCheck().details}</h1>
      </div>
    </section>
  )
}

export default InduvidualProduct