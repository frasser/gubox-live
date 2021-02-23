import React from 'react'

import Logo from '../assets/statics/logo-platzi-video-BW2.png'
import UserIcon from '../assets/statics/user-icon.png';
import '../styles/components/Header.css'

function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="Gubox Live" className="header__img"/>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={UserIcon} alt=""/>
                    <p>Perfil</p>
                </div>
            </div>

        </header>
    )
}

export default Header
