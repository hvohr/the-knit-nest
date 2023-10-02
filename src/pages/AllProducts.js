import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useEffect, useState } from 'react'
import { getAllProducts } from '../components/apiCalls'

function AllProducts() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProducts().then(
      data => {
        console.log(data)
        setProducts(data.products)
      }
    )
  }, [])

  return (
    <section>
      <h1>AllProducts</h1>
      <div>
        <SingleProduct products={products} />
      </div>
    </section>
  )
}

export default AllProducts