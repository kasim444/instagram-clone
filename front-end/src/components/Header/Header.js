import React from 'react'
import './header.css'
import LogoSrc from '../../assets/images/instagram_logo.png'
import AvatarSrc from '../../assets/images/profile_avatar.jpg'

function Header() {
  return (
    <div className='header'>
      <div className='header__inner'>
        <img className='header__logo' src={LogoSrc} alt='Instagram Logo' />
        <img
          className='header__profileAvatar'
          src={AvatarSrc}
          alt='Profile Avatar'
        />
      </div>
    </div>
  )
}

export default Header
