import { useState } from "react";
import "../../css/Browse/jobCard.css";
import CheckBox from "./CheckBox";
import BookmarkButton from "./BookmarkButton";

const JobCard = () => {
  const [compareToggled, setCompareToggled] = useState(false);

  const toggleCompareToggled = () => {
    setCompareToggled(!compareToggled);
  }

  return (
    <div className="jobcard">
      <div className="jobcard-child" />
      <div className="nurse">Nurse</div>
      <div className="jobcard-info-welfare-container">
        <span className="jobcard-info-welfare-container1">
          <p className="jobcard-info">{`Western Uusimaa`}</p>
          <p className="jobcard-info">Welfare Area</p>
        </span>
      </div>
      <div className="health-care-full-container">
        <span className="jobcard-info-welfare-container1">
          <p className="jobcard-info">Health Care</p>
          <p className="jobcard-info">Full time | On Site</p>
          <p className="jobcard-info">€35,000 annually</p>
          <p className="jobcard-info">Espoo</p>
        </span>
      </div>
      <div className="see-details-wrapper">
        <div className="see-details">Lue lisää</div>
      </div>
      <img className="jobcard-item" alt="" src={"/pictures/job-example-image.png"} />
      <CheckBox text="Lisää vertailtavaksi" toggled={compareToggled} onClick={toggleCompareToggled} forJobcard={true} />
      <BookmarkButton />
    </div>
  );
};

export default JobCard;
