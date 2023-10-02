import SingleBook from '../components/SingleBook/SingleBook'
import { useEffect, useState } from 'react'
import { getSpecificProduct } from '../components/apiCalls'
 
function Books() {
const [books, setBooks] = useState()

  useEffect(() => {
    getSpecificProduct('books').then(
      data => {
        setBooks(data.allproducts)
      }
    )
  }, [])

  return (
    <section>
      <h1>Books</h1>
      <div>
        <SingleBook books={books} />
      </div>
    </section>
  )
}

export default Books