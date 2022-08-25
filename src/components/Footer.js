import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
        <div className='footer-container'>
            <div className='footer-legal'>
                <p>Copyright © 2022 Coinflex All rights reserved</p>
            </div>
            <h3><img src='/img/logo.png' alt='logo' width={30} />CoinFlex</h3>
            <div className='social-container'>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-facebook-f"></i>
            </div>
        </div>
    </section>
  )
}

export default Footer;