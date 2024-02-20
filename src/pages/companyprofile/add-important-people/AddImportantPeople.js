import { Button, Paper, TextField} from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavTwo from '../../../components/navtwo/NavTwo';
import CompanyServices from '../../../services/company.services';
import "./AddImportantPeople.css"
const AddImportantPeople = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const userId=currentUser._id
  const [name, setName] = useState ('');
  const [imgUrl, setImgUrl] = useState ('');
  const [errorName, setErrorName] = useState (false);
  const [errorImgUrl, setErrorImgUrl] = useState (false);
  const navigate = useNavigate ();

  const saveImportantPeople = async e => {
    e.preventDefault ();
    if (!name) {
      setErrorName (true);
    }
    if (!imgUrl) {
      setErrorImgUrl (true);
    }
    if (name!=="" && imgUrl!=="") {
      try {
        const response = await CompanyServices.setImportantPeople(userId,name,imgUrl);
          navigate ('/companyprofile')

      } catch (err) {
        console.log (err);
      }
    }
  };

  return (
<div>
        <NavTwo />
       <div className='important-people'>
        <form onSubmit={saveImportantPeople}>
          <Paper style={{padding: '50px',borderRadius:"20px"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
            <h1>Please enter the information</h1>
            </div>
          <br />
            <TextField
              style={{width: '100%'}}
              value={name}
              onChange={e => setName (e.target.value)}
              type="text"
              placeholder="Will Smith "
              error={errorName}
            />
            <br /><br />
            <TextField
              style={{width: '100%'}}
              value={imgUrl}
              onChange={e => setImgUrl (e.target.value)}
              type="text"
              placeholder="https://www.example.com"
              error={errorImgUrl}
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

export default AddImportantPeople