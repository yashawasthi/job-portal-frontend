import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import NavThree from '../../../components/navthree/NavThree'
import DeveloperServices from '../../../services/developer.services';
import Card from '../card/Card';
import { Checkbox, Paper, TextField, Typography } from '@mui/material';
import classes from "./AppliedJobs.module.css"
import Pagination from '../../../components/Pagination';
import Loader from '../../../components/Loader/Loader';
const label = {inputProps: {'aria-label': 'Checkbox demo'}};

const AppliedJobs = () => {
    const currentUser = useSelector((state) => state.currentUser);
    const [jobs,setJobs]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(2);
    async function getAllJobs() {
  
      try {
        setIsLoading(true);
        const response = await DeveloperServices.getAllJobs();
        if (response.data) {
          setJobs(response.data)
          setIsLoading(false);
        }
        else
        {
          setIsLoading(false);
          alert("Error")
        }
      } catch (err) {
        setIsLoading(false);
        console.log (err);
      }
    }
  
    useEffect(()=>{
      getAllJobs()
    },[]);
  
    const appliedJobs = jobs.filter(checkApplicancy);

function checkApplicancy(job) {
  return job.applicants.includes(currentUser._id);
}


const indexOfLastJob = currentPage * jobsPerPage;
const indexOfFirstJob = indexOfLastJob - jobsPerPage;
const currentJobs = appliedJobs.slice(indexOfFirstJob, indexOfLastJob);

const paginate = pageNumber => setCurrentPage(pageNumber);

console.log("User")
console.log(currentUser)

return (
    <div>
      <NavThree />
      {isLoading ==true ? <div className={classes.loaderContainer}>
        <Loader />
      </div>  : 
            <div><div className={classes.container}>
            <div className={classes.filter}>
    <Paper className={classes.ppr}>
      <div>
        <Typography variant="h4" style={{marginBottom: '20px'}}>
          Filter
        </Typography>
        <TextField style={{ width: "100%", margin:"10px 0"}}
          placeholder="Search by Jobs"
        />
        <TextField style={{ width: "100%", margin:"10px 0"}}
          placeholder="Search by Keyword"
        />
        <Checkbox {...label} /> Show Only Recent Jobs
      </div>
    </Paper>
  </div>
  {appliedJobs.length===0?
  <div style={{margin:"300px 0 0 600px"}}>
    <h1>No Jobs Applied</h1>
  </div>:
  <div  className={classes.wrapper}>
  <div>
  <Card jobs={currentJobs} loading={isLoading}/>

  </div>
  </div>}

  </div>
  <Pagination
      jobsPerPage={jobsPerPage}
      totalJobs={appliedJobs.length}
      paginate={paginate}
    />
    </div>
    }
    </div>
  )
}

export default AppliedJobs