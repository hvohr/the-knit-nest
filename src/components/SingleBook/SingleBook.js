import { Link } from "react-router-dom";

function SingleBook(props) {
  let singleBook = props.books.map((book) => {
    return (
      <Link className='small-book-container' to={`/books/${book.id}`}>
        <img className='book-image' src={book.image} />
        <h3 className='book-name'>{book.name}</h3>
        <h3 className='book-price'>{book.price}</h3>
      </Link>
    )
  })
  return (
    <section className='book-container'>
      {singleBook}
    </section>
  )
}

export default SingleBook