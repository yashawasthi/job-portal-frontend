import axios from 'axios';
import authHeader from './auth-header';
const BACKEND__URI = 'https://job-portal-backend-beta.vercel.app/api/';

  const getAllJobs= async () => {
    return axios
      .get(BACKEND__URI + 'alljobsfordeveloper', {
        headers: authHeader (),
      }
      )
      .then (response => {
        return response;
      });
  };

  const getJob= async (id) => {
    return axios
      .post(BACKEND__URI + 'getjobfordeveloper', {
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

  const applyJob= async (userId,id) => {
    return axios
      .post(BACKEND__URI + 'applyJob', {
        userId,
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

  const setAbout= async (about,userId) => {
    return axios
      .post(BACKEND__URI + 'setAboutDeveloper', {
        about,
        userId
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


  const addWorkExperience= async (userId,companyName,startingYear,endingYear,jobDescription,title) => {
    return axios
      .post(BACKEND__URI + 'addWorkExperience', {
        userId:userId,
        companyName:companyName,
        startingYear:startingYear,
        endingYear:endingYear,
        desc:jobDescription,
        title:title
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


  const addProject= async (userId,title,startingYear,endingYear,technologiesUsed,url,projectDescription) => {
    return axios
      .post(BACKEND__URI + 'addProject', {
        userId:userId,
        title:title,
        startingYear:startingYear,
        endingYear:endingYear,
        technologiesUsed:technologiesUsed,
        url:url,
        desc:projectDescription
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

    const deleteWorkExperience= async (id,userId) => {
      console.log("I am here")
    return axios
      .post(BACKEND__URI + "deleteWorkExperience",
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


  const deleteProject= async (id,userId) => {
    return axios
      .post(BACKEND__URI + "deleteProject",
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



  const getDeveloper= async (userId) => {
    return axios
      .post(BACKEND__URI + "getDeveloper",
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

  const DeveloperServices = {
    getAllJobs,getJob,applyJob,setAbout,addWorkExperience,addProject,deleteProject,deleteWorkExperience,getDeveloper
  };
  
  export default DeveloperServices;
  