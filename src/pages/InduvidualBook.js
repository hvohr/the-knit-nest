import { useParams, Link } from 'react-router-dom'

function InduvidualBook(props) {
  let refreshBook = sessionStorage.getItem('single')
  let refreshBookArray = JSON.parse(refreshBook)
  const { id } = useParams();
  const singleCheck = () => {
    return refreshBookArray.find((book) => book.id === parseInt(id))
  }
  return (
    <section>
      <div className='go-home-container'>
        <Link to='/books'><img className='go-back' src={require('../components/images/left.png')} /></Link>
        <h1>Go Back</h1>
      </div>
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