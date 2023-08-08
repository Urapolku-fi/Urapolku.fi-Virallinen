import LeftBar from "./ProfileCompletion/LeftBarProfile";
import SkipButton from "./ProfileCompletion/SkipButton";
import CompleteButton from "./ProfileCompletion/CompleteButton";
import ProgressBar from "./ProfileCompletion/progressBar";
import UrapolkuLogo from "./ProfileCompletion/UrapolkuLogoText";
import "../css/profileCompletionThree.css";
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
  const openFuncs = [
    setOpenStartYear,
    setOpenEndYear,
    setOpenEndMonth,
    setOpenStartMonth,
    setOpenEmployment,
    setOpenLocationType,
  ];

  const handleOpen = (opener) => {
    opener((prevState) => !prevState); // Toggle the state
    openFuncs.filter((func) => func !== opener).forEach((func) => func(false)); // Close other states
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

  const handleSelectClick = (event, targetClassName, setOpenState) => {
    const dataValue = event.currentTarget.textContent;
    console.log(dataValue);
    const select = document.querySelector(`.${targetClassName}`);
    console.log();
    select.textContent = dataValue;
    setOpenState(false);
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
            <button onClick={() => handleOpen(setOpenEmployment)}>
              <p className="Employment-type-text">Please select</p>
              <img
                className={`Expand-more ${openEmployment ? "up" : ""}`}
                src="pictures/expand-more.png"
                alt=""
              />
            </button>
            {openEmployment && (
              <div className="Employment-type-content">
                <p
                  className="Employment-type"
                  onClick={(event) =>
                    handleSelectClick(
                      event,
                      "Employment-type-text",
                      setOpenEmployment
                    )
                  }
                >
                  Full-time
                </p>
                <p
                  className="Employment-type"
                  onClick={(event) =>
                    handleSelectClick(
                      event,
                      "Employment-type-text",
                      setOpenEmployment
                    )
                  }
                >
                  Part-time
                </p>
                <p
                  className="Employment-type"
                  onClick={(event) =>
                    handleSelectClick(
                      event,
                      "Employment-type-text",
                      setOpenEmployment
                    )
                  }
                >
                  Freelance
                </p>
                <p
                  className="Employment-type"
                  onClick={(event) =>
                    handleSelectClick(
                      event,
                      "Employment-type-text",
                      setOpenEmployment
                    )
                  }
                >
                  Contract
                </p>
                <p
                  className="Employment-type"
                  onClick={(event) =>
                    handleSelectClick(
                      event,
                      "Employment-type-text",
                      setOpenEmployment
                    )
                  }
                >
                  Self-employed
                </p>
                <p
                  className="Employment-type"
                  onClick={(event) =>
                    handleSelectClick(
                      event,
                      "Employment-type-text",
                      setOpenEmployment
                    )
                  }
                >
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
            <button onClick={() => handleOpen(setOpenLocationType)}>
              <p className="Location-text">Please select</p>
              <img
                className={`Expand-more ${openLocationType ? "up" : ""}`}
                src="pictures/expand-more.png"
                alt=""
              />
            </button>
            {openLocationType && (
              <div className="Location-type-content">
                <p
                  className="Location-type"
                  onClick={(event) =>
                    handleSelectClick(
                      event,
                      "Location-text",
                      setOpenLocationType
                    )
                  }
                >
                  On-site
                </p>
                <p
                  className="Location-type"
                  onClick={(event) =>
                    handleSelectClick(
                      event,
                      "Location-text",
                      setOpenLocationType
                    )
                  }
                >
                  Hybrid
                </p>
                <p
                  className="Location-type"
                  onClick={(event) =>
                    handleSelectClick(
                      event,
                      "Location-text",
                      setOpenLocationType
                    )
                  }
                >
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
              onChange={() => handleOpen(setEndDateVisible)}
            />
            <p>I am currently working on this role </p>
          </div>

          <div className="Start-date">
            <p>Start-date</p>
            <div className="Start-date-buttons">
              <div className="Month">
                <button
                  className=""
                  onClick={() => handleOpen(setOpenStartMonth)}
                >
                  <p className="Start-Month">Month</p>
                  <img
                    className={`Expand-more ${openStartMonth ? "up" : ""}`}
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
                        onClick={(event) =>
                          handleSelectClick(
                            event,
                            "Start-Month",
                            setOpenStartMonth
                          )
                        }
                      >
                        {month}
                      </p>
                    ))}
                  </div>
                )}
              </div>
              <div className="Year">
                <button onClick={() => handleOpen(setOpenStartYear)}>
                  <p className="Start-Year">Year</p>
                  <img
                    className={`Expand-more ${openStartYear ? "up" : ""}`}
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
                        onClick={(event) =>
                          handleSelectClick(
                            event,
                            "Start-Year",
                            setOpenStartYear
                          )
                        }
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
                  <button onClick={() => handleOpen(setOpenEndMonth)}>
                    <p className="End-Month">Month</p>
                    <img
                      className={`Expand-more ${openEndMonth ? "up" : ""}`}
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
                          onClick={(event) =>
                            handleSelectClick(
                              event,
                              "End-Month",
                              setOpenEndMonth
                            )
                          }
                        >
                          {month}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
                <div className="Year">
                  <button onClick={() => handleOpen(setOpenEndYear)}>
                    <p className="End-Year">Year</p>
                    <img
                      className={`Expand-more ${openEndYear ? "up" : ""}`}
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
                          onClick={(event) =>
                            handleSelectClick(event, "End-Year", setOpenEndYear)
                          }
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
