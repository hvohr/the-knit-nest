import { useEffect, useState } from 'react'
import SingleProduct from '../components/SingleProduct/SingleProduct'
import { getAllProducts } from '../components/apiCalls'


function Search() {
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])
  const [results, setResults] = useState([])
  const [searched, setSearched] = useState(false)
  const [empty, setEmpty] = useState(false)


  useEffect(() => {
    getAllProducts().then(
      data => {
        setProducts(data.products)
      }
    )
  }, [])

  function searchProducts() {
    let searchResults = products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
    setResults(searchResults)
    setSearched(false)
  }

  return (
    <section className='search-container'>
      <h1 className='search-title'>Search KnitNest Products<img className='search-cat' src={require('../components/images/silhouette_of_cat_with_ball_of_yarn_vector_by_froggyartdesigns_dahgamk-fullview.png')} /></h1>
      <div className='search-bar-container'>
        <input className='search-bar' onChange={(event) => {
          event.preventDefault()
          setSearch(event.target.value)
        }} type='search' name='search' />
        <button onClick={() => {
          searchProducts()
          if (search === '') {
            setEmpty(true)
          } else {
            setEmpty(false)
          }
          setSearched(true)
        }} className='find-button'>Find Item</button>
      </div>
      {empty && <h1 className='no-results'>No search query was entered - please enter one above!</h1>}
      {(results.length === 0 && searched === true) && <h1 className='no-results'>No Results Found - We Apologize!</h1>}
      {results.length !== 0 && <SingleProduct empty={empty} searched={searched} products={results} />}
    </section>
  )
}

export default Search