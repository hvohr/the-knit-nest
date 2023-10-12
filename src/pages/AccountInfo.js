import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getUsers } from '../components/apiCalls'


function AccountInfo() {
  const [currentUser, setCurrentUser] = useState('')
  const [users, setUsers] = useState([])
  const [password, setPassword] = useState(false)

  function findUser() {
    let currentUserID = sessionStorage.getItem('currentUser')
    if (currentUserID && users.length) {
      let currentFind = users.filter((user) => {
        return Number(user.userID) === Number(currentUserID)
      })
      setCurrentUser(currentFind)
    }
  }

  useEffect(() => {
    getUsers().then(
      data => {
        setUsers(data.users)
      })
  }, [])


  useEffect(() => {
    findUser()
  }, [users])

  if (!currentUser) {
    return (
      <section className='account-info-container'>
        <h1>Welcome User!</h1>
        <img className='login-kitten' src={require('../components/images/cat-with-ball-of-yarn-by-Vexels.png')} />
        <h2><Link className='login-link' to='/login'>Login</Link> to view account information or <Link className='create-account-link' to='/createaccount'>create an account</Link> with us if you are new to the Knit Nest!</h2>
      </section>
    )
  } else {
    return (
      <section className='account-info-container'>
        <h1>Welcome {currentUser[0].name}!</h1>
        <img className='login-kitten' src={require('../components/images/cat-with-ball-of-yarn-by-Vexels.png')} />
        <h2>Email: {currentUser[0].email}</h2>
        <div className='password-container2'>
          <h1 className='password'>Password: </h1>
          {!password && <h1 className='hidden'>XXXXX</h1>}
          {password && <h2 className='password'>{currentUser[0].password}</h2>}
          <button onClick={() => setPassword(!password)}className='show-button'>Show/Hide</button>
        </div><button onClick={() => {
          setCurrentUser('')
          sessionStorage.setItem('loggedIn', "false")
          sessionStorage.setItem('currentUser', '')
        }} className='login-submit'>Log out</button>
      </section >
    )
  }
}

export default AccountInfo