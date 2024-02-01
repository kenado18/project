import React, { useState } from 'react'
import './Navbar.css'
import loogo from '../Assets/loogo.webp'
import icons from '../Assets/icons8-cart.gif'
const Navbar = () => {

    const [menu,setMenu] = useState("shop");

    return(
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={loogo} alt=''/>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("shop")}}><link to='/'>shop</link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("bath-soap")}}><link to='/bath-soap'>bath-soap</link>{menu==="bath-soap"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("candle-supplies")}}><link to='/candle-supplies'>candle-supplies</link>{menu==="candle-supplies"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("colorants")}}><link to='/colorants'>colorants</link>{menu==="colorants"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("deteragents")}}><link to='/deteragents'>deteragents</link>{menu==="deteragents"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login'>
                <link to='/login'><button>login</button></link>
                <link to='/cart'><img src={icons} alt=''/></link>
                <div className='nav-cart-count'>0</div>

            </div>

        </div>
    )
}

export default Navbar
