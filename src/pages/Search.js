import { useEffect, useState } from 'react'
import CartItem from '../components/CartItem/CartItem'

function Search() {
  return (
    <section className='search-container'>
      <h1 className='search-title'>Search KnitNest Products<img className='search-cat' src={require('../components/images/silhouette_of_cat_with_ball_of_yarn_vector_by_froggyartdesigns_dahgamk-fullview.png')} /></h1>
      <div className='search-bar-container'>
        <input className='search-bar' type='search' value='Search...' />
        <button className='find-button'>Find Item</button>
      </div>
    </section>
  )
}

export default Search