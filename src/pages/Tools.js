import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useEffect, useState } from 'react'
import { getSpecificProduct } from '../components/apiCalls'

function Tools() {
  const [tools, setTools] = useState([])
  const [sortedTools, setSortedTools] = useState([])
  const [filter2, setFilter2] = useState('')
  const [close, setClose] = useState(true)
  const [change, setChange] = useState(true)


  function getSpecific() {
    getSpecificProduct('tools').then(
      data => {
        setTools(data)
      }
    )
  }

  function sortTools() {
    if (filter2 === 'A-Z') {
      let newTools = tools.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
      setSortedTools(newTools)
      setChange(!change)
    } else if (filter2 === 'Price Low to High') {
      let newTools = tools.sort((a, b) => (b.price > a.price) ? 1 : ((a.price > b.price) ? -1 : 0))
      setSortedTools(newTools)
      setChange(!change)
    } else if (filter2 === 'Price High to Low') {
      let newTools = tools.sort((a, b) => (b.price > a.price) ? 1 : ((a.price > b.price) ? -1 : 0))
      setSortedTools(newTools)
      setChange(!change)
    } else if (filter2 === 'Z-A') {
      let newTools = tools.sort((a, b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
      setSortedTools(newTools)
      setChange(!change)
    } else {
      getSpecific()
      setChange(!change)
    }
  }

useEffect(() => {
  sortTools()
}, [filter2])

useEffect(() => {
  getSpecific()
}, [])


return (
  <section>
    <h1 className='page-title'>Craft Tools</h1>
    <p className='page-description'>If you knit or crochet, you will love our collection of Needles, Hooks & More! With multiple sizes of crochet hooks and knitting needles, and a gauge ruler to guide you to choose the right tools for your patterns, you'll be set for almost any project. Also included are stitch markers and ball winders that will help you prepare your yarn and project, as well as keep track of your progress without missing a beat.</p>
    <div className='top-container'>
      <p className='product-length'>Viewing all {tools.length} product(s)</p>
      <div className='filtering-container'>
        <button className='filter-button' onClick={() => setClose(!close)}>Sort by</button>
        {!close && <div className='filter-items'>
          <button className='filter-button1' onClick={(event) => {
            setFilter2(event.target.value)
            setClose(true)
          }} value='Price High to Low'>Price High to Low</button>
          <button className='filter-button1' onClick={(event) => {
            setFilter2(event.target.value)
            setClose(true)
          }} value='Price Low to High'>Price Low to High</button>
          <button className='filter-button1' onClick={(event) => {
            setFilter2(event.target.value)
            setClose(true)
          }} value='A-Z'>A-Z</button>
          <button className='filter-button1' onClick={(event) => {
            setFilter2(event.target.value)
            setClose(true)
          }} value='Z-A'>Z-A</button>
        </div>}
        {filter2 && <div className='close-container'>
          <button className='close-button' onClick={() => {
            setFilter2('')
            setSortedTools([])
          }}><img alt='the letter x'className='close-filter' src={require('../components/images/close (2).png')} /></button>
          <p className='ui-sort'>Sorting by: {filter2}</p>
        </div>}
      </div>
    </div>
    <div>
      {tools.length === 0 && <h2 className='data-loading'>Loading...</h2>}
    </div>
    <div>
      {tools.length !==0 && <SingleProduct change={change} sortedTools={sortedTools} filter={filter2} products={tools} />}
    </div>
  </section>
)
}

export default Tools