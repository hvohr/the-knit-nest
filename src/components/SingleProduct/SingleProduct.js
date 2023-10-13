import { Link } from "react-router-dom";
import { useEffect } from 'react'

function SingleProduct(props) {
  function filteredProduct() {
    if (props.newYarn) {
      return props.newYarn.map((product) => {
        return (
          <Link key={Date.now() + props.newYarn.indexOf(product)} id={product.id} className='small-book-container' to={`/${props.products[0].category}/${product.id}`}>
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
    if (props.sortedBooks) {
      return props.sortedBooks.map((product) => {
        return (
          <Link key={Date.now() + props.sortedBooks.indexOf(product)} id={product.id} className='small-book-container' to={`/${props.products[0].category}/${product.id}`}>
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

  function sortedTools() {
    if (props.sortedTools) {
      return props.sortedTools.map((product) => {
        return (
          <Link key={Date.now() + props.sortedTools.indexOf(product)} id={product.id} className='small-book-container' to={`/${props.products[0].category}/${product.id}`}>
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


  useEffect(() => {
    sortedBooks()
    sortedTools()
  }, [props.change])

  return (
    <section className='book-container'>
      {(!props.toggle && !props.brandToggle && !props.weightToggle && props.filter === '') && singleProduct()}
      {(props.searched && !props.empty) && singleProduct()}
      {(props.toggle || props.brandToggle || props.weightToggle) && filteredProduct()}
      {props.filter !== '' && sortedBooks()}
      {props.filter !== '' && sortedTools()}
    </section>
  )
}

export default SingleProduct