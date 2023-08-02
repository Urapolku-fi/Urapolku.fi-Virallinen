import LeftBar from "../ProfileCompletion/LeftBarProfile";
import SkipButton from "../ProfileCompletion/SkipButton";
import NextButton from "../ProfileCompletion/nextButton";
import ProgressBar from "../ProfileCompletion/progressBar";
import UrapolkuLogo from "../ProfileCompletion/UrapolkuLogoText";
import "../css/ProfileCompletionThree.css";
import { useState } from "react";
function ProfileCompletionTwo() {
  const [openEmployment, setOpenEmployment] = useState(false);
  const [openLocationType, setOpenLocationType] = useState(false);

  const [openStartMonth, setOpenStartMonth] = useState(false);
  const [openEndMonth, setOpenEndMonth] = useState(false);
  const [openStartYear, setOpenStartYear] = useState(false);
  const [openEndYear, setOpenEndYear] = useState(false);
  const handleEmploymentType = () => {
    setOpenEmployment(!openEmployment);
    setOpenLocationType(false);
  };
  const handleLocationType = () => {
    setOpenLocationType(!openLocationType);
    setOpenEmployment(false);
  };
  const handleStartMonth = () => {
    setOpenStartMonth(!openStartMonth);
  };
  const handleEndMonth = () => {
    setOpenEndMonth(!openEndMonth);
  };
  const handleStartYear = () => {
    setOpenStartYear(!openStartYear);
  };
  const handleEndYear = () => {
    setOpenEndYear(!openEndYear);
  };
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const Years = [];
  const max = 2023;
  const min = 1930;
  for (let i = max; i >= min; i--) {
    Years.push(i);
  }
  return (
    <div id="ProfileCompletion-Wrapper">
      <LeftBar />
      <div className="Profile-completion-three-right">
        <SkipButton />
        <div className="Header-logo">
          <UrapolkuLogo />
        </div>
        <div className="Profile-completion-three-content">
          <div className="Header-text">
            <h3>Finally, your work history</h3>
          </div>
          <div className="Title">
            <p>Title</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="Ex. Project Manager"
            />
          </div>
          <div className="Employment-type-dropdown">
            <p>Employment type</p>
            <button onClick={handleEmploymentType}>
              <p>Please select</p>
              <img
                className="Expand-more"
                src="pictures/expand-more.png"
                alt=""
              />
            </button>
            {openEmployment && (
              <div className="Employment-type-content">
                <p className="Employment-type">Full-time</p>
                <p className="Employment-type">Part-time</p>
                <p className="Employment-type">Freelance</p>
                <p className="Employment-type">Contract</p>
                <p className="Employment-type">Self-employed</p>
                <p className="Employment-type">Internship</p>
              </div>
            )}
          </div>
          <div className="Location">
            <p>Location</p>
            <input type="text" name="" id="" placeholder="Ex. Helsinki" />
          </div>
          <div className="Location-type-dropdown">
            <p>Location type</p>
            <button onClick={handleLocationType}>
              <p>Please select</p>
              <img
                className="Expand-more"
                src="pictures/expand-more.png"
                alt=""
              />
            </button>
            {openLocationType && (
              <div className="Location-type-content">
                <p>On-site</p>
                <p>Hybrid</p>
                <p>Remote</p>
              </div>
            )}
          </div>
          <div className="Currently-working">
            <input className="checkbox" type="checkbox" name="" id="" />
            <p>I am currently working on this role </p>
          </div>

          <div className="Start-date">
            <p>Start-date</p>
            <div className="Start-date-buttons">
              <div className="Month">
                <button className="" onClick={handleStartMonth}>
                  <p>Month</p>
                  <img
                    className="Expand-more"
                    src="pictures/expand-more.png"
                    alt=""
                  />
                </button>
                {openStartMonth && (
                  <div className="Month-content">
                    {Months.map((month) => (
                      <p key={month} data-value={month}>
                        {month}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <div className="Year">
                <button onClick={handleStartYear}>
                  <p>Year</p>
                  <img
                    className="Expand-more"
                    src="pictures/expand-more.png"
                    alt=""
                  />
                </button>
                {openStartYear && (
                  <div className="Year-content">
                    {Years.map((Year) => (
                      <p key={Year} data-value={Year}>
                        {Year}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="End-date">
            <p>End-date</p>
            <div className="End-date-buttons">
              <div className="Month">
                <button onClick={handleEndMonth}>
                  <p>Month</p>
                  <img
                    className="Expand-more"
                    src="pictures/expand-more.png"
                    alt=""
                  />
                </button>
                {openEndMonth && (
                  <div className="Month-content">
                    {Months.map((month) => (
                      <p key={month} data-value={month}>
                        {month}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <div className="Year">
                <button onClick={handleEndYear}>
                  <p>Year</p>
                  <img
                    className="Expand-more"
                    src="pictures/expand-more.png"
                    alt=""
                  />
                </button>
                {openEndYear && (
                  <div className="Year-content">
                    {Years.map((Year) => (
                      <p key={Year} data-value={Year}>
                        {Year}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="Bottom">
            <NextButton />
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCompletionTwo;
