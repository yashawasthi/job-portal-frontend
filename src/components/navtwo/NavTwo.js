import React from 'react'
import { Link } from 'react-router-dom'
import MenuContainerForCompany from '../menucontainerforcompany/MenuContainerForCompany'
import "./NavTwo.css"
const NavTwo = () => {
  return (
    <div className='main'>
        <div className='nav-container'>
        <div className='link left'>
            <Link to="/">DevQuotient</Link>
        </div>
        <div className='link right'>
            <Link to="/" className='item'>Jobs</Link>
            <Link to="/postjob" className='item'>Post Job</Link>
        </div>
        </div>
        <div>
        <MenuContainerForCompany />
        </div>
    </div>
  )
}

export default NavTwo