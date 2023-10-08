import { Link } from 'react-router-dom'

function AccountInfo(props) {
  if (!props.currentUser.length) {
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
        <h1>Welcome {props.currentUser[0].name}!</h1>
        <img className='login-kitten' src={require('../components/images/cat-with-ball-of-yarn-by-Vexels.png')} />
        <h2>Email: {props.currentUser[0].email}</h2>
        <h2>Password: {props.currentUser[0].password}</h2>
        <button onClick= {() => {
          props.setCurrentUser('')
          sessionStorage.setItem('currentUser', '')
        }}className='login-submit'>Log out</button>
      </section>
    )
  }
}

export default AccountInfo