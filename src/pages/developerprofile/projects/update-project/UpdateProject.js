import { Button, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import NavThree from '../../../../components/navthree/NavThree';
import DeveloperServices from '../../../../services/developer.services';

const UpdateProject = () => {
  const navigate=useNavigate();
  const [projectTitle,setProjectTitle]=useState('');
  const [startingYear,setStartingYear]=useState(0)
  const [endingYear,setEndingYear]=useState(0)
  const [technologiesUsed,setTechnologiesUsed]=useState("")
  const [url,setUrl]=useState("");

  const {id}=useParams();
  console.log("Here")
  console.log(id)
  async function add(event) {
    event.preventDefault()
try {
  const response = await DeveloperServices.updateProject(projectTitle,startingYear,endingYear,technologiesUsed,url);
  if (response.data.status === 'ok') {
    navigate('/developerprofile')
  }
  else
  {
    alert(response.data.error)
  }
} catch (err) {
  console.log (err);
}
}
  return (
    <div className="updateWorkExperience">
    <NavThree />
  <Paper style={{margin:"60px auto", padding:"20px 0", width:"50%"}}>
      <form onSubmit={add} className="form">
        <div className="container">
          <Typography className="projectTitle" variant="subtitle1">Title:</Typography>
          <TextField className="textfield" value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                type="text" 
      placeholder='ex. A Social Media Website'>
        </TextField>
        </div>
      
      <div className="container"><Typography className="projectTitle" variant="subtitle1">Starting Year:</Typography><TextField className="textfield" value={startingYear}
                onChange={(e) => setStartingYear(e.target.value)}
                type="number" 
      placeholder='ex. 2011'></TextField></div>


      <div className="container"><Typography className="projectTitle" variant="subtitle1">Ending Year:</Typography><TextField className="textfield" value={endingYear}
                onChange={(e) => setEndingYear(e.target.value)}
                type="number" 
      placeholder='2012'></TextField></div>


<div className="container"><Typography className="projectTitle" variant="subtitle1">Technologies Used:</Typography><TextField 
        className="textfield" value={technologiesUsed}
        onChange={(e) => setTechnologiesUsed(e.target.value)}
        type="text"
        placeholder='MERN Stack'></TextField></div>


        <div className="container"><Typography className="projectTitle" variant="subtitle1">Url:</Typography><TextField className="textfield" value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text" 
      placeholder='www.social-media-app.com'></TextField></div>





        <Button type="submit" style={{marginTop:"20px",marginBottom:"30px"}}variant="contained">Post Job</Button>
        </form>
  </Paper>
</div>
  )
}

export default UpdateProject