import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [currentUser, setCurrentUser] = useState('')
  const [noPrevUser, setNoPrevUser] = useState(false)

  function userList() {
    let find1 = props.allUsers.find((user) => user.email === email)
    if (find1) {
      props.setCurrentUser(find1)
      setCurrentUser(find1)
      setNoPrevUser(false)
      sessionStorage.setItem('currentUser', find1.userID)
      props.setLoggedIn(true)
    } else {
      setNoPrevUser(true)
    }
  }

  return (
    <section className='login-container'>
      <div className='login-top'>
        <h1 className='login-welcome'>Welcome Back to The Knit Nest<img className='login-kitten' src={require('../components/images/cat (1).png')} /></h1>
      </div>
     {!props.loggedIn && <form>
        <div className='email-container'>
          <label>Email<span className='required'>*</span></label>
          <input type='email' onChange={(event) => setEmail(event.target.value)} name='login-email' className='login-email' />
        </div>
        <div className='password-container'>
          <label>Password<span className='required'>*</span></label>
          <input type='password' onChange={(event) => setPassword(event.target.value)} name='login-password' className='login-email' />
        </div>
        <div>
          <button onClick={(event) => {
            event.preventDefault()
            userList()
          }
          } className='login-submit'>Log in</button>
          {noPrevUser && <p>Not a valid account in our system!</p>}
          <h2 className='login-create'>Not a member with us? <Link className='create-account-link' to='/createaccount'>Create an account here</Link></h2>
        </div>
      </form>}
      {props.loggedIn && <section>
        <h1>You can successfully logged into your account! Welcome {currentUser.name}!</h1>
        <Link to='/' className='login-link'>Return Home</Link>
      </section>}
    </section>
  )
}

export default Login