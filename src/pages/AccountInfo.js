import { Link } from 'react-router-dom'

function AccountInfo() {
  
  return (
    <section>
      <h1>Welcome User!</h1>
      <h2><Link to='/login'>Login</Link> to view account information or <Link to='/createaccount'>create an account</Link> with us if you are new to the Knit Nest!</h2>
    </section>
  )
}

export default AccountInfo