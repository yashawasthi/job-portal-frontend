import { Button, Paper} from '@mui/material'
import React, { useEffect, useState } from 'react'
import classes from "./ApplicantCard.module.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import styled from "styled-components"
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import CompanyServices from '../../../services/company.services';
import NavTwo from '../../../components/navtwo/NavTwo';


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

const Name=styled.span`
font-weight:600;
font-size:20px;
`
const About=styled.span`
font-weight:200;
font-size:20px;
color:gray;
`
const JobLocation=styled.div`
font-weight:200;
font-size:20px;
`
const WorkExperience=styled.div`

`
const MainHeading=styled.div`
font-weight:500;
font-size:40px;
margin:0 0 10px 0;
`
const Container=styled.div`
display:flex;
flex-direction:column;
gap:10px;
margin:50px 0;
`
const Heading=styled.div`
font-weight:200;
font-size:20px;
`
const Wrapper=styled.div`
display:flex;
gap:3px;
`
const Data=styled.div`
font-weight:200;
font-size:20px;
color:grey;
`

const Project=styled.div`

`

const ApplicantCard = ({applicant}) => {
  return (
      <div>
    <Paper className={classes.ppr}>
        <FirstBlock>
        <Name>{applicant?.name}</Name>
        <About>{applicant?.about}</About>
        </FirstBlock>
        <SecondBlock>
            <LocationOnIcon />
            <JobLocation>{applicant?.location}</JobLocation>
        </SecondBlock>
        <WorkExperience>
          <MainHeading>Work Experience:</MainHeading>
          {applicant.workExperiences.map((job)=>(
            <Container>
              <Wrapper>
                <Heading>CompanyName:</Heading>
                <Data>{job.companyName}</Data>
              </Wrapper>
              <Wrapper>
                <Heading>Title:</Heading>
                <Data>{job.title}</Data>
              </Wrapper>
              <Wrapper>
                <Heading>Duration:</Heading>
                <Data>{job.startingYear} to {job.endingYear}</Data>
              </Wrapper>
              <Wrapper>
                <Heading>Job Description:</Heading>
                <Data>{job.desc}</Data>
              </Wrapper>
            </Container>
          ))}
        </WorkExperience>

        <Project>
          <MainHeading>Projects:</MainHeading>
          {applicant.projects.map((project)=>(
            <Container>
              <Wrapper>
                <Heading>Title:</Heading>
                <Data>{project.title}</Data>
              </Wrapper>
              <Wrapper>
                <Heading>Duration:</Heading>
                <Data>{project.startingYear} to {project.endingYear}</Data>
              </Wrapper>
              <Wrapper>
                <Heading>Job Description:</Heading>
                <Data>{project.desc}</Data>
              </Wrapper>
              <Wrapper>
                <Heading>Project Link:</Heading>
                <Data>{project.url}</Data>
              </Wrapper>
            </Container>
          ))}
        </Project>
        {/* <Project>
        <Heading>Projects:</Heading>
        </Project> */}
    </Paper>
    </div>
  )
}

export default ApplicantCard