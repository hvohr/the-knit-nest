import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useEffect, useState } from 'react'
import { getSpecificProduct } from '../components/apiCalls'

function Books() {
  const [books, setBooks] = useState([])
  const [openFilter, setOpenFilter] = useState(false)
  const [filter, setFilter] = useState('')
  const [close, setClose] = useState(true)

  function getSpecific() {
    getSpecificProduct('books').then(
      data => {
        setBooks(data)
      }
    )
  }

  useEffect(() => {
    getSpecific()
    console.log(filter)
  }, [])

  return (
    <section>
      <h1 className='page-title'>Books</h1>
      <p className='page-description'>Discover a world of knowledge and imagination in our diverse collection of crafting books. Whether you're an avid reader, a curious learner, or searching for the perfect crocheting/knitting project, our carefully curated selection offers something for everyone!</p>
      <div className='filtering-container'>
        <button onClick={() => setClose(!close)}>Sort by</button>
        {filter && <p>Sorting by: {filter}</p>}
        {!close && <div>
          <button className='filter' onClick={(event) => {
            setFilter(event.target.value)
            setClose(true)
          }} value='Price High to Low'>Price High to Low</button>
          <button className='filter' onClick={(event) => {
            setFilter(event.target.value)
            setClose(true)
          }} value='Price Low to High'>Price Low to High</button>
          <button className='filter' onClick={(event) => {
            setFilter(event.target.value)
            setClose(true)
          }} value='A-Z'>A-Z</button>
          <button className='filter' onClick={(event) => {
            setFilter(event.target.value)
            setClose(true)
          }} value='A-Z'>Z-A</button>
        </div>}
      </div>
      <div>
        {books.length && <SingleProduct products={books} />}
      </div>
    </section>
  )
}

export default Books