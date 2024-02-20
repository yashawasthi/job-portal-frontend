import React, { useEffect } from 'react'
import {Button, Paper, TextField} from '@mui/material';
import {useState} from 'react';
import AuthServices from '../../services/auth.services';
import {useNavigate} from 'react-router-dom';
import NavOne from '../../components/navone/NavOne';
import classes from "./Login.module.css"
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const [errorrEmail, setErrorEmail] = useState (false);
  const [errorPassword, setErrorPassword] = useState (false);
  const navigate = useNavigate ();

  const loginUser = async e => {
    e.preventDefault ();
    if (!email) {
      setErrorEmail (true);
    }

    if (!password) {
      setErrorPassword (true);
    }
    if (email && password) {
      dispatch(loginStart());
      try {
        const response = await AuthServices.login (email, password);
        console.log(response)  //consoling log here
          dispatch(loginSuccess(response)); // I am sending response here 
          navigate ('/')
      } catch (err) {
        dispatch(loginFailure());
      }
    }
  };
  useEffect(()=>{
    if(currentUser)
    {
      navigate("/")
    }
  },[])
  return (
    <div>
      <NavOne />
      <div className={classes.login}>
        <form onSubmit={loginUser}>
          <Paper className={classes.ppr}>
            <div style={{display:"flex",justifyContent:"center"}}>
            <h1>Login</h1>
            </div>
          <br />
            <TextField
              style={{width: '100%'}}
              value={email}
              onChange={e => setEmail (e.target.value)}
              type="email"
              placeholder="Email"
              error={errorrEmail}
            />
            <br /><br />
            <TextField
              style={{width: '100%'}}
              value={password}
              onChange={e => setPassword (e.target.value)}
              type="password"
              placeholder="Password"
              error={errorPassword}
            />
            <br /><br />
            <div style={{display:"flex",justifyContent:"center"}}>
            <Button
              variant="outlined"
              sx={{width:"60%",padding:"10px",fontSize:"20px"}}
              type="submit"
            >
              Login
            </Button>
            </div>

          </Paper>
        </form>
      </div>
    </div>
  )
}

export default Login