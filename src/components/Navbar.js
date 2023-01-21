import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav>
      <div className="logo-container">
        <img src="https://www.transparentpng.com/download/s/V5tfVg-file-latin-letter-small-capital-svg-wikimedia-commons.png" style={{filter:'invert(1)'}} alt="logo" />
      </div>
      <div className="controls-container">
        <div className="icon" onClick={()=>{navigate('/ticket')}}>＋</div>
        <div className="icon" onClick={()=>{navigate('/')}}>≪</div>
      </div>
    </nav>
  )
}

export default Navbar