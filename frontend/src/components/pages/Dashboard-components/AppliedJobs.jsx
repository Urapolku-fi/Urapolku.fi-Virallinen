import "../../css/Dashboard/AppliedJobs.css";
const AppliedJobs = () => {
  return (
    <section className="AppliedJobs-frame">
      <h2 className="AppliedJobs-title">Applied Jobs</h2>
      <div className="AppliedJobs-Card">
        <div className="AppliedJobs-circle-image">
          <img
            className="AppliedJobs-card-image"
            src={"/pictures/temp/Lowes.png"}
            alt=""
          />
        </div>
        <div className="AppliedJobs-card-text-content">
          <h2 className="AppliedJobs-card-title">Lowe's Companies, Inc</h2>
          <p>Human Resources Services</p>
          <p className="AppliedJobs-card-location">Helsinki, Finland</p>
        </div>
      </div>
      <div className="AppliedJobs-Card">
        <div className="AppliedJobs-circle-image">
          <img
            className="AppliedJobs-card-image"
            src={"/pictures/temp/Crafting.png"}
            alt=""
          />
        </div>
        <div className="AppliedJobs-card-text-content">
          <h2 className="AppliedJobs-card-title">
            Crafting More Than Words: Unveiling the..
          </h2>
          <p>Article</p>
        </div>
      </div>
      <div className="AppliedJobs-Card">
        <div className="AppliedJobs-circle-image">
          <img
            className="AppliedJobs-card-image"
            src={"/pictures/temp/Twitter-eclipse.png"}
            alt=""
          />
        </div>
        <div className="AppliedJobs-card-text-content">
          <h2 className="AppliedJobs-card-title">
            Why Twitter’s rebrand to ‘X’ feels shocking...{" "}
          </h2>
          <p>News</p>
        </div>
      </div>
      <div className="AppliedJobs-Card">
        <div className="AppliedJobs-circle-image">
          <img
            className="AppliedJobs-card-image"
            src={"/pictures/temp/mcdonalds-eclipse.png"}
            alt=""
          />
        </div>
        <div className="AppliedJobs-card-text-content">
          <h2 className="AppliedJobs-card-title">McDonald's</h2>
          <p>Restaurant</p>
          <p className="AppliedJobs-card-location">Chicago, Illinois</p>
        </div>
      </div>
      <div className="AppliedJobs-View-all-recommendations">
        <img
          src="/pictures/Arrow-left-alt.png"
          alt=""
          width="16px"
          height="8px"
        />
        <h2 className="AppliedJobs-footer-title">View all recommendations</h2>
      </div>
    </section>
  );
};
export default AppliedJobs;
