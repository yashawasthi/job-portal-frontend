import React, { useEffect, useState } from 'react'
import AddBoxIcon from '@mui/icons-material/AddBox';
import AppleIcon from '@mui/icons-material/Apple';
import { Avatar,Button, Grid, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import WorkIcon from '@mui/icons-material/Work';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CompanyServices from '../../services/company.services';
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

const CompanyProfile = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const userId=currentUser._id
  const [showImportantPeople,setShowImportantPeople]=useState(false);
  const [showPreviousWorks,setShowPreviousWorks]=useState(false);
  const [showImages,setShowImages]=useState(false);
  const navigate=useNavigate()
  const [details,setDetails]=useState([]);



  const deletePreviousWork=async (id)=>{
    try {
      await CompanyServices.deletePreviousWork(id,userId)
      getCompanyDetails()
    } catch (error) {
        console.log(error);
    }
}
  async function getCompanyDetails() {
    try {
        const response = await CompanyServices.getCompany(userId);
        console.log(response)
        if (response.data) {
          setDetails(response.data)
          if(response.data.importantPeople.length!==0)
          {
            setShowImportantPeople(true)
          }
          else{
            setShowImportantPeople(false)
          }
          if(response.data.previousWorks.length!==0)
          {
            setShowPreviousWorks(true)
          }
          else{
            setShowPreviousWorks(false)
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
    getCompanyDetails()
}, [])


  return (
    <div style={{padding:"50px"}}>
        <Grid container>
        <Grid xs={3}>
          <Paper style={{minHeight:"500px" ,minWidth:"300px", padding:"0",textAlign:"center", borderRadius: "30px"}}>
            <AppleIcon style={{minHeight:"200px" ,minWidth:"200px"}} />
            <Typography style={{marginBottom:"5px"}} variant='h4'>{details.name}</Typography>  
          </Paper>
        </Grid>
        <Grid xs={9}>
        <Paper style={{position:"relative", minHeight:"100px" ,minWidth:"100%", padding:"20px",marginBottom:"30px", borderRadius: "30px"}}>
            <Typography style={{marginBottom:"5px"}} variant='h6'>About Company</Typography>  
            {details.aboutCompany==="" ?<div><IconButton style={{color:"orange"}} onClick={()=>{navigate("add-about-company")}}> <AddBoxIcon style={{display:"inline-flex"}} /><Typography style={{color:"orange",display:"inline-flex",marginLeft:"1px"}} variant='h6'>Add infomation</Typography></IconButton>  </div>:<div style={{display:"flex",alignItems:"center", justifyContent:"space-between"}}>
              <h3 className="profile" style={{color:"#261a2b", display:"inline"}}>{details.about}</h3> <IconButton style={{color:"orange"}} onClick={()=>{navigate("add-about-company")}}> <EditIcon style={{display:"inline"}} /></IconButton>  </div>}
        </Paper>

        <Paper style={{minHeight:"400px" ,minWidth:"100%", padding:"20px",marginBottom:"30px", borderRadius: "30px"}}>
            <Typography style={{marginBottom:"5px"}} variant='h6'>Important People</Typography>
            <div style={{position:"relative",left:"930px",bottom:"50px"}}>
            <IconButton onClick={()=>{navigate("add-important-people")}} style={{color:"orange"}}> <AddBoxIcon style={{display:"inline-flex"}} /><Typography style={{color:"orange",display:"inline-flex",marginLeft:"1px"}} variant='h6'>Add</Typography></IconButton>  
            </div>
            {showImportantPeople===false?<div style={{textAlign:"center"}}>
            <AddPhotoAlternateIcon color="success" style={{minHeight:"200px",minWidth:"200px"}} />
            <Typography variant="h6">Upload Images</Typography>
            </div>:
            <div>
              <Stack direction="row" gap={5}>
              {details.importantPeople.map((person)=>(
                            <div style={{display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"space-between"}}>
                          <Avatar src={`${person.imgUrl}`} style={{minHeight:"200px" , minWidth:"200px"}} ></Avatar>
                          <span>{person.name}</span>
                        </div>
                        ))}
              </Stack>
                                      
            </div>
            }


            {/* <Avatar src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"style={{minHeight:"200px" , minWidth:"200px", display:"inline-flex", margin:"0 10px"}} ></Avatar>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wKNeguzGBs7ZgPl18dtNzD9CWm7Zi3nxuQ&usqp=CAU"style={{minHeight:"200px" , minWidth:"200px",display:"inline-flex",margin:"0 10px"}} ></Avatar>
            <Avatar src="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2017/03/28/Local-Politics/Images/Supreme_Court_Gorsuch_Moments_22084-70c71-0668.jpg?t=20170517"style={{minHeight:"200px" , minWidth:"200px",display:"inline-flex", margin:"0 10px"}} ></Avatar> */}
        </Paper>

        <Paper style={{minHeight:"400px" ,minWidth:"100%", padding:"20px",marginBottom:"30px", borderRadius: "30px"}}>
            <Typography style={{marginBottom:"5px"}} variant='h6'>Previous Works Undertaken</Typography>
            <div style={{position:"relative",left:"930px",bottom:"50px"}}>
            <IconButton onClick={()=>{navigate("add-previous-work")}} style={{color:"orange"}}> <AddBoxIcon style={{display:"inline-flex"}} /><Typography style={{color:"orange",display:"inline-flex",marginLeft:"1px"}} variant='h6'>Add</Typography></IconButton>  
            </div>  
            {showPreviousWorks===false?            <div style={{textAlign:"center"}}>
            <WorkIcon color="success" style={{minHeight:"200px",minWidth:"200px"}} />
            <Typography variant="h6">Write about all the previous tasks the company was involved in</Typography>
            </div>:
            <div>
              {details.previousWorks.map((work)=>(
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <div>
                <ol>
                  <ul>
                <Title>Title: </Title><Data>{work.title}</Data>
                <br></br>
                <Title>Duration: </Title><Data>{work.startingYear}  till {work.endingYear} </Data>
                <br></br>
                <Title>Description:</Title> <Data>{work.desc}</Data>
                <br></br>
                  </ul>
                </ol>
              </div>
              
              <div style={{display:"flex"}}>
              <div><IconButton onClick={()=>{navigate(`/companyprofile/add-previous-work/edit/${work._id}`)}} style={{color:"orange"}}><EditIcon /></IconButton></div>
              <div><IconButton onClick={()=>{deletePreviousWork(work._id)}} style={{color:"orange"}}><DeleteIcon /></IconButton></div>
              </div>

              </div>
              ))}
            </div>
            }
        </Paper>



        <Paper style={{minHeight:"400px" ,minWidth:"100%", padding:"20px",marginBottom:"30px", borderRadius: "30px"}}>
            <Typography style={{marginBottom:"5px"}} variant='h6'>Location</Typography>
            <div style={{position:"relative",left:"930px",bottom:"50px"}}>
            <IconButton style={{color:"orange"}}> <AddBoxIcon style={{display:"inline-flex"}} /><Typography style={{color:"orange",display:"inline-flex",marginLeft:"1px"}} variant='h6'>Add</Typography></IconButton>  
            </div>  
            <div style={{textAlign:"center"}}>
            <AddLocationIcon color="success" style={{minHeight:"200px",minWidth:"200px"}} />
            <Typography variant="h6">Please add your location details</Typography>
            </div>
        </Paper>

        

        <Paper style={{minHeight:"200px" ,minWidth:"100%", padding:"20px",marginBottom:"30px", borderRadius: "30px"}}>
            <Typography style={{marginBottom:"20px"}} variant='h5'>Company Website</Typography>
            <IconButton style={{color:"orange"}}> <AddBoxIcon style={{display:"inline-flex"}} /><Typography style={{color:"orange",display:"inline-flex",marginLeft:"1px"}} variant='h6'>Add Company URL</Typography></IconButton>  
            
        </Paper>



        <Paper style={{minHeight:"400px" ,minWidth:"100%", padding:"20px",marginBottom:"30px", borderRadius: "30px"}}>
            <Typography style={{marginBottom:"5px"}} variant='h6'>Image Gallery</Typography>
            <div style={{position:"relative",left:"930px",bottom:"50px"}}>
            <IconButton onClick={()=>{navigate("add-image")}} style={{color:"orange"}}> <AddBoxIcon style={{display:"inline-flex"}} /><Typography style={{color:"orange",display:"inline-flex",marginLeft:"1px"}} variant='h6'>Add</Typography></IconButton>  
            </div>  
            {showImages===false?<div style={{textAlign:"center"}}>
            <AddPhotoAlternateIcon color="success" style={{minHeight:"200px",minWidth:"200px"}} />
            <Typography variant="h6">Upload Images</Typography>
            </div>:
            <div>
              <Stack direction="row" gap={3}>
              {details.imageGallery.map((image)=>(
            <div>
              <Avatar src={`${image.imgUrl}`} style={{display:"inline-flex", minHeight:"200px" , minWidth:"200px"}} ></Avatar>
              </div>
              ))} 
              </Stack>
            
              </div>
            }
        </Paper>

        </Grid>
      </Grid>
    </div>
  )
}

export default CompanyProfile