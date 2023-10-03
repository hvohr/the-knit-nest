
import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useEffect, useState } from 'react'
import { getSpecificProduct } from '../components/apiCalls'

function Yarn() {
  const [yarn, setYarn] = useState([])
  const [newYarn, setNewYarn] = useState([])
  const [toggle, setToggle] = useState(false)
  const [allRefine, setAllRefine] = useState([])
  const [showColor, setShowColor] = useState(false)
  const [showBrand, setShowBrand] = useState(false)
  const [showYarnWeight, setShowYarnWeight] = useState(false)


  function displayRefined() {
    let find = yarn.filter((y) => y.color.includes(allRefine.value))
    return find
  }

  function getSpecific() {
    getSpecificProduct('yarn').then(
      data => {
        setYarn(data)
      }
    )
  }

  useEffect(() => {
    displayRefined()
    setNewYarn(displayRefined())
  }, [allRefine])

  useEffect(() => {
    getSpecific()
  }, [])

  function handleChecked(event) {
    if (event.target.checked) {
      setAllRefine(event.target)
    }
  }




  return (
    <section className='yarn-container'>
      <section className='filter-container'>
        <h3 className='filter-title'>Refine By:</h3>
        <button className='refine-button' onClick={() => setShowColor(!showColor)}>↓ Color</button>
        {showColor && <div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => {
              handleChecked(event)
              setToggle(true)
              }} value='Red' />
            <span className="dot-red"></span>
            <label htmlFor="red">Red</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => handleChecked(event)} value='Green' />
            <span className="dot-green"></span>
            <label htmlFor="green">Green</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => handleChecked(event)} value='Blue' />
            <span className="dot-blue"></span>
            <label htmlFor="blue">Blue</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => handleChecked(event)} value='Yellow' />
            <span className="dot-yellow"></span>
            <label htmlFor="yellow">Yellow</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => handleChecked(event)} value='Purple' />
            <span className="dot-purple"></span>
            <label htmlFor="purple">Purple</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => handleChecked(event)} value='Orange' />
            <span className="dot-orange"></span>
            <label htmlFor="orange">Orange</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => handleChecked(event)} value='White' />
            <span className="dot-white"></span>
            <label htmlFor="white">White</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => handleChecked(event)} value='Black' />
            <span className="dot-black"></span>
            <label htmlFor="black">Black</label>
          </div>
        </div>}
        <button className='refine-button' onClick={() => setShowBrand(!showBrand)}>↓ Brand</button>
        {showBrand && <div>
          <div className='price-container'>
            <input type='radio' id='lion-brand' value='brand' onChange={(event) => handleChecked(event)} name='Lion Brand' />
            <label htmlFor="lion">Lion Brand</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='bernat' value='brand' onChange={(event) => handleChecked(event)} name='Bernat' />
            <label htmlFor="bernat">Bernat</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='lily' value='brand' onChange={(event) => handleChecked(event)} name='Lily Sugar/n Cream' />
            <label htmlFor="lily">Lily Sugar'n Cream</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='red-heart' value='brand' onChange={(event) => handleChecked(event)} name='Red Heart' />
            <label htmlFor="red-heart">Red Heart</label>
          </div>
        </div>}
        <button className='refine-button' onClick={() => setShowYarnWeight(!showYarnWeight)}>↓ Yarn Weight</button>
        {showYarnWeight && <div>
          <div className='price-container'>
            <input type='radio' id='lace' value='Yarn Weight' onChange={(event) => handleChecked(event)} name='Lace' />
            <label htmlFor="lace">0 - Lace</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='super' value='Yarn Weight' onChange={(event) => handleChecked(event)} name='Super Fine' />
            <label htmlFor="super">1 - Super Fine</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='fine' value='Yarn Weight' onChange={(event) => handleChecked(event)} name='Fine' />
            <label htmlFor="fine">2 - Fine</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='light' value='Yarn Weight' onChange={(event) => handleChecked(event)} name='Light' />
            <label htmlFor="light">3- Light</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='medium' value='Yarn Weight' onChange={(event) => handleChecked(event)} name='Medium' />
            <label htmlFor="medium">4 - Medium</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='bulky' value='Yarn Weight' onChange={(event) => handleChecked(event)} name='Bulky' />
            <label htmlFor="bulky">5 - Bulky</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='super-bulky' value='Yarn Weight' onChange={(event) => handleChecked(event)} name='Super-Bulky' />
            <label htmlFor="super-bulky">6 - Super Bulky</label>
          </div>
        </div>}
      </section>
      <section className='small-yarn-container'>
        <h1 className='page-title'>Yarn</h1>
        <p className='page-description'>Tailored especially for beginners eager to embark on their crafting journey. Our selection boasts user-friendly textures and shades, ideal for those new to knitting or crocheting. Dive in to discover beginner-friendly yarns that ensure your first projects are both enjoyable and successful.</p>
        <div className='refine-container'>
          {allRefine.length !== 0 && <p className='refine-container'>Refined by:<span key={allRefine.id} id={allRefine.id} className='refine-values'>{allRefine.value}: {allRefine.name}</span>
          </p>}
        </div>
        <p>Viewing all {yarn.length} product(s)</p>
        <div>
          {yarn.length !== 0 && <SingleProduct newYarn={newYarn} toggle={toggle} products={yarn} />}
        </div>
      </section>
    </section>
  )
}

export default Yarn