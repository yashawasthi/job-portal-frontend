import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthServices from '../../services/auth.services';
import "./DeveloperRegister.css"
const DeveloperRegister = () => {
    const currentUser = useSelector((state) => state.currentUser);
    const navigate = useNavigate()
    
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [address, setAddress] = useState('')
    const [skills, setSkills] = useState('')
	const [email, setEmail] = useState('')
	const isDeveloper = true
	const [password, setPassword] = useState('')

    const [errorName, setErrorName] = useState(false)
    const [errorUserName, setErrorUserName] = useState(false)
    const [errorAddress, setErrorAddress] = useState(false)
    const [errorSkills, setErrorSkills] = useState(false)
	const [errorEmail, setErrorEmail] = useState(false)
	const [errorPassword, setErrorPassword] = useState(false)
    async function registerUser(event) {
		event.preventDefault()
        setErrorName(false)
        setErrorUserName(false)
        setErrorAddress(false)
        setErrorSkills(false)
        setErrorEmail(false)
        setErrorPassword(false)

        if(name==='')
        {
            setErrorName(true)
        }
        if(userName==='')
        {
            setErrorUserName(true)
        }
        if(skills==='')
        {
            setErrorSkills(true)
        }
        if(address==='')
        {
            setErrorAddress(true)
        }
        if(email==='')
        {
            setErrorEmail(true)
        }
        if(password==='')
        {
            setErrorPassword(true)
        }


        if(name && userName && address && skills && email && password )
        {
            try {
                const response = await AuthServices.devRegister(name,userName,address,skills,email,isDeveloper,password);
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
    <div><form onSubmit={registerUser}>
            <TextField className='txt-field-dev' value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Full Name"
                error={errorName}
                ></TextField>
            <br /><br />
            <TextField className='txt-field-dev' value={userName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="username"
                error={errorUserName}
                ></TextField>
            <br /><br />
            <TextField className='txt-field-dev' value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                error={errorEmail}
                ></TextField>
            <br /><br />
            <TextField className='txt-field-dev' value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Address"
                error={errorAddress}
                ></TextField>
            <br /><br />
            <TextField className='txt-field-dev' value={skills}
                onChange={(e) => setSkills(e.target.value)}
                type="text"
                placeholder="Skills"
                error={errorSkills}
                ></TextField>
            <br /><br />
            <TextField className='txt-field-dev' value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                error={errorPassword}
                ></TextField>
            <br /><br />
            <div style={{display:"flex",justifyContent:"center"}}>
            <Button variant="outlined" sx={{width:"60%",padding:"10px",fontSize:"20px"}}  type="submit">Register</Button>
            </div>
            
        
        </form></div>
</div>
  )
}

export default DeveloperRegister