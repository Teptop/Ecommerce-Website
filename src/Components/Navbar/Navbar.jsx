import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faClose } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({handelToggleActive,menuActive}) => {


    const [menu,setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <Link style={{textDecoration:'none'}} to='/'><div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div></Link>
      <ul className="nav-menu">
        <li onClick={()=>setMenu('shop')}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu('mens')}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==='mens'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu('womens')}><Link style={{textDecoration:'none'}} to='womens'>Women</Link>{menu==='womens'?<hr/>:<></>}</li>
        <li onClick={()=>setMenu('kids')}><Link style={{textDecoration:'none'}} to='kids'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img className='sala' src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <div onClick={()=>handelToggleActive()} className="menu-btn"><FontAwesomeIcon icon={menuActive? faClose:faBars} /></div>
      </div>

      
    </div>
  )
}

export default Navbar
