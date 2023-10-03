import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useEffect, useState } from 'react'
import { getSpecificProduct } from '../components/apiCalls'
 
function Books() {
const [books, setBooks] = useState([])  

function getSpecific() {
  getSpecificProduct('books').then(
    data => {
      setBooks(data)
    }
  )
}

  useEffect(() => {
    getSpecific()
  }, [])

  return (
    <section>
      <h1 className='page-title'>Books</h1>
      <p className='page-description'>Discover a world of knowledge and imagination in our diverse collection of crafting books. Whether you're an avid reader, a curious learner, or searching for the perfect crocheting/knitting project, our carefully curated selection offers something for everyone!</p>
      <div>
        {books.length && <SingleProduct products={books} />}
      </div>
    </section>
  )
}

export default Books