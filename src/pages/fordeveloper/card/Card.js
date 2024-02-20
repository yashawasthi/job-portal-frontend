import { Button, Paper} from '@mui/material'
import React from 'react'
import classes from "./Card.module.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from "styled-components"
import CardExpanded from './CardExpanded';
import { useNavigate } from 'react-router-dom';

const FirstBlock=styled.div`
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
const Card = ({jobs,loading}) => {
    const navigate=useNavigate();
    if (loading) {
        return <h2>Loading...</h2>;
      }
    
  return (
          <div>
              {jobs.map((job)=>(
                  <Paper className={classes.ppr}>
                  <FirstBlock>
                  <JobTitle>{job.title}</JobTitle>
                  <CompanyName>{job.userId.name}</CompanyName>
                  </FirstBlock>
                  <SecondBlock>
                      <LocationOnIcon />
                      <JobLocation>{job.location}</JobLocation>
                  </SecondBlock>
                  <ThirdBlock>
                      <Span >
                          <SecondaryHeading>Start Date</SecondaryHeading>
                          <Data>{job.day}</Data>
                      </Span>
      
                      <Span>
                          <SecondaryHeading>CTC</SecondaryHeading>
                          <Data>₹{job.salaryMin}- ₹{job.salaryMax}</Data>
                      </Span>
      
                      <Span>
                          <SecondaryHeading>Experience Required</SecondaryHeading>
                          <Data>{job.expMin}- {job.expMax} years</Data>
                      </Span>
                  </ThirdBlock>
                  <FourthBlock>
                  <Button variant="contained" onClick={()=>{navigate(`/jobdetails/${job._id}`)}}>VIEW DETAILS</Button>
                  </FourthBlock>
              </Paper>
              ))}
          </div>
  )
}

export default Card