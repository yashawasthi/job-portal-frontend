import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import ForCompany from './pages/forcompany/ForCompany'
import ForDeveloper from './pages/fordeveloper/ForDeveloper'
import Login from './pages/login/Login'
import PostJob from './pages/postjob/PostJob'
import Register from './pages/register/Register'
import ResumeBuilder from './pages/ResumeBuilder/ResumeBuilder'
import "./App.css"
import { useSelector } from 'react-redux';
import AppliedJobs from './pages/fordeveloper/appliedjobs/AppliedJobs'


import WorkExperience from './pages/developerprofile/work-experience/WorkExperience'
import UpdateWorkExperience from './pages/developerprofile/work-experience/update-work-experience/UpdateWorkExperience'
import AddProject from './pages/developerprofile/projects/AddProject'
import UpdateProject from './pages/developerprofile/projects/update-project/UpdateProject'
import AddAboutCompany from './pages/companyprofile/add-about-company/AddAboutCompany'
import AddImportantPeople from './pages/companyprofile/add-important-people/AddImportantPeople'
import AddPreviousWorks from './pages/companyprofile/add-previous-works/AddPreviousWorks'
import AddImage from './pages/companyprofile/add-image/AddImage'
import UpdatePreviousWork from './pages/companyprofile/add-previous-works/update-previous-work/UpdatePreviousWork'
import CompanyProfile from './pages/companyprofile/CompanyProfile'
import AddAboutMe from './pages/developerprofile/add-about-me/AddAboutMe'
import DeveloperProfile from './pages/developerprofile/DeveloperProfile'
import CompanyCardExpanded from './pages/forcompany/companycard/CompanyCardExpanded'
import CardExpanded from './pages/fordeveloper/card/CardExpanded'
const App = () => {
	const currentUser = useSelector((state) => state.currentUser);
	return (
		<div>
			<BrowserRouter>
			<Routes>
				<Route path="/" element={currentUser? 
				<div>
					{currentUser.isDeveloper?<ForDeveloper />:<ForCompany />}
				</div>
				:
				<Home />
				} /> 
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />

				<Route path="fordeveloper" element={<ForDeveloper />} />
				<Route path="/jobdetails/:id" element={<CardExpanded />} />
				<Route path="/appliedjobs" element={<AppliedJobs />} />
				
				
				<Route path="forcompany" element={<ForCompany />} />
				<Route path="/postedjobdetails/:id" element={<CompanyCardExpanded />} />
				<Route path="postjob" element={<PostJob />} />


				<Route path="resume-builder" element={<ResumeBuilder />} />









				<Route path='developerprofile' element={<DeveloperProfile />} />
				<Route path="developerprofile/add-about-me" element={<AddAboutMe />} />
				<Route path="developerprofile/add-work-experience" element={<WorkExperience />} />
				<Route path="developerprofile/add-work-experience/edit/:id" element={<UpdateWorkExperience />} />
				<Route path="developerprofile/add-project" element={<AddProject />} />
				<Route path="developerprofile/add-project/edit/:id" element={<UpdateProject />} />
				<Route path='companyprofile' element={<CompanyProfile />} />
				<Route path="companyprofile/add-about-company" element={<AddAboutCompany /> } />
				<Route path="companyprofile/add-important-people" element={<AddImportantPeople /> } />
				<Route path="companyprofile/add-previous-work" element={<AddPreviousWorks />} />
				<Route path="companyprofile/add-previous-work/edit/:id" element={<UpdatePreviousWork />} />
				<Route path="companyprofile/add-image" element={<AddImage />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
