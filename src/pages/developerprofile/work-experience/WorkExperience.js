import { Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavThree from '../../../components/navthree/NavThree';
import DeveloperServices from '../../../services/developer.services'
import "./WorkExperience.css"
const WorkExperience = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const userId=currentUser._id

    const navigate=useNavigate();
    const [companyName,setCompanyName]=useState('');
    const [startingYear,setStartingYear]=useState(0)
    const [endingYear,setEndingYear]=useState(0)
    const [jobDescription,setJobDescription]=useState("")
    const [title,setTitle]=useState("");
  async function add(event) {
    event.preventDefault()
try {
  await DeveloperServices.addWorkExperience(userId,companyName,startingYear,endingYear,jobDescription,title);
    navigate('/developerprofile')
} catch (err) {
  console.log (err);
}


}
  return (
    <div className="addWorkExperience">
        <NavThree />
      <Paper style={{margin:"60px auto", padding:"20px 0", width:"50%"}}>
          <form onSubmit={add} className="form">
            <div className="container">
              <Typography className="title" variant="subtitle1">Company Name:</Typography>
              <TextField className="textfield" value={companyName}
					onChange={(e) => setCompanyName(e.target.value)}
					type="text" 
          placeholder='ex. Apple.Inc'>
            </TextField>
            </div>
          
          <div className="container"><Typography className="title" variant="subtitle1">Starting Year:</Typography><TextField className="textfield" value={startingYear}
					onChange={(e) => setStartingYear(e.target.value)}
					type="number" 
          placeholder='ex. 2011'></TextField></div>


          <div className="container"><Typography className="title" variant="subtitle1">Ending Year:</Typography><TextField className="textfield" value={endingYear}
					onChange={(e) => setEndingYear(e.target.value)}
					type="number" 
          placeholder='2019'></TextField></div>


            <div className="container"><Typography className="title" variant="subtitle1">Title</Typography><TextField className="textfield" value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text" 
          placeholder='Full Stack Developer'></TextField></div>



            <div className="container"><Typography className="title" variant="subtitle1">Job Description:</Typography><TextField 
            className="textfield" value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            type="text"
            placeholder='My Job was to make Full Stack websotes for the clients'></TextField></div>


            <Button type="submit" style={{marginTop:"20px",marginBottom:"30px"}}variant="contained">Post Job</Button>
            </form>
      </Paper>
    </div>
  )
}

export default WorkExperience