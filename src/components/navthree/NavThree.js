import React from 'react'
import { Link } from 'react-router-dom'
import MenuContainerForDeveloper from '../menucontainerfordeveloper/MenuContainerForDeveloper'
import "./NavThree.css"
const NavThree = () => {
  return (
    <div className='main'>
        <div className='nav-container'>
        <div className='link left'>
            <Link to="/fordeveloper">DevQuotient</Link>
        </div>
        <div className='link right'>
            <Link to="/" className='item'>Jobs</Link>
            <Link to="/appliedJobs" className='item'>Applied Jobs</Link>
        </div>
        </div>
        <div>
        <MenuContainerForDeveloper />
        </div>
    </div>
  )
}

export default NavThree