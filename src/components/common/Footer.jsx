import React from 'react'
import { FooterContainer } from './Footer.styled'



const Footer = () => {
  return (
    <FooterContainer>
      <div className='footer-img'>
        <img src='images/instagram.png' alt='f1' />
        <img src='images/facebook.png' alt='f1' />
        <img src='images/youtube.png' alt='f1' />
        <img src='images/blog.png' alt='f1' />
      </div>
      <div className='footer-logo'>
        <img src='images/logo.png' alt='logo'/>
      </div>
      <div className='footer-intro'>
        <sapn>
        대표자 ooo | 서울 중구 세종대로 110
        </sapn>
        <span>
        사업자등록번호:123-12-12345 | 이메일:abc@naver.com
        </span>
      </div>
      <div>
        <sapn>
        COPYRIGHT 2022
        </sapn>
      </div>
    </FooterContainer>
  )
}

export default Footer