import { Button, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavThree from '../../../components/navthree/NavThree'
import CompanyServices from '../../../services/company.services';
import "./AddAboutCompany.css"
const AddAboutCompany = () => {
  
    const [aboutCompany, setAboutCompany] = useState ('');

  
    const [errorrAboutCompany, setErrorAboutCompany] = useState (false);

    const navigate = useNavigate ();

    async function getUserDetails() {
      try {
          const response = await CompanyServices.getPostedJobs();
          console.log(response)
          if (response) {

            if(response[0].aboutCompany)
            {
              setAboutCompany(response[0].aboutCompany)
            }
          }
          else
          {
              alert(response.data.error)
          }
        } catch (err) {
          console.log (err);
        }  
    }
    

    useEffect(() => {
      getUserDetails()
  }, [])




    const saveUsersAboutCompany = async e => {
      e.preventDefault ();
      if (!aboutCompany) {
        setErrorAboutCompany (true);
      }
      if (aboutCompany) {
        try {
          const response = await CompanyServices.setAboutCompany(aboutCompany);
          console.log (response);
          if (response.data.status === 'ok') {
            navigate ('/companyprofile')
          }
        } catch (err) {
          console.log (err);
        }
      }
    };

  return (
    <div>
        <NavThree />
       <div className='aboutCompany'>
        <form onSubmit={saveUsersAboutCompany}>
          <Paper style={{padding: '50px',borderRadius:"20px"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
            <h1>Please Enter the information about your Company</h1>
            </div>
          <br />
            <TextField
              style={{width: '100%'}}
              value={aboutCompany}
              onChange={e => setAboutCompany (e.target.value)}
              type="text"
              multiline
              rows={4}
              placeholder="You can write about your Company and the core values it follows"
              error={errorrAboutCompany}
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

export default AddAboutCompany