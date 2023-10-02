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
      <h1>Books</h1>
      <div>
        {books.length && <SingleProduct products={books} />}
      </div>
    </section>
  )
}

export default Books