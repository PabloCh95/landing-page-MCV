import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FaTimes,FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons'

import {arrayMenuTop} from '../../routes/routes-menu-top.js';
import SocialLinks from '../SocialLinks/SocialLinks.js';

import './MenuTop.css'

export default function MenuTop() {
    const [showMenu, setShowMenu] = useState(false)

    return (
            <header className='menu-top'>
                <nav className="menu-top-wrapper">
                    <IconContext.Provider value={{style:{fontSize:"2em"}}}>
                    <Link to="/" className='menu-top-logo'>
                        <p>Home</p>
                    </Link>
                    <div className="menu-top-mobile-icon" onClick={()=>setShowMenu(!showMenu)} >
                        {showMenu ? <FaTimes color='#ffffff'/> : <FaBars color='#ffffff' />}
                    </div>
                    <ul className='menu-top-content' open={showMenu} style={{left:showMenu? "-40px" : "-115%"}}>
                    {
                        arrayMenuTop.map(item => {
                            
                            return(
                                <li key={item.id} onClick={()=>setShowMenu(false)}>
                                    <Link to={item.url} key={item.url}>
                                        <div >
                                            <p >{item.name}</p>
                                        </div>
                                    </Link>
                                </li>
                            );
                        })
                        
                       
                    }
                        <li>
                            <SocialLinks />
                        </li>
                    </ul>
                    </IconContext.Provider>
                </nav>
            </header>
    )
}
