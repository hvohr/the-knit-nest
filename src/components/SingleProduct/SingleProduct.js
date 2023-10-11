import { Link } from "react-router-dom";
import { useEffect } from 'react'

function SingleProduct(props) {

  function filteredProduct() {
    if (props.newYarn) {
      return props.newYarn.map((product) => {
        return (
          <Link key={Date.now() + props.products.indexOf(product)} id={product.id} className='small-book-container' to={`/${props.products[0].category}/${product.id}`}>
            <img className='book-image' src={product.image} />
            <div>
              <h3 className='book-name'>{product.name}</h3>
              <h3 className='book-price'>{product.price}</h3>
            </div>
          </Link>
        )
      })
    }
  }

  function singleProduct() {
    return props.products.map((product) => {
      return (
        <Link key={Date.now() + props.products.indexOf(product)} id={product.id} className='small-book-container' to={`/${props.products[0].category}/${product.id}`}>
          <img className='book-image' src={product.image} />
          <div>
            <h3 className='book-name'>{product.name}</h3>
            <h3 className='book-price'>{product.price}</h3>
          </div>
        </Link>
      )
    })
  }

  function sortedBooks() {
    return props.sortedBooks.map((product) => {
      return (
        <Link key={Date.now() + props.products.indexOf(product)} id={product.id} className='small-book-container' to={`/${props.products[0].category}/${product.id}`}>
          <img className='book-image' src={product.image} />
          <div>
            <h3 className='book-name'>{product.name}</h3>
            <h3 className='book-price'>{product.price}</h3>
          </div>
        </Link>
      )
    })
  }

  return (
    <section className='book-container'>
      {(!props.toggle && !props.brandToggle && !props.weightToggle) && singleProduct()}
      {(props.toggle || props.brandToggle || props.weightToggle) && filteredProduct()}
      {props.sortedBooks.length && sortedBooks()}
    </section>
  )
}

export default SingleProduct