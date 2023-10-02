
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
      <h1>Yarn</h1>
      <div>
        {yarn.length && <SingleProduct products={yarn} />}
      </div>
    </section>
  )
}

export default Yarn