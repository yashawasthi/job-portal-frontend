import React, { useEffect, useState } from 'react'
import CompanyServices from '../../../services/company.services';
import {Button, Checkbox, Paper, TextField, Typography} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSelector } from 'react-redux';
import classes from "./AllPostedJobs.module.css"
import CompanyCard from '../companycard/CompanyCard';
import Pagination from '../../../components/Pagination';
const label = {inputProps: {'aria-label': 'Checkbox demo'}};

const AllPostedJobs = () => {

  






  const currentUser = useSelector((state) => state.currentUser);
    const [jobs,setJobs]=useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [jobsPerPage] = useState(2);

    async function getAllJobs() {
  
        try {
        setLoading(true);
          const response = await CompanyServices.getAllJobs();
          if (response.data) {
              // console.log(response.data)
            setJobs(response.data)
        setLoading(false);

          }
          else
          {
            alert("Error")
          }
        } catch (err) {
          console.log (err);
        }
      }
    
      useEffect(()=>{
        getAllJobs()
        
      },[]);

      const PostedJobs = jobs.filter(checkPostedJobs);

      function checkPostedJobs(job) {
        return job.userId===(currentUser._id);
      }


      const indexOfLastJob = currentPage * jobsPerPage;
      const indexOfFirstJob = indexOfLastJob - jobsPerPage;
      const currentJobs = PostedJobs.slice(indexOfFirstJob, indexOfLastJob);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);

  
        console.log(jobs)
  return (
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
    {PostedJobs.length===0?<div style={{margin:"300px 0 0 400px"}}>
      <h1>No Jobs Posted Yet</h1>
    </div>:
        <div className={classes.cardwrapper}>
        <CompanyCard jobs={currentJobs} loading={loading}/>
      </div>}
    <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={PostedJobs.length}
        paginate={paginate}
      />

    </div>
  )
}

export default AllPostedJobs