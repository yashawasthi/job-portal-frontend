import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import NavTwo from '../../components/navtwo/NavTwo'
import AllPostedJobs from './allpostedjobs/AllPostedJobs';

const ForCompany = () => {
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser)
  return (
    <div>
      <NavTwo />
      <AllPostedJobs />
    </div>
  )
}

export default ForCompany