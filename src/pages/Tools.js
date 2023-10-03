import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useEffect, useState } from 'react'
import { getSpecificProduct } from '../components/apiCalls'

function Tools(props) {
  const [tools, setTools] = useState([])  


function getSpecific() {
  getSpecificProduct('tools').then(
    data => {
      setTools(data)
    }
  )
}

  useEffect(() => {
    getSpecific()
  }, [])

  return (
    <section>
      <h1 className='page-title'>Craft Tools</h1>
      <p className='page-description'>If you knit or crochet, you will love our collection of Needles, Hooks & More! With multiple sizes of crochet hooks and knitting needles, and a gauge ruler to guide you to choose the right tools for your patterns, you'll be set for almost any project. Also included are stitch markers and ball winders that will help you prepare your yarn and project, as well as keep track of your progress without missing a beat.</p>
      <div>
        {tools.length && <SingleProduct products={tools} />}
      </div>
    </section>
  )
}

export default Tools