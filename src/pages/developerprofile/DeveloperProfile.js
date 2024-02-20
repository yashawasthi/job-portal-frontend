import React, { useEffect, useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Avatar,Button, Grid, IconButton, Link, Paper, TextField, Typography } from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import WorkIcon from '@mui/icons-material/Work';
import DeveloperServices from '../../services/developer.services';
import NavThree from '../../components/navthree/NavThree';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Title=styled.span`
font-size:20px;
font-weight:400;
`
const Data=styled.span`
font-size:15px;
font-weight:200;
color:grey;
`
const DeveloperProfile = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const userId=currentUser._id
  const navigate=useNavigate()
  const [details,setDetails]=useState([]);
  const [showAboutMe,setShowAboutMe]=useState(false);
  const [showProjects,setShowProjects]=useState(false);
  const [showWorkExperiences,setShowWorkExperiences]=useState(false);
  const [iterExp,setItrExp]=useState(1)


  const deleteWorkExperience=async (id)=>{
    try {
      await DeveloperServices.deleteWorkExperience(id,userId)
      getUserDetails()
    } catch (error) {
        console.log(error);
    }
  }


  const deleteProject=async (id)=>{
    try {
      await DeveloperServices.deleteProject(id,userId)
      getUserDetails()
    } catch (error) {
        console.log(error);
    }
  }


  async function getUserDetails() {
      try {
          const response = await DeveloperServices.getDeveloper(userId);
          if (response.data) {
            console.log(response.data)
            setDetails(response.data)
            if(response.data.about)
            {
              setShowAboutMe(true)
            }
            if(response.data.workExperiences.length!==0)
            {
              setShowWorkExperiences(true)
            }
            else{
              setShowWorkExperiences(false)
            }
            if(response.data.projects.length!==0)
            {
              setShowProjects(true)
            }
            else{
              setShowProjects(false)
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


  return (
    <div>
      <NavThree />
      <div style={{padding:"50px"}}>
        <Grid container>
        <Grid xs={3}>
          <Paper style={{height:"500px" ,width:"300px", padding:"10px",textAlign:"center", borderRadius: "30px"}}>
            <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"style={{height:"200px",width:"200px", margin:"auto",marginBottom:"20px"}}></Avatar>
            <Typography style={{marginBottom:"5px"}} variant='h4'>{currentUser.name}</Typography>  
            <IconButton style={{color:"orange"}}> <EditIcon style={{display:"inline-flex"}} /></IconButton>
          </Paper>
        </Grid>
        <Grid xs={9}>
        <Paper style={{position:"relative", minHeight:"100px" ,minWidth:"100%", padding:"20px",marginBottom:"30px", borderRadius: "30px"}}>
            <Typography style={{marginBottom:"5px"}} variant='h6'>About Me</Typography>  
            {details.about==="" ?<div><IconButton style={{color:"orange"}} onClick={()=>{navigate("add-about-me")}}> <AddBoxIcon style={{display:"inline-flex"}} /><Typography style={{color:"orange",display:"inline-flex",marginLeft:"1px"}} variant='h6'>Add infomation</Typography></IconButton>  </div>:<div style={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
              <h3 className="profile" style={{color:"#261a2b", display:"inline"}}>{details.about}</h3> <IconButton style={{color:"orange"}} onClick={()=>{navigate("add-about-me")}}> <EditIcon style={{display:"inline"}} /></IconButton>  </div>}
        </Paper>


        <Paper style={{minHeight:"400px" ,width:"100%", padding:"20px",marginBottom:"30px", borderRadius: "30px"}}>
            <Typography style={{marginBottom:"5px"}} variant='h6'>Work Experience</Typography>
            <div style={{position:"relative",left:"930px",bottom:"50px"}}>
            <IconButton style={{color:"orange"}}> <AddBoxIcon onClick={()=>{navigate("add-work-experience")}} style={{display:"inline-flex"}} /><Typography style={{color:"orange",display:"inline-flex",marginLeft:"1px"}} variant='h6'>Add</Typography></IconButton>  
            </div> 
            {showWorkExperiences===false?
                        <div style={{textAlign:"center"}}>
                        <WorkIcon color="success" style={{minHeight:"200px",width:"200px"}} />
                        <Typography variant="h6">Write about your accomplishments at work</Typography>
                        </div>:
                        <div>
                          {details.workExperiences.map((job)=>(
                            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                              <div>
                              <ol>
                                <ul>
                              <Title>Company:</Title> <Data>{job.companyName}</Data>
                              <br></br>
                              <Title>Duration:</Title> <Data>{job.startingYear} till {job.endingYear}</Data>
                              <br></br>
                              <Title>Role:</Title> <Data>{job.title}</Data>
                              <br></br>
                              <Title>Job Description:</Title> <Data>{job.desc}</Data>
                              <br></br>
                                </ul>
                              </ol>
                            </div>
                            
                            <div><IconButton onClick={()=>{navigate(`developerprofile/add-work-experience/edit/${job._id}`)}} style={{color:"orange"}}><EditIcon /></IconButton></div>
                            <div><IconButton onClick={()=>{deleteWorkExperience(job._id)}} style={{color:"orange"}}><DeleteIcon /></IconButton></div>
                            </div>
                            
                          ))}
                        </div>
            } 

        </Paper>



        <Paper style={{minHeight:"400px" ,width:"100%", padding:"20px",marginBottom:"30px", borderRadius: "30px"}}>
            <Typography style={{marginBottom:"5px"}} variant='h6'>Projects</Typography>
            <div style={{position:"relative",left:"930px",bottom:"50px"}}>
            <IconButton style={{color:"orange"}}> <AddBoxIcon style={{display:"inline-flex"}} onClick={()=>{navigate("add-project")}}/><Typography style={{color:"orange",display:"inline-flex",marginLeft:"1px"}} variant='h6'>Add</Typography></IconButton>  
            </div>  
            {showProjects===false?
                        <div style={{textAlign:"center"}}>
                        <ListAltIcon color="success" style={{height:"200px",width:"200px"}} />
                        <Typography variant="h6">Add your projects, show off to your peers</Typography>
                        </div>:
                        <div>
                                          {details.projects.map((project)=>(
                            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                              <div>
                              <ol>
                                <ul>
                              <Title>Title:</Title> <Data>{project.title}</Data>
                              <br></br>
                              <Title>Duration:</Title> <Data>{project.startingYear} till {project.endingYear}</Data>
                              <br></br>
                              <Title>Technologoes Used:</Title> <Data>{project.technologiesUsed}</Data>
                              <br></br>
                              <Title>Project Link:</Title> <Data>{project.url}</Data>
                              <br></br>
                                </ul>
                              </ol>
                            </div>
                            
                            <div><IconButton onClick={()=>{navigate(`/developerprofile/add-project/edit/${project._id}`)}} style={{color:"orange"}}><EditIcon /></IconButton></div>
                            <div><IconButton onClick={()=>{deleteProject(project._id)}} style={{color:"orange"}}><DeleteIcon /></IconButton></div>
                            </div>
                            
                          ))}
                        </div>
                        }
        </Paper>

        <Paper style={{height:"400px" ,width:"100%", padding:"20px",marginBottom:"30px", borderRadius: "30px"}}>
            <Typography style={{marginBottom:"5px"}} variant='h6'>Resume</Typography>
            <div style={{position:"relative",left:"930px",bottom:"50px"}}>
            <IconButton style={{color:"orange"}}> <AddBoxIcon style={{display:"inline-flex"}} /><Typography style={{color:"orange",display:"inline-flex",marginLeft:"1px"}} variant='h6'>Add</Typography></IconButton>  
            </div>  
            <div style={{textAlign:"center"}}>
            <CloudUploadIcon color="success" style={{height:"200px",width:"200px"}} />
            <Typography variant="h6">Upload your resume</Typography>
            </div>
        </Paper>

        </Grid>
      </Grid>
    </div>
    </div>
  )
}

export default DeveloperProfile