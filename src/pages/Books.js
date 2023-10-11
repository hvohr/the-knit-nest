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
        <button className='filter-button' onClick={() => setClose(!close)}>Sort by</button>
        {!close && <div className='filter-items'>
          <button className='filter-button1' onClick={(event) => {
            setFilter(event.target.value)
            setClose(true)
          }} value='Price High to Low'>Price High to Low</button>
          <button className='filter-button1' onClick={(event) => {
            setFilter(event.target.value)
            setClose(true)
          }} value='Price Low to High'>Price Low to High</button>
          <button className='filter-button1' onClick={(event) => {
            setFilter(event.target.value)
            setClose(true)
          }} value='A-Z'>A-Z</button>
          <button className='filter-button1' onClick={(event) => {
            setFilter(event.target.value)
            setClose(true)
          }} value='A-Z'>Z-A</button>
        </div>}
        {filter && <div className='close-container'>
          <button className='close-button' onClick={() => setFilter('')}><img className='close-filter' src={require('../components/images/close (2).png')} /></button>
          <p className='ui-sort'>Sorting by: {filter}</p>
        </div>}
      </div>
      <div>
        {books.length && <SingleProduct products={books} />}
      </div>
    </section>
  )
}

export default Books