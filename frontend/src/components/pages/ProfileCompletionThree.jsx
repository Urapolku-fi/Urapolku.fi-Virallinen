import LeftBar from "./ProfileCompletion/LeftBarProfile";
import SkipButton from "./ProfileCompletion/SkipButton";
import CompleteButton from "./ProfileCompletion/CompleteButton";
import ProgressBar from "./ProfileCompletion/progressBar";
import UrapolkuLogo from "./ProfileCompletion/UrapolkuLogoText";
import "../css/ProfileCompletionThree.css";
import { useState } from "react";
function ProfileCreateThree() {
  const [openEmployment, setOpenEmployment] = useState(false);
  const [openLocationType, setOpenLocationType] = useState(false);
  const [endDateVisible, setEndDateVisible] = useState(true);
  const [openStartMonth, setOpenStartMonth] = useState(false);
  const [openEndMonth, setOpenEndMonth] = useState(false);
  const [openStartYear, setOpenStartYear] = useState(false);
  const [openEndYear, setOpenEndYear] = useState(false);

  // All setOpens
  const handleEmploymentType = () => {
    setOpenEmployment(!openEmployment);
    setOpenLocationType(false);
  };
  const handleLocationType = () => {
    setOpenLocationType(!openLocationType);
    setOpenEmployment(false);
  };
  const handleToggleEndDate = () => {
    setEndDateVisible(!endDateVisible);
  };
  const handleStartMonth = () => {
    setOpenStartMonth(!openStartMonth);
    setOpenEndYear(false);
    setOpenEndMonth(false);
    setOpenStartYear(false);
    setOpenLocationType(false);
  };
  const handleEndMonth = () => {
    setOpenEndMonth(!openEndMonth);
    setOpenEndYear(false);
    setOpenStartMonth(false);
    setOpenStartYear(false);
    setOpenLocationType(false);
  };
  const handleStartYear = () => {
    setOpenStartYear(!openStartYear);
    setOpenEndYear(false);
    setOpenEndMonth(false);
    setOpenStartMonth(false);
  };
  const handleEndYear = () => {
    setOpenEndYear(!openEndYear);
    setOpenEndMonth(false);
    setOpenStartMonth(false);
    setOpenStartYear(false);
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

  // Pushes every year from 1930 to 2023 to years list
  const Years = [];
  const max = 2023;
  const min = 1930;
  for (let i = max; i >= min; i--) {
    Years.push(i);
  }

  // These functions gets the text-content when element children is clicked
  // It stores the value into DataValue

  const handleEmploymentClick = (event) => {
    const EmploymentDataValue = event.currentTarget.textContent;
    const select = document.querySelector(".Employment-type-text");
    select.textContent = EmploymentDataValue;
    setOpenEmployment(false);
  };

  const handleLocationClick = (event) => {
    const LocationDataValue = event.currentTarget.textContent;
    const select = document.querySelector(".Location-text");
    select.textContent = LocationDataValue;
    setOpenLocationType(false);
  };

  const handleStartMonthClick = (event) => {
    const StartMonthDataValue = event.currentTarget.textContent;
    const select = document.querySelector(".Start-Month");
    select.textContent = StartMonthDataValue;
    setOpenStartMonth(false);
  };

  const handleStartYearClick = (event) => {
    const StartYearDataValue = event.currentTarget.textContent;
    const select = document.querySelector(".Start-Year");
    select.textContent = StartYearDataValue;
    setOpenStartYear(false);
  };
  const handleEndMonthClick = (event) => {
    const EndMonthtDataValue = event.currentTarget.textContent;
    const select = document.querySelector(".End-Month");
    select.textContent = EndMonthtDataValue;
    setOpenEndMonth(false);
  };

  const handleEndYearClick = (event) => {
    const EndYearDataValue = event.currentTarget.textContent;
    const select = document.querySelector(".End-Year");
    select.textContent = EndYearDataValue;
    setOpenEndYear(false);
  };

  const nextPage = () => {
    // User placed data will save and move to next page
    window.location.href = "/profilethree";
  };
  const skipPage = () => {
    // No data saved, just skipped
    window.location.href = "/profilethree";
  };

  return (
    <div id="ProfileCompletion-Wrapper">
      <LeftBar />
      <div className="Profile-completion-three-right">
        <div className="Skipbutton-wrapper" onClick={skipPage}>
          <SkipButton />
        </div>
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
              <p className="Employment-type-text">Please select</p>
              <img
                className="Expand-more"
                src="pictures/expand-more.png"
                alt=""
              />
            </button>
            {openEmployment && (
              <div className="Employment-type-content">
                <p className="Employment-type" onClick={handleEmploymentClick}>
                  Full-time
                </p>
                <p className="Employment-type" onClick={handleEmploymentClick}>
                  Part-time{" "}
                </p>
                <p className="Employment-type" onClick={handleEmploymentClick}>
                  Freelance
                </p>
                <p className="Employment-type" onClick={handleEmploymentClick}>
                  Contract
                </p>
                <p className="Employment-type" onClick={handleEmploymentClick}>
                  Self-employed
                </p>
                <p className="Employment-type" onClick={handleEmploymentClick}>
                  Internship
                </p>
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
              <p className="Location-text">Please select</p>
              <img
                className="Expand-more"
                src="pictures/expand-more.png"
                alt=""
              />
            </button>
            {openLocationType && (
              <div className="Location-type-content">
                <p className="Location-type" onClick={handleLocationClick}>
                  On-site
                </p>
                <p className="Location-type" onClick={handleLocationClick}>
                  Hybrid
                </p>
                <p className="Location-type" onClick={handleLocationClick}>
                  Remote
                </p>
              </div>
            )}
          </div>
          <div className="Currently-working">
            <input
              className="checkbox"
              type="checkbox"
              name=""
              onChange={handleToggleEndDate}
            />
            <p>I am currently working on this role </p>
          </div>

          <div className="Start-date">
            <p>Start-date</p>
            <div className="Start-date-buttons">
              <div className="Month">
                <button className="" onClick={handleStartMonth}>
                  <p className="Start-Month">Month</p>
                  <img
                    className="Expand-more"
                    src="pictures/expand-more.png"
                    alt=""
                  />
                </button>
                {openStartMonth && (
                  <div className="Month-content">
                    {Months.map((month) => (
                      <p
                        key={month}
                        data-value={month}
                        onClick={handleStartMonthClick}
                      >
                        {month}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <div className="Year">
                <button onClick={handleStartYear}>
                  <p className="Start-Year">Year</p>
                  <img
                    className="Expand-more"
                    src="pictures/expand-more.png"
                    alt=""
                  />
                </button>
                {openStartYear && (
                  <div className="Year-content">
                    {Years.map((Year) => (
                      <p
                        key={Year}
                        data-value={Year}
                        onClick={handleStartYearClick}
                      >
                        {Year}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          {endDateVisible && (
            <div className="End-date">
              <p>End-date</p>
              <div className="End-date-buttons">
                <div className="Month">
                  <button onClick={handleEndMonth}>
                    <p className="End-Month">Month</p>
                    <img
                      className="Expand-more"
                      src="pictures/expand-more.png"
                      alt=""
                    />
                  </button>
                  {openEndMonth && (
                    <div className="Month-content">
                      {Months.map((month) => (
                        <p
                          key={month}
                          data-value={month}
                          onClick={handleEndMonthClick}
                        >
                          {month}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                <div className="Year">
                  <button onClick={handleEndYear}>
                    <p className="End-Year">Year</p>
                    <img
                      className="Expand-more"
                      src="pictures/expand-more.png"
                      alt=""
                    />
                  </button>
                  {openEndYear && (
                    <div className="Year-content">
                      {Years.map((Year) => (
                        <p
                          key={Year}
                          data-value={Year}
                          onClick={handleEndYearClick}
                        >
                          {Year}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className="Bottom">
            <div className="Finish-button-wrapper" onClick={nextPage}>
              <CompleteButton />
            </div>
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCreateThree;
