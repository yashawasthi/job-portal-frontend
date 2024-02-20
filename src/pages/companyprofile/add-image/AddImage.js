import { Button, Paper, TextField} from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavTwo from '../../../components/navtwo/NavTwo';
import CompanyServices from '../../../services/company.services';
import "./AddImage.css"
const AddImage = () => {
  const [imgUrl, setImgUrl] = useState ('');
  const [errorImgUrl, setErrorImgUrl] = useState (false);
  const navigate = useNavigate ();

  const saveImage = async e => {
    e.preventDefault ();

    if (!imgUrl) {
      setErrorImgUrl (true);
    }
    if (imgUrl!=="") {
      try {
        const response = await CompanyServices.addImageToGallery(imgUrl);
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
        <NavTwo />
       <div className='important-people'>
        <form onSubmit={saveImage}>
          <Paper style={{padding: '50px',borderRadius:"20px"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
            <h1>Please enter the information</h1>
            </div>
          <br />
            <TextField
              style={{width: '100%'}}
              value={imgUrl}
              onChange={e => setImgUrl (e.target.value)}
              type="text"
              multiline
              rows={4}
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

export default AddImage