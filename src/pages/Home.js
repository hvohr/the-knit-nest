import './pages.css'
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className='home-section'>
      <h1 className='home-greeting'>Welcome to the Knit Nest</h1>
      <img className='home-cat-image' src={require('../components/images/C8CA53A8-2415-440F-90C7-CFCEE5F54D0E_1_201_a.jpeg')} alt='black cat playing with a partial unstrung ball of yellow yarn' />
      <section className='home-ideas'>
        <div className='idea-container'>
          <Link to='/yarn'><img className='lion-brand-link' src={require('../components/images/maranda-vandergriff-o-d37kiKqqc-unsplash.jpg')}/><h3 className='ideas-title'>Shop Lion Brand Yarn</h3></Link>
        </div>
        <div className='idea-container'>
          <Link to='/books'><img className='crochet-book-link' src={require('../components/images/ksenia-makagonova-LTxvq0tnOOk-unsplash.jpg')}/><h3 className='ideas-title'>Shop Crochet Books</h3></Link>
        </div>
        <div className='idea-container'>
          <Link to='/crafttools'><img className='knitting-needle-link' src={require('../components/images/nik-91UEmzLi-_Y-unsplash.jpg')}/><h3 className='ideas-title'>Shop Knitting Needles</h3></Link>
        </div>
      </section>
    </section>
  )
}

export default Home