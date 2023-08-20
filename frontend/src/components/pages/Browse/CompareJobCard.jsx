import "../../css/Browse/CompareJobCard.css";

const CompareJobCard = ({
  data = null,
  empty = false,
  removeComparedJobById,
}) => {
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
          <div className="nurse">{data.title}</div>
          <div className="full-time-container">
            <span className="full-time-container1">
              <p className="full-time">{data.type}</p>
              <p className="full-time">{data.location}</p>
            </span>
          </div>
          <div
            className="compare-job-card-inner"
            onClick={() => {
              removeComparedJobById(data.id);
            }}
          />
          <img
            className="group-icon"
            alt=""
            src={"svg/close-icon.svg"}
            onClick={() => {
              removeComparedJobById(data.id);
            }}
          />
        </div>
      )}
    </>
  );
};

export default CompareJobCard;