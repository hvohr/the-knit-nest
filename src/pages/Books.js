import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useEffect, useState } from 'react'
import { getSpecificProduct } from '../components/apiCalls'

function Books() {
  const [books, setBooks] = useState([])
  const [sortedBooks, setSortedBooks] = useState([])
  const [filter, setFilter] = useState('')
  const [change, setChange] = useState(true)
  const [close, setClose] = useState(true)

  function getSpecific() {
    getSpecificProduct('books').then(
      data => {
        setBooks(data)
      }
    )
  }

  function sortBooks() {
    if (filter === 'A-Z') {
      let newBooks = books.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      setSortedBooks(newBooks)
      setChange(!change)
    } else if (filter === 'Price Low to High') {
      let newBooks = books.sort((a, b) => (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0))
      setChange(!change)
      setSortedBooks(newBooks)
    } else if (filter === 'Price High to Low') {
      let newBooks = books.sort((a, b) => (b.price > a.price) ? 1 : ((a.price > b.price) ? -1 : 0))
      setSortedBooks(newBooks)
      setChange(!change)
    } else if (filter === 'Z-A') {
      let newBooks = books.sort((a, b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
      setSortedBooks(newBooks)
      setChange(!change)
    } else {
      getSpecific()
      setChange(!change)
    }
  }

  useEffect(() => {
    sortBooks()
  }, [filter])

  useEffect(() => {
    getSpecific()
  }, [])


  return (
    <section>
      <h1 className='page-title'>Books</h1>
      <p className='page-description'>Discover a world of knowledge and imagination in our diverse collection of crafting books. Whether you're an avid reader, a curious learner, or searching for the perfect crocheting/knitting project, our carefully curated selection offers something for everyone!</p>
      <div className='top-container'>
        <p className='product-length'>Viewing all {books.length} product(s)</p>
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
            }} value='Z-A'>Z-A</button>
          </div>}
          {filter && <div className='close-container'>
            <button className='close-button' onClick={() => {
              setFilter('')
              setSortedBooks([])
            }}><img className='close-filter' src={require('../components/images/close (2).png')} /></button>
            <p className='ui-sort'>Sorting by: {filter}</p>
          </div>}
        </div>
      </div>
      <div>
        {books.length && <SingleProduct change={change} filter={filter} sortedBooks={sortedBooks} products={books} />}
      </div>
    </section>
  )
}

export default Books