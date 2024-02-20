import React from 'react'
import { Link } from 'react-router-dom'
import "./NavOne.css"
const NavOne = () => {
  return (
    <div className='main'>
        <div className='link left'>
            <Link to="/">DevQuotient</Link>
        </div>
        <div className='link right'>
            <Link to="/resume-builder" className="link-item">Resume Builder</Link>
            <Link to="/register" className="link-item">Register</Link>
            <Link className="link-item" to="/login">Login</Link>
        </div>
    </div>
  )
}

export default NavOne