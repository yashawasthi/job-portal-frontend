import { Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavThree from '../../../components/navthree/NavThree';
import DeveloperServices from '../../../services/developer.services'
import "./AddProject.css"
const AddProject = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const userId=currentUser._id

    const navigate=useNavigate();
    const [title,setTitle]=useState('');
    const [startingYear,setStartingYear]=useState(0)
    const [endingYear,setEndingYear]=useState(0)
    const [technologiesUsed,setTechnologiesUsed]=useState("")
    const [url,setUrl]=useState("");
    const [projectDescription,setProjectDescription]=useState("");

  async function add(event) {
    event.preventDefault()
try {
  const response = await DeveloperServices.addProject(userId,title,startingYear,endingYear,technologiesUsed,url,projectDescription);
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
          <Typography className="title" variant="subtitle1">Title:</Typography>
          <TextField className="textfield" value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text" 
      placeholder='ex. A Social Media Website'>
        </TextField>
        </div>

        <div className="container"><Typography className="title" variant="subtitle1">Project Description</Typography><TextField 
        className="textfield" value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
        type="text"
        placeholder='I worked on a full stack project and deployed it'></TextField></div>
      
      <div className="container"><Typography className="title" variant="subtitle1">Starting Year:</Typography><TextField className="textfield" value={startingYear}
                onChange={(e) => setStartingYear(e.target.value)}
                type="number" 
      placeholder='ex. 2011'></TextField></div>


      <div className="container"><Typography className="title" variant="subtitle1">Ending Year:</Typography><TextField className="textfield" value={endingYear}
                onChange={(e) => setEndingYear(e.target.value)}
                type="number" 
      placeholder='2012'></TextField></div>


<div className="container"><Typography className="title" variant="subtitle1">Technologies Used:</Typography><TextField 
        className="textfield" value={technologiesUsed}
        onChange={(e) => setTechnologiesUsed(e.target.value)}
        type="text"
        placeholder='MERN Stack'></TextField></div>


        <div className="container"><Typography className="title" variant="subtitle1">Url:</Typography><TextField className="textfield" value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text" 
      placeholder='www.social-media-app.com'></TextField></div>





        <Button type="submit" style={{marginTop:"20px",marginBottom:"30px"}}variant="contained">Post Project</Button>
        </form>
  </Paper>
</div>
  )
}

export default AddProject