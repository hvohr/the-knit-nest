import { Link } from "react-router-dom";

function SingleBook(props) {
  let singleBook = props.books.map((book) => {
    return (
      <Link to={`/books/${book.id}`}>
        <img src={book.image} />
        <h3>{book.name}</h3>
        <h3>{book.price}</h3>
      </Link>
    )
  })
  return (
    <section>
      {singleBook}
    </section>
  )
}

export default SingleBook