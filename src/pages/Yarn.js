
import SingleProduct from '../components/SingleProduct/SingleProduct'
import { useEffect, useState } from 'react'
import { getSpecificProduct } from '../components/apiCalls'

function Yarn() {
  const [yarn, setYarn] = useState([])
  const [newYarn, setNewYarn] = useState([])
  const [toggle, setToggle] = useState(false)
  const [brandToggle, setBrandToggle] = useState(false)
  const [weightToggle, setWeightToggle] = useState(false)
  const [showColor, setShowColor] = useState(false)
  const [showBrand, setShowBrand] = useState(false)
  const [showYarnWeight, setShowYarnWeight] = useState(false)
  const [allRefine, setAllRefine] = useState([])
  const [allBrandRefine, setAllBrandRefine] = useState([])
  const [allWeightRefine, setAllWeightRefine] = useState([])



  function unCheckButtons() {
    let elements = document.getElementsByTagName("input");
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].type == "radio") {
        elements[i].checked = false;
      }
    }
    setToggle(false)
    setBrandToggle(false)
    setNewYarn([])
    setAllRefine([])
  }

  function displayRefined() {
    if (toggle && brandToggle && weightToggle) {
      return yarn.filter((y) => y.color.includes(allRefine.value && allBrandRefine.value && allWeightRefine.value))
    } else if (!toggle && brandToggle && weightToggle) {
      return yarn.filter((y) => y.brand.includes(allBrandRefine.value && allWeightRefine.value))
    } else if (!brandToggle && toggle && weightToggle) {
      return yarn.filter((y) => y.brand.includes(allRefine.value && allWeightRefine.value))
    } else if (!weightToggle && toggle && weightToggle) {
      return yarn.filter((y) => y.brand.includes(allBrandRefine.value && allRefine.value))
    } else if (!brandToggle && !toggle && weightToggle) {
      return yarn.filter((y) => y.brand.includes(allWeightRefine.value))
    } else if (!weightToggle && !brandToggle && toggle) {
      return yarn.filter((y) => y.brand.includes(allRefine.value))
    } else {
      return yarn.filter((y) => y.brand.includes(allBrandRefine.value))
    }
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
    if (event.target.checked && event.target.name === 'color') {
      setAllRefine(event.target)
    } else if (event.target.checked && event.target.name === 'brand') {
      setAllBrandRefine(event.target)
    } else if (event.target.checked && event.target.name === 'Yarn Weight') {
      setAllWeightRefine(event.target)
    }
  }

  return (
    <section className='yarn-container'>
      <section className='filter-container'>
        <h3 className='filter-title'>Refine By:</h3>
        <button onClick={() => unCheckButtons()}>Uncheck All</button>
        <button className='refine-button' onClick={() => setShowColor(!showColor)}>↓ Color</button>
        {showColor && <div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => {
              handleChecked(event)
              setToggle(true)
              setBrandToggle(false)
              setWeightToggle(false)
            }} value='Red' />
            <span className="dot-red"></span>
            <label htmlFor="red">Red</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => {
              handleChecked(event)
              setToggle(true)
              setBrandToggle(false)
              setWeightToggle(false)
            }} value='Green' />
            <span className="dot-green"></span>
            <label htmlFor="green">Green</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => {
              handleChecked(event)
              setToggle(true)
              setBrandToggle(false)
              setWeightToggle(false)
            }} value='Blue' />
            <span className="dot-blue"></span>
            <label htmlFor="blue">Blue</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => {
              handleChecked(event)
              setToggle(true)
              setBrandToggle(false)
              setWeightToggle(false)
            }} value='Yellow' />
            <span className="dot-yellow"></span>
            <label htmlFor="yellow">Yellow</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => {
              handleChecked(event)
              setToggle(true)
              setBrandToggle(false)
              setWeightToggle(false)
            }} value='Purple' />
            <span className="dot-purple"></span>
            <label htmlFor="purple">Purple</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => {
              handleChecked(event)
              setToggle(true)
              setBrandToggle(false)
              setWeightToggle(false)
            }} value='Orange' />
            <span className="dot-orange"></span>
            <label htmlFor="orange">Orange</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => {
              handleChecked(event)
              setToggle(true)
              setBrandToggle(false)
              setWeightToggle(false)
            }} value='White' />
            <span className="dot-white"></span>
            <label htmlFor="white">White</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='color' onChange={(event) => {
              handleChecked(event)
              setToggle(true)
              setBrandToggle(false)
              setWeightToggle(false)
            }} value='Black' />
            <span className="dot-black"></span>
            <label htmlFor="black">Black</label>
          </div>
        </div>}
        <button className='refine-button' onClick={() => setShowBrand(!showBrand)}>↓ Brand</button>
        {showBrand && <div>
          <div className='price-container'>
            <input type='radio' name='brand' onChange={(event) => {
              handleChecked(event)
              setBrandToggle(true)
              setToggle(false)
              setWeightToggle(false)
            }} value='Lion Brand' />
            <label htmlFor="lion">Lion Brand</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='brand' onChange={(event) => {
              handleChecked(event)
              setBrandToggle(true)
              setToggle(false)
              setWeightToggle(false)
            }} value='Bernat' />
            <label htmlFor="bernat">Bernat</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='brand' onChange={(event) => {
              handleChecked(event)
              setBrandToggle(true)
              setWeightToggle(false)
              setToggle(false)
            }} value='Lily Sugar n Cream' />
            <label htmlFor="lily">Lily Sugar'n Cream</label>
          </div>
          <div className='price-container'>
            <input type='radio' name='brand' onChange={(event) => {
              handleChecked(event)
              setBrandToggle(true)
              setWeightToggle(false)
              setToggle(false)
            }} value='Red Heart' />
            <label htmlFor="red-heart">Red Heart</label>
          </div>
        </div>}
        <button className='refine-button' onClick={() => setShowYarnWeight(!showYarnWeight)}>↓ Yarn Weight</button>
        {showYarnWeight && <div>
          <div className='price-container'>
            <input type='radio' id='lace' name='Yarn Weight' onChange={(event) => {
              handleChecked(event)
              setBrandToggle(false)
              setWeightToggle(true)
              setToggle(false)
            }} value='Lace' />
            <label htmlFor="lace">0 - Lace</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='super' name='Yarn Weight' onChange={(event) => {
              handleChecked(event)
              setBrandToggle(false)
              setWeightToggle(true)
              setToggle(false)
            }} value='Super Fine' />
            <label htmlFor="super">1 - Super Fine</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='fine' name='Yarn Weight' onChange={(event) => {
              handleChecked(event)
              setBrandToggle(false)
              setWeightToggle(true)
              setToggle(false)
            }} value='Fine' />
            <label htmlFor="fine">2 - Fine</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='light' name='Yarn Weight' onChange={(event) => {
              handleChecked(event)
              setBrandToggle(false)
              setWeightToggle(true)
              setToggle(false)
            }} value='Light' />
            <label htmlFor="light">3- Light</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='medium' name='Yarn Weight' onChange={(event) => {
              handleChecked(event)
              setBrandToggle(false)
              setWeightToggle(true)
              setToggle(false)
            }} value='Medium' />
            <label htmlFor="medium">4 - Medium</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='bulky' name='Yarn Weight' onChange={(event) => {
              handleChecked(event)
              setBrandToggle(false)
              setWeightToggle(true)
              setToggle(false)
            }} value='Bulky' />
            <label htmlFor="bulky">5 - Bulky</label>
          </div>
          <div className='price-container'>
            <input type='radio' id='super-bulky' name='Yarn Weight' onChange={(event) => {
              handleChecked(event)
              setBrandToggle(false)
              setWeightToggle(true)
              setToggle(false)
            }} value='Super-Bulky' />
            <label htmlFor="super-bulky">6 - Super Bulky</label>
          </div>
        </div>}
      </section>
      <section className='small-yarn-container'>
        <h1 className='page-title'>Yarn</h1>
        <p className='page-description'>Tailored especially for beginners eager to embark on their crafting journey. Our selection boasts user-friendly textures and shades, ideal for those new to knitting or crocheting. Dive in to discover beginner-friendly yarns that ensure your first projects are both enjoyable and successful.</p>
        <div className='refine-container'>
          {allRefine.length !== 0 && <p className='refine-container'>Refined by: <span id={allRefine.id} className='refine-values'>{allRefine.value}: {allRefine.name}</span>
            {allBrandRefine.length !== 0 && <span id={allBrandRefine.id} className='refine-values'>{allBrandRefine.value}: {allBrandRefine.name}</span>}
            {allWeightRefine.length !== 0 && <span id={allWeightRefine.id} className='refine-values'>{allWeightRefine.value}: {allWeightRefine.name}</span>}
          </p>}
        </div>
        {(newYarn.length === 0 && (!toggle && !brandToggle && !weightToggle)) && <p>Viewing all {yarn.length} product(s)</p>}
        {(newYarn.length !== 0) && <p>Viewing all {newYarn.length} product(s)</p>}
        {(newYarn.length === 0 && (toggle || brandToggle || weightToggle)) && <p>Viewing all {newYarn.length} product(s)</p>}
        <div>
          {yarn.length !== 0 && <SingleProduct weightToggle={weightToggle} brandToggle={brandToggle} newYarn={newYarn} toggle={toggle} products={yarn} />}
        </div>
      </section>
    </section>
  )
}

export default Yarn