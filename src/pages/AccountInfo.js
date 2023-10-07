import { Link } from 'react-router-dom'

function AccountInfo() {
  return (
    <section className='account-info-container'>
      <h1>Welcome User!</h1>
      <img className='login-kitten' src={require('../components/images/cat-with-ball-of-yarn-by-Vexels.png')}/>
      <h2><Link className='login-link' to='/login'>Login</Link> to view account information or <Link className='create-account-link' to='/createaccount'>create an account</Link> with us if you are new to the Knit Nest!</h2>
    </section>
  )
}

export default AccountInfo