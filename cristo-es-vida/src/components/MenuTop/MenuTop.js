import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import {FaTimes,FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons'

import {arrayMenuTop} from '../../routes/routes-menu-top.js';
import SocialLinks from '../SocialLinks/SocialLinks.js';
import Logotipo from '../../assets/img/png/Logo-CEV.png';

//redux
import {useDispatch} from 'react-redux';
import {clickOnMenu} from '../../store/showMenuSlice';

import './MenuTop.css'

export default function MenuTop() {
    const [dataMenu,setDataMenu] = useState(false);
    const dispatch = useDispatch();
    const onClickMenu = () => {
        setDataMenu(!dataMenu);
        dataMenu?
        (setTimeout(() => {
            dispatch(clickOnMenu(!dataMenu));
        }, 0)): (setTimeout(() => {
            dispatch(clickOnMenu(!dataMenu))
        }, 500));
            
    }
    return (
            <header className='menu-top'>
                <nav className="menu-top-wrapper">
                    <IconContext.Provider value={{style:{fontSize:"2em"}}}>
                    <Link to="/" className='menu-top-logo'>
                        <img src={Logotipo}/>
                    </Link>
                    <div className="menu-top-mobile-icon" onClick={onClickMenu} >
                        {dataMenu ? <FaTimes color='#ffffff'/> : <FaBars color='#ffffff' />}
                    </div>
                    <ul className='menu-top-content' style={{left:dataMenu? "-40px" : "-115%"}}>
                    {
                        arrayMenuTop.map(item => {
                            
                            return(
                                <li key={item.id} onClick={onClickMenu}>
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
