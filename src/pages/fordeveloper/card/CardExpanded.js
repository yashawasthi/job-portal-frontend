import { Button, IconButton, Paper} from '@mui/material'
import React, { useEffect, useState } from 'react'
import classes from "./CardExpanded.module.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from "styled-components"
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DeveloperServices from '../../../services/developer.services';
import CloseIcon from '@mui/icons-material/Close';
import Loader from '../../../components/Loader/Loader';
const Container=styled.div`
display:flex;
align-items:center;
justify-content:center;
height: calc(100vh - 56px);

`
const FirstBlock=styled.div`
display:flex;
justify-content:space-between;
`
const Heading=styled.div`
margin:10px 0;
display:flex;
gap:10px;
flex-direction:column;
`
const SecondBlock=styled.div`
margin:10px 0;
display:flex;
align-items:center;
gap:10px;
`
const Description=styled.div`
display:flex;
align-items:center;
`
const ThirdBlock=styled.div`
display:flex;
margin:10px 0;
`
const Span=styled.span`
display:flex;
align-items:center;
gap:20px;
margin:0 10px;
flex-direction:column;
`
const FourthBlock=styled.div`
`
const FifthBlock=styled.div`
`
const JobTitle=styled.span`
font-weight:600;
font-size:20px;
`
const CompanyName=styled.span`
font-weight:200;
font-size:20px;
color:gray;
`
const JobLocation=styled.div`
font-weight:200;
font-size:20px;
`
const SecondaryHeading=styled.span`
font-weight:400;
font-size:20px;
color:gray;
`
const Data=styled.span`
font-weight:600;
font-size:20px;
`
const Status=styled.span`
font-weight:600;
font-size:20px;
`

const CardExpanded = () => {
    const navigate=useNavigate()
    const currentUser = useSelector((state) => state.currentUser);
    const [isLoading,setIsLoading] =useState(false); 
    const userId=currentUser._id
    const [job,setJob]=useState([]);
    const {id}=useParams();

    async function getJob() {
  
      try {
        setIsLoading(true);
        const response = await DeveloperServices.getJob(id);
        if (response.data) {
          setIsLoading(false);
            setJob(response.data)
        }
        else
        {
          setIsLoading(false);
          alert("Error")
        }
      } catch (err) {
        console.log (err);
      }
    }
  
    useEffect(()=>{
      getJob()
    },[]);
    async function apply() {

        try {
          setIsLoading(true);
          const response = await DeveloperServices.applyJob(userId,id);
          if (response.data=== 'ok') {
            setIsLoading(false);
           navigate("/")
          }
          else
          {
            alert(response.data.error)
            setIsLoading(false);
          }
        } catch (err) {
          console.log (err);
          setIsLoading(false);
        }
    
    
    }
  return (
    <>
    {isLoading == true ? <div className={classes.loaderContainer}>
        <Loader />
      </div> : 
          <Container>
          <Paper className={classes.ppr}>
            <FirstBlock>
              <Heading>
              <JobTitle>{job?.title}</JobTitle>
            <CompanyName>{job?.userId?.name}</CompanyName>
              </Heading>
              <IconButton onClick={()=>navigate(-1)}>
              <CloseIcon style={{margin:0,color:"black" ,fontSize:"40px"}} />
              </IconButton>
            </FirstBlock>
            <Description>
                About The  Job : 
                {job?.jobDescription}
            </Description>
            <SecondBlock>
                <LocationOnIcon />
                <JobLocation>{job?.location}</JobLocation>
            </SecondBlock>
            <ThirdBlock>
                <Span >
                    <SecondaryHeading>Start Date</SecondaryHeading>
                    <Data>{job?.day}</Data>
                </Span>

                <Span>
                    <SecondaryHeading>CTC</SecondaryHeading>
                    <Data>₹{job?.salaryMin}- ₹{job?.salaryMax}</Data>
                </Span>

                <Span>
                    <SecondaryHeading>Experience Required</SecondaryHeading>
                    <Data>{job?.expMin}- {job?.expMax} years</Data>
                </Span>
            </ThirdBlock>
            <FourthBlock>
            <Status>{job?.status}</Status>
            </FourthBlock>
            <FifthBlock>
              {job?.applicants?.includes(currentUser._id)?
              <Button style={{color:"black", backgroundColor:"lightgreen"}} disabled="true" >Applied</Button>:
              <Button variant="contained" onClick={()=>{apply()}}>Apply</Button>
              }

            </FifthBlock>
        </Paper>
      </Container>}
    </>
  )
}

export default CardExpanded