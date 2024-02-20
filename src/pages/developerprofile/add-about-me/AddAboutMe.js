import { Button, Paper, TextField } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavThree from '../../../components/navthree/NavThree'
import DeveloperServices from '../../../services/developer.services'
import "./AddAboutMe.css"
const AddAboutMe = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const userId=currentUser._id
    const [aboutMe, setAboutMe] = useState ('');

  
    const [errorrAboutMe, setErrorAboutMe] = useState (false);

    const navigate = useNavigate ();
  
    const saveUsersAboutMe = async e => {
      e.preventDefault ();
      if (!aboutMe) {
        setErrorAboutMe (true);
      }
      if (aboutMe) {
        try {
          const response = await DeveloperServices.setAbout(aboutMe,userId);
          console.log (response);
            navigate ('/developerprofile')
        } catch (err) {
          console.log (err);
        }
      }
    };

  return (
    <div>
        <NavThree />
       <div className='aboutme'>
        <form onSubmit={saveUsersAboutMe}>
          <Paper style={{padding: '50px',borderRadius:"20px"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
            <h1>Please Enter the information about you</h1>
            </div>
          <br />
            <TextField
              style={{width: '100%'}}
              value={aboutMe}
              onChange={e => setAboutMe (e.target.value)}
              type="text"
              multiline
              rows={4}
              placeholder="You can write about yourself and about your skills and strong areas"
              error={errorrAboutMe}
            />
            <br /><br />
            <div style={{display:"flex",justifyContent:"center"}}>
            <Button
              variant="outlined"
              sx={{width:"60%",padding:"10px",fontSize:"20px"}}
              type="submit"
            >
              Submit
            </Button>
            </div>

          </Paper>
        </form>
      </div>
    </div>
  )
}

export default AddAboutMe