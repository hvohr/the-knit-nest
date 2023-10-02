import { Link } from "react-router-dom";

function SingleYarn(props) {
  console.log(props)
  let singleYarn = props.yarn.map((yarn) => {
    return (
      <Link className='small-book-container' to={`/yarn/${yarn.id}`}>
        <img className='yarn-image' src={yarn.image} />
        <h3 className='yarn-name'>{yarn.name}</h3>
        <h3 className='yarn-price'>{yarn.price}</h3>
      </Link>
    )
  })
  return (
    <section className='book-container'>
      {singleYarn}
    </section>
  )
}

export default SingleYarn