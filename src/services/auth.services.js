import axios from 'axios';

const BACKEND__URI = 'https://job-portal-backend-beta.vercel.app/api/';

const login = async (email, password) => {
  return axios
    .post (BACKEND__URI + 'login', {
      email,
      password,
    })
    .then (response => {
      console.log("This is response "+response.data);
      if (response.data.user) {
        localStorage.setItem ('token', JSON.stringify (response.data.user));
      }
      return response.data;
    });
};


const devRegister = async (name,userName,address,skills,email,isDeveloper,password) => {
  return axios
    .post (BACKEND__URI + 'registerDeveloper', {
      name,
      userName,
      address,
      skills,
      email,
      isDeveloper,
      password,
    })
    .then (response => {
      return response;
    });
};

const companyRegister = async (name,email,isDeveloper,password,aboutCompany) => {
  return axios
    .post (BACKEND__URI + 'registerCompany', {
      name,
      email,
      isDeveloper,
      password,
      aboutCompany
    })
    .then (response => {
      return response;
    });
};



const AuthServices = {
  login,devRegister,companyRegister
};

export default AuthServices;


