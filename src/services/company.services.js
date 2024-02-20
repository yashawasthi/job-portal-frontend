import axios from 'axios';
import authHeader from './auth-header';
const BACKEND__URI = 'https://job-portal-backend-beta.vercel.app/api/';

const postJob= async (  id,title,location,jobDescription,timing,status,skills,expMin,expMax,salaryMin,salaryMax,day) => {
  return axios
    .post(BACKEND__URI + 'postJob', {
      id,
      title,
      location,
      jobDescription,
      timing,
      status,
      skills,
      expMin,
      expMax,
      salaryMin,
      salaryMax,
      day,
    },
    {
      headers: authHeader (),
    }
    )
    .then (response => {
      console.log (response);
      return response;
    });
};


const getAllJobs= async () => {
  return axios
    .get(BACKEND__URI + 'allJobs', {
      headers: authHeader (),
    }
    )
    .then (response => {
      return response;
    });
};

const getJob= async (id) => {
  return axios
    .post(BACKEND__URI + 'getJob', {
      id
    },
    {
      headers: authHeader (),
    }
    )
    .then (response => {
      console.log (response);
      return response;
    });
};


const getCompany= async (userId) => {
  return axios
    .post(BACKEND__URI + "getCompany",
    {
      userId:userId,
    },
    {
      headers: authHeader (),
    }
    )
    .then (response => {
      console.log (response);
      return response;
    });
};


const setImportantPeople= async (userId,name,imgUrl) => {
  return axios
    .post(BACKEND__URI + 'setImportantPeople', {
      userId:userId,
      name:name,
      imgUrl:imgUrl
    },
    {
      headers: authHeader (),
    }
    )
    .then (response => {
      console.log (response);
      return response;
    });
};


const addPreviousWork= async (userId,title,description,startingYear,endingYear) => {
  return axios
    .post(BACKEND__URI + 'addPreviousWork', {
      userId:userId,
      title:title,
      desc:description,
      startingYear:startingYear,
      endingYear:endingYear
    },
    {
      headers: authHeader (),
    }
    )
    .then (response => {
      console.log (response);
      return response;
    });
};


const deleteImportantPeople= async (id,userId) => {
  console.log("I am here")
return axios
  .post(BACKEND__URI + "deleteImportantPeople",
  {
    id:id,
    userId:userId,
  },
  {
    headers: authHeader (),
  }
  )
  .then (response => {
    console.log (response);
    return response;
  });
};


const deletePreviousWork= async (id,userId) => {
return axios
  .post(BACKEND__URI + "deletePreviousWork",
  {
    id:id,
    userId:userId,
  },
  {
    headers: authHeader (),
  }
  )
  .then (response => {
    console.log (response);
    return response;
  });
};



const CompanyServices = {
  postJob,getAllJobs,getJob,getCompany,setImportantPeople,addPreviousWork,deleteImportantPeople,deletePreviousWork
};

export default CompanyServices;
