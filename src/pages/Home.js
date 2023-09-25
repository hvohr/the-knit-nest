import './pages.css'

function Home() {
  return (
    <section className='home-section'>
      <h1 className='home-greeting'>Welcome to the Knit Nest</h1>
      <img className='home-cat-image' src={require('../components/images/C8CA53A8-2415-440F-90C7-CFCEE5F54D0E_1_201_a.jpeg')} alt='black cat playing with a partial unstrung ball of yellow yarn'/>
    </section>
  )
}

export default Home