import React from 'react'
import { HeaderContainer } from './Header.styled'

const Header = () => {
  return (
    <HeaderContainer>
      <div className='header'>
        <img className='header-logo' src='images/logo.png' alt='logo'/>
        <div className='header-nav'>
          <span>레시피</span>
          <span>커뮤니티</span>
        </div>
        <span>로그인</span>
      </div>
    </HeaderContainer>
  )
}

export default Header