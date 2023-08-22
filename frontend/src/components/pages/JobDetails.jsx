import "../css/job.css"
import ApplyNow from "./JobDetails/ApplyNow";
const JobDetails = () => {
    return (
        <>
            <img className="headerImage" src="pictures/Job-details.png" alt="image" />            <div className="body">
                <div className="left">
                    <div className="profile containerBorder">
                        <img src="pictures/company-logo.jpg" alt="" className="profilePicture" />
                        
                        <h2 className="profileName">
                            University of Eastern Finland
                        </h2>
                        
                        <a href="#" className="profileWebsite"><p>
                            Visit Website
                        </p></a>
                        
                        <p className="profileDescription">
                            write Company tag line or description or something about it in-short hbabcbcb bdjbh hshbbs fhbfb bh  hgsb
                        </p>

                        <ApplyNow link="#" />
                        
                        <a href="#" className="profileReports"><p>
                            Report as offline or expired
                        </p></a>
                    </div>   
                    <div className="tools containerBorder">
                        <h2>
                            Tools
                        </h2>
                        <ul>
                            <li>
                                <a href="#">Profession Guide</a>
                            </li>
                            <li>
                                <a href="#">Job Application Guide</a>
                            </li>
                            <li>
                                <a href="#">Employment Guide</a>
                            </li>
                            <li>
                                <a href="#">Salary Information</a>
                            </li>
                        </ul>
                    </div>
                    <div className="similarJobs containerBorder">
                        <h2>
                            Similar Jobs
                        </h2>
                        <ul>
                            <li>
                                <a href="#" className="none">
                                    <img src="pictures/Lowes.jpg" alt="" width={"57px"} />
                                    <div className="similarJobTitle">
                                        <p className="company">Lowe's Companies, Inc</p>
                                        <p className="jobTitle">Human Resources Services</p>
                                        <p className="location">
                                            Helsinki, Finland
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="none">
                                    <img src="pictures/Lowes.jpg" alt="" width={"57px"} />
                                    <div className="similarJobTitle">
                                        <p className="company">Lowe's Companies, Inc</p>
                                        <p className="jobTitle">Human Resources Services</p>
                                        <p className="location">
                                            Helsinki, Finland
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="none">
                                    <img src="pictures/Lowes.jpg" alt="" width={"57px"} />
                                    <div className="similarJobTitle">
                                        <p className="company">Lowe's Companies, Inc</p>
                                        <p className="jobTitle">Human Resources Services</p>
                                        <p className="location">
                                            Helsinki, Finland
                                        </p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="none">
                                    <img src="pictures/Lowes.jpg" alt="" width={"57px"} />
                                    <div className="similarJobTitle">
                                        <p className="company">Lowe's Companies, Inc</p>
                                        <p className="jobTitle">Human Resources Services</p>
                                        <p className="location">
                                            Helsinki, Finland
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </ul>

                        <a href="#" className="tryOut">
                            <img src="pictures/left-Arrow.svg" alt="" className="arrow" />
                            <p>Try it out</p>
                        </a>
                    </div>
                </div>
                <div className="right containerBorder">
                    <p className="posted subHeader">Posted on 23rd July 2023</p>
                    <div className="mainJobTitle">

                        <h1 className="jobHeader">Job Name</h1>

                        <p className="subHeader">Full time | On Site Espoo | €35,000 annually</p>

                    </div>

                    <div className="jobText">
                        <div className="description">
                            <h2>Job Description</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                        <div className="assignments">
                            <h2>What you’ll do</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="need">
                            <h2>What you’ll need</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
};

export default JobDetails;
