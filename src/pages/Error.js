import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className='error-container'>
      <Link className='error-home' to='/'>Go Home</Link>
      <img className='error-cat' alt='404 error cat in space' src={require('../components/images/221073-P1B64V-717.png')}/>
    </section>
  )
}

export default Error