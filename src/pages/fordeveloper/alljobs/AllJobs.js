import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Checkbox, Paper, TextField, Typography } from '@mui/material';
import NavThree from '../../../components/navthree/NavThree';
import DeveloperServices from '../../../services/developer.services';
import classes from "./AllJobs.module.css"
import Card from '../card/Card';
import Pagination from '../../../components/Pagination';
import Loader from '../../../components/Loader/Loader';
const label = {inputProps: {'aria-label': 'Checkbox demo'}};









const AllJobs = () => {
    const [jobs,setJobs]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(2);



    async function getAllJobs() {
  
      try {
         setIsLoading(true);
        const response = await DeveloperServices.getAllJobs();
          console.log(response.data)
          setJobs(response.data)
          setIsLoading(false);
      } catch (err) {
        console.log (err);
        setIsLoading(false);

      }
    }


    useEffect(()=>{
      getAllJobs();
    },[]);

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  

      
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
<div>
      <NavThree />
      {isLoading==true ? <div className={classes.loaderContainer}>
        <Loader />
      </div>  : <div>
      <div className={classes.container}>
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
    <div  className={classes.wrapper}>
      {jobs.length===0?
      <div style={{marginTop:"300px "}}>
        <h1>No Jobs To Show</h1>
      </div>:
      <div>
      
      <Card jobs={currentJobs} loading={isLoading}/>
</div>}
    </div>

      </div>
      <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={jobs.length}
        paginate={paginate}
      />
      </div> }
    </div>
  )
}

export default AllJobs