
function CreateAccount() {
  return (
    <section className='login-container'>
      <div className='login-top'>
        <h1 className='login-welcome'>Welcome to The Knit Nest<img className='login-kitten' src={require('../components/images/yarn-ball.png')} /></h1>
      </div>
      <form>
      <div className='email-container'>
          <label>Name<span className='required'>*</span></label>
          <input type='email' name='login-email' className='login-email' />
        </div>
        <div className='email-container'>
          <label>Email<span className='required'>*</span></label>
          <input type='email' name='login-password' className='login-email' />
        </div>
        <div className='email-container'>
          <label>Password<span className='required'>*</span></label>
          <input type='email' name='login-password' className='login-email' />
        </div>
        <div>
          <button className='login-submit'>Create Account</button>
        </div>
      </form>
    </section>
  )
}

export default CreateAccount