
import './SearchBar.css'

import React from 'react'
import 'material-icons/iconfont/material-icons.css'


export default function SearchBar() {
  return (
    <div className='searchbar-container'>

      <span class="material-icons">search</span>
      <div className='search-box'>
        <input type="text" placeholder='TypeHere'/>
        <button>Search</button>
      </div>

    </div>
  )
}
