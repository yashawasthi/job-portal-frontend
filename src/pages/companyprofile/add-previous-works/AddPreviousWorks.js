import { Button, Paper, TextField} from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavTwo from '../../../components/navtwo/NavTwo';
import CompanyServices from '../../../services/company.services';
import "./AddPreviousWorks.css"

const AddPreviousWorks = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const userId=currentUser._id
  const [title, setTitle] = useState ('');
  const [description, setDescription] = useState ('');
  const [startingYear, setStartingYear] = useState ('');
  const [endingYear, setEndingYear] = useState ('');
  const [errorTitle, setErrorTitle] = useState (false);
  const [errorStartingYear, setErrorStartingYear] = useState (false);
  const [errorEndingYear, setErrorEndingYear] = useState (false);
  const [errorDescription, setErrorDescription] = useState (false);
  const navigate = useNavigate ();

  const savePreviousWork = async e => {
    e.preventDefault ();
    if (!title) {
      setErrorTitle (true);
    }
    if (!description) {
      setErrorDescription (true);
    }
    if (!startingYear) {
      setErrorStartingYear (true);
    }
    if (!endingYear) {
      setErrorEndingYear (true);
    }
    if (title && description && startingYear && endingYear) {
      try {
        const response = await CompanyServices.addPreviousWork(userId,title,description,startingYear,endingYear);
          navigate ('/companyprofile')
      } catch (err) {
        console.log (err);
      }
    }
  };

  return (
<div>
        <NavTwo />
       <div className='previous-works'>
        <form onSubmit={savePreviousWork}>
          <Paper style={{padding: '50px',borderRadius:"20px"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
            <h1>Please enter the information</h1>
            </div>
          <br />
            <TextField
              style={{width: '100%'}}
              value={title}
              onChange={e => setTitle (e.target.value)}
              type="text"
              placeholder="Will Smith "
              error={errorTitle}
            />
            <br /><br />
            <TextField
              style={{width: '100%'}}
              value={description}
              onChange={e => setDescription (e.target.value)}
              type="text"
              placeholder="https://www.example.com"
              error={errorDescription}
            />
            <br /><br />
            <TextField
              style={{width: '100%'}}
              value={startingYear}
              onChange={e => setStartingYear (e.target.value)}
              type="number"
              placeholder="2011"
              error={errorStartingYear}
            />
            <br /><br />
            <TextField
              style={{width: '100%'}}
              value={endingYear}
              onChange={e => setEndingYear (e.target.value)}
              type="number"
              placeholder="2014"
              error={errorEndingYear}
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

export default AddPreviousWorks