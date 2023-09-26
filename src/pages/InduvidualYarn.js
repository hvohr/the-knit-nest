import { useParams, Link } from 'react-router-dom'

function InduvidualYarn(props) {
  let refreshBook = sessionStorage.getItem('singleyarn')
  let refreshBookArray = JSON.parse(refreshBook)
  const { id } = useParams();
  const singleCheck = () => {
    return refreshBookArray.find((book) => book.id === parseInt(id))
  }
  return (
    <section>
      <div className='go-home-container'>
        <Link to='/yarn'><img className='go-back' src={require('../components/images/left.png')} /></Link>
        <h1>Go Back</h1>
      </div>
      <div>
        <img src={singleCheck().image} />
      </div>
      <div>
        <h1>{singleCheck().name}</h1>
        <h3>{singleCheck().brand}</h3>
        <h4>{singleCheck().price}</h4>
        <p>{singleCheck().description}</p>
      </div>
      <div>
        <h1>{singleCheck().details.yarnWeight}</h1>
        <h3>{singleCheck().details.crochetGauge}</h3>
        <h4>{singleCheck().details.knitGauge}</h4>
        <p>{singleCheck().details.weight}</p>
        <p>{singleCheck().details.length}</p>
        <p>{singleCheck().details.fiber}</p>
        <p>{singleCheck().details.careDetail}</p>
      </div>
    </section>
  )
}

export default InduvidualYarn