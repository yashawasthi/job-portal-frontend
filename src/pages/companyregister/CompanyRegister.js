import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthServices from '../../services/auth.services';
import "./CompanyRegister.css"
const CompanyRegister = () => {
    const navigate = useNavigate()
	const currentUser = useSelector((state) => state.currentUser);
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [isDeveloper, setIsDeveloper] = useState(false)
	const [password, setPassword] = useState('')
	const [aboutCompany,setAboutCompany]=useState('');
	const [errorAboutCompany, setErrorAboutCompany] = useState(false)
    const [errorName, setErrorName] = useState(false)
	const [errorEmail, setErrorEmail] = useState(false)
	const [errorPassword, setErrorPassword] = useState(false)
    async function registerUser(event) {
		event.preventDefault()
		setErrorName(false)
        setErrorAboutCompany(false)
        setErrorEmail(false)
        setErrorPassword(false)

		if(name=='')
        {
            setErrorName(true)
        }
        if(aboutCompany=='')
        {
            setErrorAboutCompany(true)
        }
        if(email=='')
        {
            setErrorEmail(true)
        }
        if(password=='')
        {
            setErrorPassword(true)
        }


		if(name && email && password && aboutCompany)
		{

			try {
                const response = await AuthServices.companyRegister(name,email,isDeveloper,password,aboutCompany);
                console.log (response);
                if (response.data.status === 'ok') {
                    navigate('/login')
                }
                else{
                    alert("failed")
                }
              } catch (err) {
                console.log (err);
              }
		}
	}
	useEffect(()=>{
		if(currentUser)
		{
		  navigate("/")
		}
	  },[])
  return (
<div>
  <form onSubmit={registerUser}>
				
				<TextField className="txt-field-comp" value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Company Name"
					error={errorName}
					></TextField>
				<br /><br />
				<TextField className="txt-field-comp" value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
					error={errorEmail}
					></TextField>
				<br /><br />
				<TextField className="txt-field-comp" value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
					error={errorPassword}
					></TextField>
				<br /><br />
				<TextField className="txt-field-comp" value={aboutCompany}
					onChange={(e) => setAboutCompany(e.target.value)}
					type="text"
					placeholder="About Company"
					error={errorAboutCompany}
					></TextField>
				<br /><br />
				<div style={{display:"flex",justifyContent:"center"}}>
				<Button variant="outlined" style={{padding:"1rem",fontSize:"20px"}}  type="submit">Register</Button>
				</div>
			
			
			</form>
      </div>
  )
}

export default CompanyRegister