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
const label = {inputProps: {'aria-label': 'Checkbox demo'}};









const AllJobs = () => {
    const [jobs,setJobs]=useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(2);



    async function getAllJobs() {
  
      try {
        setLoading(true);
        const response = await DeveloperServices.getAllJobs();
          console.log(response.data)
          setJobs(response.data)
          setLoading(false);
      } catch (err) {
        console.log (err);
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
      
      <Card jobs={currentJobs} loading={loading}/>
</div>}
    </div>

      </div>
      <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={jobs.length}
        paginate={paginate}
      />
    </div>
  )
}

export default AllJobs