import { useState } from "react";
import "../../css/Browse/jobCard.css";
import CheckBox from "./CheckBox";
import BookmarkButton from "./BookmarkButton";
import objectShallowEqual from "../../../helpers/objectShallowEqual";

const JobCard = ({ data, comparedJobs, setComparedJobs }) => {
  const [compareToggled, setCompareToggled] = useState(false);

  const toggleCompareToggled = () => {
    console.log(data);
    setCompareToggled(!compareToggled);
    if (!compareToggled) {
      setComparedJobs([...comparedJobs, data]);
    } else {
      setComparedJobs(
        comparedJobs.filter((e) => {
          !objectShallowEqual(e, data);
        })
      );
    }
  };

  return (
    <div className="jobcard" key={data.id}>
      <div className="jobcard-child" />
      <div className="nurse">{data.title}</div>
      <div className="jobcard-info-welfare-container">
        <span className="jobcard-info-welfare-container1">
          <p className="jobcard-info">{`Western Uusimaa`}</p>
          <p className="jobcard-info">{data.area}</p>
        </span>
      </div>
      <div className="health-care-full-container">
        <span className="jobcard-info-welfare-container1">
          <p className="jobcard-info">{data.field}</p>
          <p className="jobcard-info">{data.type}</p>
          <p className="jobcard-info">{data.salary}</p>
          <p className="jobcard-info">{data.location}</p>
        </span>
      </div>
      <div className="see-details-wrapper">
        <div className="see-details">Lue lisää</div>
      </div>
      <img
        className="jobcard-item"
        alt=""
        src={"/pictures/job-example-image.png"}
      />
      <CheckBox
        text="Lisää vertailtavaksi"
        toggled={compareToggled}
        onClick={toggleCompareToggled}
        forJobcard={true}
      />
      <BookmarkButton />
    </div>
  );
};

export default JobCard;
