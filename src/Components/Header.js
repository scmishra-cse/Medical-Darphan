import React from 'react'
import CoinsSvg from '../Icons/DummyIcon'


function Header() {
  return (
    <>
    <div className="header1"> 

    <div className="header2">
    <div className='paddingX'><CoinsSvg fill='white'/></div>
    <div><strong>Medical Darphan</strong></div>
    </div>
    
    <div className="header2">
    <div className='paddingX'>Home</div>
    <div className='paddingX'>Products</div>
    <div className='paddingX'>Distributors</div>
    <div className='paddingX'>Manufactureres</div>
    <div className='paddingX'>About Us</div>
    <div className='paddingX'>Blog</div>
    </div>
    
    <div className="header2">
    <div>Login</div>
    <div className='paddingX'><CoinsSvg fill='white'/></div>
    </div>
    </div> 
     </>
  )
}

export default Header