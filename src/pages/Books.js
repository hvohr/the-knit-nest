import SingleBook from '../components/SingleBook/SingleBook'

function Books(props) {
  return (
    <section>
      <h1>Books</h1>
      <div>
        {!props.books.length && <h1>Loading...</h1>}
        {props.books.length && <SingleBook books={props.books} />}
      </div>
    </section>
  )
}

export default Books