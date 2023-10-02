
import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useEffect, useState } from 'react'
import { getSpecificProduct } from '../components/apiCalls'

function Yarn() {
  const [yarn, setYarn] = useState([])


  function getSpecific() {
    getSpecificProduct('yarn').then(
      data => {
        setYarn(data)
      }
    )
  }

  useEffect(() => {
    getSpecific()
  }, [])

  return (
    <section>
      <h1 className='page-title'>Yarn</h1>
      <p className='page-description'>Tailored especially for beginners eager to embark on their crafting journey. Our selection boasts user-friendly textures and shades, ideal for those new to knitting or crocheting. Dive in to discover beginner-friendly yarns that ensure your first projects are both enjoyable and successful.</p>
      <div>
        {yarn.length && <SingleProduct products={yarn} />}
      </div>
    </section>
  )
}

export default Yarn