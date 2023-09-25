import { useParams } from 'react-router-dom'

function InduvidualBook(props) {
  const { id } = useParams();
  const singleCheck = () => {
    return props.books.find((book) => book.id === parseInt(id))
  }
  return (
    <section>
      <div>
        <img src={singleCheck().image} />
      </div>
      <div>
        <h1>{singleCheck().name}</h1>
        <h3>{singleCheck().author}</h3>
        <h4>{singleCheck().price}</h4>
        <p>{singleCheck().description}</p>
      </div>
      <div>
        <h1>{singleCheck().details.type}</h1>
        <h3>{singleCheck().details.isbn}</h3>
        <h4>{singleCheck().details.publisher}</h4>
        <p>{singleCheck().details.publicationDate}</p>
        <p>{singleCheck().details.pages}</p>
        <p>{singleCheck().details.productDimensions}</p>
      </div>
    </section>
  )
}

export default InduvidualBook