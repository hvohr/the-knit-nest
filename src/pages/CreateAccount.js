import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function CreateAccount(props) {
  const [name1, setName] = useState('')
  const [email1, setEmail] = useState('')
  const [password1, setPassword] = useState('')
  const [prevAccount, setPrevAccount] = useState(false)
  const [alert, setAlert] = useState(false)
  const [newUser, setNewUser] = useState(false)
  const [currentUser, setCurrentUser] = useState('')

  function checkDuplicateAccount(event) {
    props.allUsers.map((user) => {
      if (user.email === email1) {
        setPrevAccount(true)
        setEmail('')
        setPassword('')
        setName('')
      } else {
        newUserData(event)
      }
    })
  }

  function handleEmpty() {
    setAlert(true)
  }

  function checkFormCompletion() {
    if (email1 === '' || name1 === '' || password1 === '') {
      return false
    } else {
      return true
    }
  }

  const newUserData = (event) => {
    event.preventDefault();
    const userInfo = {
      userID: Date.now() + "1",
      name: name1,
      email: email1,
      password: password1,
      cart: []
    }
    sessionStorage.setItem('currentUser', userInfo.userID)
    setCurrentUser(userInfo)
    props.submitUser(userInfo)
    setPrevAccount(false)
    setEmail('')
    setPassword('')
    setName('')
  }

  return (
    <section className='login-container'>
      <div className='login-top'>
        <h1 className='login-welcome'>Welcome to The Knit Nest<img className='login-kitten' alt='small cute kitten' src={require('../components/images/yarn-ball.png')} /></h1>
      </div>
      {!newUser && <form>
        {prevAccount && <p className='login-suggest'>Email already exists, <Link className='login-link' to='/login'>login </Link>instead?</p>}
        <div className='email-container'>
          <label>Name<span className='required'>*</span></label>
          <input type='email' value={name1} onChange={(event) => {
            if (event.target.value !== '') {
              setName(event.target.value)
            }
          }} name='login-email' className='login-email' />
        </div>
        <div className='email-container'>
          <label>Email<span className='required'>*</span></label>
          <input type='email' value={email1} name='login-password' onChange={(event) => {
            if (event.target.value !== '') {
              setEmail(event.target.value)
            }
          }} className='login-email' />
        </div>
        <div className='email-container'>
          <label>Password<span className='required'>*</span></label>
          <input type='password' value={password1} name='login-password' onChange={(event) => {
            if (event.target.value !== '') {
              setPassword(event.target.value)
            }
          }} className='login-email' />
        </div>
        <div>
          {alert && <p className='empty-suggest'>* Please fill out required inputs *</p>}
          <button onClick={(event) => {
            if (checkFormCompletion()) {
              setAlert(false)
              setNewUser(true)
              checkDuplicateAccount(event)
              event.preventDefault();
              sessionStorage.setItem('loggedIn', true)
            } else {
              event.preventDefault();
              handleEmpty()
            }
          }} className='login-submit'>Create Account</button>
        </div>
      </form>}
     {newUser && <section>
        <h1>You can successfully created an account! Welcome {currentUser.name}!</h1>
        <Link to='/' className='return-button'>Return Home</Link>
      </section>}
    </section>
  )
}

export default CreateAccount