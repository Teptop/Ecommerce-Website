import React from 'react'
import './MenuBtn.css'

const MenuBtn = () => {
  return (
    <div className='menu-btn-list'>
      <div className="menu-btn-container">
        <a href="/">Shop</a>
        <a href="/mens">Men</a>
        <a href="/womens">Women</a>
        <a href="/kids">Kids</a>
      </div>
    </div>
  )
}

export default MenuBtn
