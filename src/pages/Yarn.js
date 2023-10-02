
import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useEffect, useState } from 'react'
import { getSpecificProduct } from '../components/apiCalls'

function Yarn() {
  const [yarn, setYarn] = useState([])
  const [refine, setRefine] = useState([])
  const [showColor, setShowColor] = useState(false)
  const [showBrand, setShowBrand] = useState(false)
  const [showYarnWeight, setShowYarnWeight] = useState(false)


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
    <section className='yarn-container'>
      <section className='filter-container'>
        <h3 className='filter-title'>Refine By:</h3>
        <button className='refine-button' onClick={() => setShowColor(!showColor)}>↓ Color</button>
        {showColor && <div>
          <div className='price-container'>
            <input type='checkbox' id='red' name='red' />
            <span className="dot-red"></span>
            <label for="red">Red</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='green' name='green' />
            <span className="dot-green"></span>
            <label for="green">Green</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='blue' name='blue' />
            <span className="dot-blue"></span>
            <label for="blue">Blue</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='yellow' name='yellow' />
            <span className="dot-yellow"></span>
            <label for="yellow">Yellow</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='purple' name='purple' />
            <span className="dot-purple"></span>
            <label for="purple">Purple</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='orange' name='orange' />
            <span className="dot-orange"></span>
            <label for="orange">Orange</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='white' name='white' />
            <span className="dot-white"></span>
            <label for="white">White</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='black' name='black' />
            <span className="dot-black"></span>
            <label for="black">Black</label>
          </div>
        </div>}
        <button className='refine-button' onClick={() => setShowBrand(!showBrand)}>↓ Brand</button>
        {showBrand && <div>
          <div className='price-container'>
            <input type='checkbox' id='lion' name='lion' />
            <label for="lion">Lion Brand</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='bernat' name='bernat' />
            <label for="bernat">Bernat</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='lily' name='lily' />
            <label for="lily">Lily Sugar'n Cream</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='red-heart' name='red-heart' />
            <label for="red-heart">Red Heart</label>
          </div>
        </div>}
        <button className='refine-button' onClick={() => setShowYarnWeight(!showYarnWeight)}>↓ Yarn Weight</button>
        {showYarnWeight && <div>
          <div className='price-container'>
            <input type='checkbox' id='lace' name='lace' />
            <label for="lace">0 - Lace</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='super' name='super' />
            <label for="super">1 - Super Fine</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='fine' name='fine' />
            <label for="fine">2 - Fine</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='light' name='light' />
            <label for="light">3- Light</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='medium' name='medium' />
            <label for="medium">4 - Medium</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='bulky' name='bulky' />
            <label for="bulky">5 - Bulky</label>
          </div>
          <div className='price-container'>
            <input type='checkbox' id='super-bulky' name='super-bulky' />
            <label for="super-bulky">6 - Super Bulky</label>
          </div>
        </div>}
      </section>
      <section className='small-yarn-container'>
        <h1 className='page-title'>Yarn</h1>
        <p className='page-description'>Tailored especially for beginners eager to embark on their crafting journey. Our selection boasts user-friendly textures and shades, ideal for those new to knitting or crocheting. Dive in to discover beginner-friendly yarns that ensure your first projects are both enjoyable and successful.</p>
        <div>
          {yarn.length && <SingleProduct products={yarn} />}
        </div>
      </section>
    </section>
  )
}

export default Yarn