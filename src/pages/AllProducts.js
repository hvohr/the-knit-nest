import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../components/apiCalls'

function AllProducts() {
  const [products, setProducts] = useState([])
  const [sortedProducts, setSortedProducts] = useState([])
  const [filter3, setFilter3] = useState('')
  const [close, setClose] = useState(true)


  function getSpecific() {
    getAllProducts().then(
      data => {
        setProducts(data.products)
      }
    )
  }

  useEffect(() => {
    getSpecific()
  }, [])

  function sortProducts() {
    if (filter3 === 'A-Z') {
      let newProducts = products.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      setSortedProducts(newProducts)
    } else if (filter3 === 'Price Low to High') {
      let newProducts = products.sort((a, b) => (b.price > a.price) ? 1 : ((a.price > b.price) ? -1 : 0))
      setSortedProducts(newProducts)
    } else if (filter3 === 'Price High to Low') {
      let newProducts = products.sort((a, b) => (b.price > a.price) ? 1 : ((a.price > b.price) ? -1 : 0))
      setSortedProducts(newProducts)
    } else if (filter3 === 'Z-A') {
      let newProducts = products.sort((a, b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
      setSortedProducts(newProducts)
    } else {
      getSpecific()
    }
  }

  useEffect(() => {
    sortProducts()
  }, [filter3])

  return (
    <section className='all-products-container'>
      <h1 className='page-title'>All Products</h1>
      <div className='top-container'>
        <p className='product-length'>Viewing all {products.length} product(s)</p>
        <div className='filtering-container'>
          <button className='filter-button' onClick={() => setClose(!close)}>Sort by</button>
          {!close && <div className='filter-items'>
            <button className='filter-button1' onClick={(event) => {
              setFilter3(event.target.value)
              setClose(true)
            }} value='Price High to Low'>Price High to Low</button>
            <button className='filter-button1' onClick={(event) => {
              setFilter3(event.target.value)
              setClose(true)
            }} value='Price Low to High'>Price Low to High</button>
            <button className='filter-button1' onClick={(event) => {
              setFilter3(event.target.value)
              setClose(true)
            }} value='A-Z'>A-Z</button>
            <button className='filter-button1' onClick={(event) => {
              setFilter3(event.target.value)
              setClose(true)
            }} value='Z-A'>Z-A</button>
          </div>}
          {filter3 && <div className='close-container'>
            <button className='close-button' onClick={() => {
              setFilter3('')
              setSortedProducts([])
            }}><img className='close-filter' src={require('../components/images/close (2).png')} /></button>
            <p className='ui-sort'>Sorting by: {filter3}</p>
          </div>}
        </div>
      </div>
      <div>
        <SingleProduct filter3={filter3} sortedProducts={sortedProducts} products={products} />
      </div>
    </section>
  )
}

export default AllProducts