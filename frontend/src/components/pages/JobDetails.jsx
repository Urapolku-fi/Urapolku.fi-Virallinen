import "../css/jobDetails.css";
import { SkillsGroup } from "./JobDetails/SkillsGroup";
import { ApplyNow } from "./JobDetails/ApplyNow";
import { Socials } from "./JobDetails/Socials";
import LinkSVG from "../../assets/link.svg";
import Footer from "../Footer";

const JobDetails = () => {
  return (
    <>
      <img className="headerImage" src="pictures/Job-details.png" alt="image" />
      <div className="body">
        <section className="jobHeader">
          <div className="mainJobTitle">
            <h1>Job Name</h1>
            <p className="subHeader">
              Full time | On Site <br /> Espoo | €35,000 annually
            </p>
          </div>
          <div className="mainJobCompany">
            <img src="pictures/company-logo.jpg" alt="company logo" />
            <p>University of Eastern Finland</p>
          </div>
        </section>
        <section className="jobContainer containerBorder">
          <div className="jobText">
            <div className="mainJobTitle desktopTitle">
              <p>Posted on 23rd of July 2023</p>
              <h1>Job Name</h1>
              <p className="subHeader">
                Full time | On Site <br /> Espoo | €35,000 annually
              </p>
            </div>
            <div className="description">
              <h2>Job Description</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="assignments">
              <h2>What you’ll do</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </li>
                <li>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </li>
              </ul>
            </div>
            <div className="need">
              <h2>What you’ll need</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </li>
                <li>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </li>
              </ul>
            </div>

            <SkillsGroup
              skills={[
                "MS Office",
                "Software skills",
                "Special skills",
                "Software skills",
                "Software skills",
                "Software Skills",
              ]}
            />

            <div className="contact">
              <h2>Contact Informrmation</h2>
              <p>
                Address:
                <br />
                Ut enim ad minim veniam,
                <br />
                Duis aute irure
                <br />
                Excepteur sint occaecat
                <br />
                Contact No. 00000000000
              </p>
            </div>

            <div className="actions">
              <div className="callToAction">
                <ApplyNow link="#" />
                <button className="bookmarkButton" onClick={() => {}}>
                  <img src="svg/bookmark.svg" alt="bookmark" />
                </button>
              </div>
            </div>
            <a href="#" className="profileReports">
              Report as offline or expired
            </a>
          </div>
          <Socials />
        </section>
        <section className="cards">
          <div className="profile containerBorder">
            <img
              src="pictures/company-logo.jpg"
              alt=""
              className="profilePicture"
            />

            <h2 className="profileName">University of Eastern Finland</h2>

            <a href="#" className="profileWebsite">
              <img src={LinkSVG} alt="link icon" />
              <p>Visit Website</p>
            </a>

            <p className="profileDescription">
              write Company tag line or description or something about it
              in-short hbabcbcb bdjbh hshbbs fhbfb bh hgsb
            </p>

            <ApplyNow link="#" />

            <a href="#" className="profileReports">
              <p>Report as offline or expired</p>
            </a>
          </div>
          <div className="tools containerBorder">
            <h2>Tools</h2>
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
            <h2>Similar Jobs</h2>
            <ul>
              <li>
                <a href="#" className="none">
                  <img src="pictures/Lowes.jpg" alt="" width={"57px"} />
                  <div className="similarJobTitle">
                    <p className="company">Lowe's Companies, Inc</p>
                    <p className="jobTitle">Human Resources Services</p>
                    <p className="location">Helsinki, Finland</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="none">
                  <img src="pictures/Lowes.jpg" alt="" width={"57px"} />
                  <div className="similarJobTitle">
                    <p className="company">Lowe's Companies, Inc</p>
                    <p className="jobTitle">Human Resources Services</p>
                    <p className="location">Helsinki, Finland</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="none">
                  <img src="pictures/Lowes.jpg" alt="" width={"57px"} />
                  <div className="similarJobTitle">
                    <p className="company">Lowe's Companies, Inc</p>
                    <p className="jobTitle">Human Resources Services</p>
                    <p className="location">Helsinki, Finland</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className="none">
                  <img src="pictures/Lowes.jpg" alt="" width={"57px"} />
                  <div className="similarJobTitle">
                    <p className="company">Lowe's Companies, Inc</p>
                    <p className="jobTitle">Human Resources Services</p>
                    <p className="location">Helsinki, Finland</p>
                  </div>
                </a>
              </li>
            </ul>

            <a href="#" className="tryOut">
              <img src="pictures/left-Arrow.svg" alt="" className="arrow" />
              <p>View all recommendations</p>
            </a>
          </div>
        </section>
        <section id="toolsSection">
          <h2>Tools</h2>
          <ul>
            <li>Profession Guide</li>
            <li>Job Application Guide</li>
            <li>Employement Guide</li>
            <li>Salary information</li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default JobDetails;
