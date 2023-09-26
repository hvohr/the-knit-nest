import { useParams, Link } from 'react-router-dom'

function InduvidualTool(props) {
  let refreshBook = sessionStorage.getItem('singletool')
  let refreshBookArray = JSON.parse(refreshBook)
  const { id } = useParams();
  const singleCheck = () => {
    return refreshBookArray.find((tool) => tool.id === parseInt(id))
  }
  return (
    <section>
      <div className='go-home-container'>
        <Link to='/crafttools'><img className='go-back' src={require('../components/images/left.png')} /></Link>
        <h1>Go Back</h1>
      </div>
      <div>
        <img src={singleCheck().image} />
      </div>
      <div>
        <h1>{singleCheck().name}</h1>
        <h4>{singleCheck().price}</h4>
        <p>{singleCheck().description}</p>
      </div>
      <div>
        <h1>{singleCheck().details}</h1>
      </div>
    </section>
  )
}

export default InduvidualTool