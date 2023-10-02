import { Link } from "react-router-dom";


function SingleProduct(props) {

  let singleProduct = props.products.map((product) => {
    return (
      <Link className='small-book-container' to={`/product/${product.id}`}>
        <img className='book-image' src={product.image} />
        <h3 className='book-name'>{product.name}</h3>
        <h3 className='book-price'>{product.price}</h3>
      </Link>
    )
  })
  return (
    <section className='book-container'>
      {singleProduct}
    </section>
  )
}

export default SingleProduct