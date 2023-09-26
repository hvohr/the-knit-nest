import { Link } from "react-router-dom";

function SingleTool(props) {
  let singleTool = props.tools.map((tool) => {
    return (
      <Link className='small-book-container' to={`/crafttools/${tool.id}`}>
        <img className='book-image' src={tool.image} />
        <h3 className='book-name'>{tool.name}</h3>
        <h3 className='book-price'>{tool.price}</h3>
      </Link>
    )
  })
  return (
    <section className='book-container'>
      {singleTool}
    </section>
  )
}

export default SingleTool