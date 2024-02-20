import React, { useEffect, useState } from 'react'
import NavOne from '../../components/navone/NavOne';
import {Paper,Button} from "@mui/material"
import DeveloperRegister from '../developerregister/DeveloperRegister';
import CompanyRegister from '../companyregister/CompanyRegister';
import "./Register.css"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const [isDeveloper, setIsDeveloper] = useState(undefined)
  const currentUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();

	const [check,setCheck]=useState(0);
	function devClicked()
	{
		setIsDeveloper(true);
		setCheck(1);
	}
	function compClicked()
	{
		setIsDeveloper(false);
		setCheck(1);
	}
	useEffect(()=>{
		if(currentUser)
		{
		  navigate("/")
		}
	  },[])
  return (
<div>
			<NavOne />
			<div className='register'>
			<Paper style={{padding:"40px",borderRadius:"20px"}}>
				<div style={{display:"flex",justifyContent:"center"}}>
					<h1>Register</h1>
				</div>
				<div>
				{check===0?
				<div>
				<Button onClick={devClicked} style={{margin:"20px", padding:"20px", fontSize:"25px"}} variant="outlined">I am a developer</Button>
				<Button onClick={compClicked} style={{margin:"20px", padding:"20px", fontSize:"25px"}} variant="outlined">I am a company</Button>
				</div>
				:<div>
					{isDeveloper===true?<DeveloperRegister />:<CompanyRegister />}
				</div>
				}
				</div>
				
			</Paper>
			
		</div>
		</div>
  )
}

export default Register