import "../../css/Browse/CompareJobCard.css";

const CompareJobCard = ({ empty = false }) => {
  return (
    <>
      {empty ? (
        <div className="empty-compare-job-card" />
      ) : (
        <div className="compare-job-card">
          <div className="compare-job-card-child" />
          <img
            className="compare-job-card-item"
            alt=""
            src={"/pictures/job-example-image.png"}
          />
          <div className="nurse">Nurse</div>
          <div className="full-time-container">
            <span className="full-time-container1">
              <p className="full-time">Full time | On Site</p>
              <p className="full-time">Espoo</p>
            </span>
          </div>
          <div className="compare-job-card-inner" />
          <img className="group-icon" alt="" src={"svg/close-icon.svg"} />
        </div>
      )}
    </>
  );
};

export default CompareJobCard;
