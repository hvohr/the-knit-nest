import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function AccountInfo(props) {
  const [currentUser, setCurrentUser] = useState('')

  function findUser() {
    let currentUserID = sessionStorage.getItem('currentUser')
    let allUsers = sessionStorage.getItem('allUsers')
    let newUsers = JSON.parse(allUsers)
    if (currentUserID) {
      let currentFind = newUsers.filter((user) => {
        return Number(user.userID) === Number(currentUserID)
      })
      setCurrentUser(currentFind)
    }
  }


  useEffect(() => {
    findUser()
  }, [currentUser])

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
        <h2>Password: {currentUser[0].password}</h2>
        <button onClick={() => {
          setCurrentUser('')
          props.setLoggedIn(false)
          sessionStorage.setItem('currentUser', '')
          sessionStorage.setItem('allUsers', '')
        }} className='login-submit'>Log out</button>
      </section>
    )
  }
}

export default AccountInfo