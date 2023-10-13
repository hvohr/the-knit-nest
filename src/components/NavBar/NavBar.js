import { NavLink } from "react-router-dom";
import './NavBar.css'
import { useState } from 'react'

function NavBar() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <section>
      <p className='discount'>Take 20% off your entire cart! Use Code: Fall23 <img className='maple-discount' src={require('../images/maple-leaf.png')} /></p>
      <nav>
        <section className='icon-container'>
          <NavLink to='/'><img className='site-logo' alt='cat with a monocal and a ball of yarn next to the title of the website' src={require('../images/Salford sheep (1).jpeg')}></img></NavLink>
        </section>
        <section className='topics-container'>
          <NavLink className='nav-topics' to='yarn'>Yarn</NavLink>
          <NavLink className='nav-topics' to='tools'>Craft Tools</NavLink>
          <NavLink className='nav-topics' to='books'>Books</NavLink>
        </section>
        <section className='topics-container-phone'>
          <div>
            <button onClick={() => setShowMenu(!showMenu)} className='phone-menu'><img className='menu-image' src={require('../images/menu (1).png')} alt='hamburder menu logo' /></button>
          </div>
          {showMenu && <div>
            <NavLink className='nav-topics' to='yarn'>Yarn</NavLink>
            <NavLink className='nav-topics' to='tools'>Craft Tools</NavLink>
            <NavLink className='nav-topics' to='books'>Books</NavLink></div>}
        </section>
        <section className='user-container'>
          <NavLink to='search' className='search-icon'><img className='nav-icon' src={require('../images/magnifying-glass.png')} alt='magnifying glasses' /></NavLink>
          <NavLink to='account'><img className='nav-icon' alt='filled in person icon' src={require('../images/user (2).png')} /></NavLink>
          <NavLink to='cart'><img className='nav-icon' src={require('../images/shopping-cart (2).png')} alt='shopping cart filled in black' /></NavLink>
        </section>
      </nav>
    </section>
  )
}

export default NavBar