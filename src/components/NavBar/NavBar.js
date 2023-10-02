import { NavLink } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <section>
      <p className='discount'>Take 20% off all Lion Brand Yarn! Use Code: Fall23</p>
      <nav>
        <section className='icon-container'>
          <NavLink to='/'><img className='site-logo' src={require('../images/Salford sheep (1).jpeg')}></img></NavLink>
        </section>
        <section className='topics-container'>
          <NavLink className='nav-topics' to='allproducts'>All Products</NavLink>
          <NavLink className='nav-topics' to='yarn'>Yarn</NavLink>
          <NavLink className='nav-topics' to='crafttools'>Craft Tools</NavLink>
          <NavLink className='nav-topics' to='books'>Books</NavLink>
        </section>
        <section className='user-container'>
          <button className='search-icon'><img className='nav-icon' src={require('../images/loupe.png')} /></button>
          <NavLink to='login'><img className='nav-icon' src={require('../images/user (1).png')} /></NavLink>
          <NavLink to='cart'><img className='nav-icon' src={require('../images/shopping-cart.png')} /></NavLink>
        </section>
      </nav>
    </section>
  )
}

export default NavBar