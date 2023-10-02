import { Link, useParams } from "react-router-dom";


function SingleProduct(props) {
  let singleProduct = props.products.map((product) => {
    return (
      <Link className='small-book-container' to={`/${props.products[0].category}/${product.id}`}>
        <img className='book-image' src={product.image} />
        <div>
          <h3 className='book-name'>{product.name}</h3>
          <h3 className='book-price'>{product.price}</h3>
        </div>
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