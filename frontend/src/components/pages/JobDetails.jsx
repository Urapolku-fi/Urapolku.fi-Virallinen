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
                                <p>Profession Guide</p>
                            </li>
                            <li>
                                <p>Job Application Guide</p>
                            </li>
                            <li>
                                <p>Employment Guide</p>
                            </li>
                            <li>
                                <p>Salary Information</p>
                            </li>
                        </ul>
                    </div>
                    <div className="similarJobs containerBorder">
                        
                    </div>
                </div>
                <div className="right containerBorder"></div>
            </div>
            
        </>
    );
};

export default JobDetails;
