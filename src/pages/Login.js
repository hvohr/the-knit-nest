import { Link } from 'react-router-dom'

function Login() {
  return (
    <section className='login-container'>
      <div className='login-top'>
        <h1 className='login-welcome'>Welcome Back to The Knit Nest<img className='login-kitten' src={require('../components/images/cat (1).png')} /></h1>
      </div>
      <form>
        <div className='email-container'>
          <label>Email<span className='required'>*</span></label>
          <input type='email' name='login-email' className='login-email' />
        </div>
        <div className='password-container'>
          <label>Password<span className='required'>*</span></label>
          <input type='email' name='login-password' className='login-email' />
        </div>
        <div>
          <button className='login-submit'>Log in</button>
          <h2 className='login-create'>Not a member with us? <Link className='create-account-link' to='/createaccount'>Create an account here</Link></h2>
        </div>
      </form>
    </section>
  )
}

export default Login