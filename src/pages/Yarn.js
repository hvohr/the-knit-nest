
import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useEffect, useState } from 'react'
import { getSpecificProduct } from '../components/apiCalls'

function Yarn() {
  const [yarn, setYarn] = useState([])
  const [allRefine, setAllRefine] = useState([])
  const [refineColor, setRefineColor] = useState([])
  const [refineBrand, setRefineBrand] = useState([])
  const [refineWeight, setRefineWeight] = useState([])

  const [showColor, setShowColor] = useState(false)
  const [showBrand, setShowBrand] = useState(false)
  const [showYarnWeight, setShowYarnWeight] = useState(false)

  function checkBoxChange() {

  }

  function getSpecific() {
    getSpecificProduct('yarn').then(
      data => {
        setYarn(data)
      }
    )
  }

  useEffect(() => {
    getSpecific()
    console.log(allRefine)
  }, [allRefine])

  function handleColorChecked(event) {
    if (event.target.checked) {
      setRefineColor([...refineColor, event.target.name])
      setAllRefine([...allRefine, event.target])
    } else {
      let newDisplay = allRefine.filter((ref) => ref !== event.target)
      setAllRefine(newDisplay)
    }
  }

  let refineDisplay = allRefine.map((ref) => {
    return (
      <h3>{ref.name}: {ref.id}</h3>
    )
  })


  return (
    <section className='yarn-container'>
      <section className='filter-container'>
        <h3 className='filter-title'>Refine By:</h3>
        <button className='refine-button' onClick={() => setShowColor(!showColor)}>↓ Color</button>
        {showColor && <div>
          <div className='price-container'>
            <input type='checkbox' onChange={(event) => handleColorChecked(event)} id='red' name='color' />
            <span className="dot-red"></span>
            <label htmlFor="red">Red</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='green' onChange={(event) => handleColorChecked(event)} name='color' />
            <span className="dot-green"></span>
            <label htmlFor="green">Green</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='blue' onChange={(event) => handleColorChecked(event)} name='color' />
            <span className="dot-blue"></span>
            <label htmlFor="blue">Blue</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='yellow' onChange={(event) => handleColorChecked(event)} name='color' />
            <span className="dot-yellow"></span>
            <label htmlFor="yellow">Yellow</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='purple' onChange={(event) => handleColorChecked(event)} name='color' />
            <span className="dot-purple"></span>
            <label htmlFor="purple">Purple</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='orange' onChange={(event) => handleColorChecked(event)} name='color' />
            <span className="dot-orange"></span>
            <label htmlFor="orange">Orange</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='white' onChange={(event) => handleColorChecked(event)} name='color' />
            <span className="dot-white"></span>
            <label htmlFor="white">White</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='black' onChange={(event) => handleColorChecked(event)} name='color' />
            <span className="dot-black"></span>
            <label htmlFor="black">Black</label>
          </div>
        </div>}
        <button className='refine-button' onClick={() => setShowBrand(!showBrand)}>↓ Brand</button>
        {showBrand && <div>
          <div className='price-container'>
            <input type='checkbox' id='lion' name='brand' />
            <label htmlFor="lion">Lion Brand</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='bernat' name='brand' />
            <label htmlFor="bernat">Bernat</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='lily' name='brand' />
            <label htmlFor="lily">Lily Sugar'n Cream</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='red-heart' name='brand' />
            <label htmlFor="red-heart">Red Heart</label>
          </div>
        </div>}
        <button className='refine-button' onClick={() => setShowYarnWeight(!showYarnWeight)}>↓ Yarn Weight</button>
        {showYarnWeight && <div>
          <div className='price-container'>
            <input type='checkbox' id='lace' name='lace' />
            <label htmlFor="lace">0 - Lace</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='super' name='super' />
            <label htmlFor="super">1 - Super Fine</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='fine' name='fine' />
            <label htmlFor="fine">2 - Fine</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='light' name='light' />
            <label htmlFor="light">3- Light</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='medium' name='medium' />
            <label htmlFor="medium">4 - Medium</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='bulky' name='bulky' />
            <label htmlFor="bulky">5 - Bulky</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='super-bulky' name='super-bulky' />
            <label htmlFor="super-bulky">6 - Super Bulky</label>
          </div>
        </div>}
      </section>
      <section className='small-yarn-container'>
        <h1 className='page-title'>Yarn</h1>
        <p className='page-description'>Tailored especially for beginners eager to embark on their crafting journey. Our selection boasts user-friendly textures and shades, ideal for those new to knitting or crocheting. Dive in to discover beginner-friendly yarns that ensure your first projects are both enjoyable and successful.</p>
        {allRefine.length !== 0 && refineDisplay}
        {allRefine.length === 0 && <p>Viewing all {yarn.length} products</p>}
        <div>
          {yarn.length && <SingleProduct products={yarn} />}
        </div>
      </section>
    </section>
  )
}

export default Yarn