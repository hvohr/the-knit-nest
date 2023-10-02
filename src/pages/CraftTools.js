import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useEffect, useState } from 'react'
import { getSpecificProduct } from '../components/apiCalls'

function CraftTools(props) {
  const [tools, setTools] = useState([])  


function getSpecific() {
  getSpecificProduct('tools').then(
    data => {
      console.log(data)
      setTools(data)
    }
  )
}

  useEffect(() => {
    getSpecific()
  }, [])

  return (
    <section>
      <h1>Craft Tools</h1>
      <div>
        {tools.length && <SingleProduct products={tools} />}
      </div>
    </section>
  )
}

export default CraftTools