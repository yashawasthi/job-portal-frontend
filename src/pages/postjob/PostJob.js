import { Button,Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavTwo from '../../components/navtwo/NavTwo';
import CompanyServices from '../../services/company.services';
import "./PostJob.css"

const PostJob = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const navigate=useNavigate();
  const [title,setTitle]=useState('');
  const status='active'
  const [location,setLocation]=useState('')
  const [jobDescription,setJobDescription]=useState('')
  const [timing,setTiming]=useState('')
  const [skills,setSkills]=useState('');
  const [expMin,setExpMin]=useState(undefined);
  const [expMax,setExpMax]=useState(undefined);
  const [salaryMin,setSalaryMin]=useState(undefined);
  const [salaryMax,setSalaryMax]=useState(undefined);
  const [day,setDay]=useState(undefined);



  async function postJob(event) {
		event.preventDefault()
    const id=currentUser._id
    try {
      const response = await CompanyServices.postJob( id,title,location,jobDescription,timing,status,skills,expMin,expMax,salaryMin,salaryMax,day);
      console.log(response)
      if (response.data.status === 'ok') {
        navigate('/forcompany')
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
    <div className="postjob">
      <NavTwo />
      <Paper style={{padding:"20px 0"}}>
          <form onSubmit={postJob} className="form">


            <div className="container">
              <Typography className="title" variant="subtitle1">Job Title:</Typography>
              <TextField className="textfield" value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text" 
          placeholder='ex. Full Stack Developer'>
            </TextField>
            </div>
          
          <div className="container"><Typography className="title" variant="subtitle1">Location:</Typography><TextField className="textfield" value={location}
					onChange={(e) => setLocation(e.target.value)}
					type="text" 
          placeholder='ex. Noida'></TextField></div>


          <div className="container"><Typography className="title" variant="subtitle1">Job Description:</Typography><TextField className="textfield" value={jobDescription}
					onChange={(e) => setJobDescription(e.target.value)}
					type="text" 
          placeholder='ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor ligula, maximus at urna eu, rutrum mollis lectus. Mauris laoreet turpis felis, quis efficitur turpis viverra eget. Nunc convallis enim enim, vel sagittis ante aliquam sagittis. Curabitur mauris justo, accumsan id odio ac, dictum dignissim ligula. Vivamus vitae ante elit. Etiam at orci lectus. Morbi nunc elit, mollis vitae bibendum eget, efficitur eu velit. Nunc rutrum magna vel aliquam sollicitudin. Nulla vulputate nisi eget dolor dictum vestibulum. Etiam non ultrices metus. Vestibulum viverra a diam vitae consectetur. Aliquam vitae ex et enim pellentesque ullamcorper.
          Duis sed feugiat purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet sollicitudin odio, et egestas lorem tincidunt pulvinar. Nullam mattis dolor diam, mollis finibus turpis fermentum vel. In vel diam at ipsum consequat hendrerit. Mauris posuere finibus nunc in tristique. Fusce vulputate ante nisi, vitae semper nunc finibus quis. Duis rhoncus lectus non sem fringilla, eget tempor libero accumsan.'></TextField></div>


            <div className="container"><Typography className="title" variant="subtitle1">Skills Required:</Typography><TextField className="textfield" value={skills}
					onChange={(e) => setSkills(e.target.value)}
					type="text" 
          placeholder='ex. React.JS, Node.JS '></TextField></div>



            <div className="container"><Typography className="title" variant="subtitle1">Minimum Experience Required:</Typography><TextField 
            className="textfield" value={expMin}
            onChange={(e) => setExpMin(e.target.value)}
            type="number"
            placeholder='ex. 2 (years)'></TextField></div>


            <div className="container"><Typography className="title" variant="subtitle1">Maximum Experience Required:</Typography><TextField 
            className="textfield" value={expMax}
            onChange={(e) => setExpMax(e.target.value)}
            type="number"
            placeholder='ex. 5 (years) '></TextField></div>



            <div className="container"><Typography className="title" variant="subtitle1">Minimum salary candidate can expect:</Typography><TextField 
            className="textfield" value={salaryMin}
            onChange={(e) => setSalaryMin(e.target.value)}
            type="number"
            placeholder='ex. 500000 (in Rupees) '></TextField></div>



            <div className="container"><Typography className="title" variant="subtitle1">Maximum salary candidate can expect:</Typography><TextField 
            className="textfield" value={salaryMax}
            onChange={(e) => setSalaryMax(e.target.value)}
            type="number"
            placeholder='ex. 1000000 (in Rupees)'></TextField></div>



            <div className="container"><Typography className="title" variant="subtitle1">Job Timings:</Typography><TextField className="textfield" value={timing}
					onChange={(e) => setTiming(e.target.value)}
					type="text" 
          placeholder='ex. Full Stack Developer'></TextField></div>
          
            <div className="container"><Typography className="title" variant="subtitle1">Maximum days till joining:</Typography><TextField 
            className="textfield" value={day}
            onChange={(e) => setDay(e.target.value)}
            type="number"placeholder='ex. immediately '></TextField></div>


            <Button type="submit" style={{marginTop:"20px",marginBottom:"30px"}}variant="contained">Post Job</Button>
            </form>
      </Paper>
    </div>
  )
}

export default PostJob