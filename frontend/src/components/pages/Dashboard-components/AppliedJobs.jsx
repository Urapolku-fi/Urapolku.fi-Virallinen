import React from "react";
import "../../css/Dashboard/AppliedJobs.css";

function AppliedJobsCard({ imageSrc, title, description, location }) {
  return (
    <div className="AppliedJobs-Card">
      <div className="AppliedJobs-circle-image">
        <img className="AppliedJobs-card-image" src={imageSrc} alt="" />
      </div>
      <div className="AppliedJobs-card-text-content">
        <h2 className="AppliedJobs-card-title">{title}</h2>
        <p>{description}</p>
        {location && <p className="AppliedJobs-card-location">{location}</p>}
      </div>
    </div>
  );
}
function AppliedJobs({ appliedJobs }) {
  return (
    <section className="AppliedJobs-frame">
      <h2 className="AppliedJobs-title">Applied Jobs</h2>
      <div className="AppliedJobs-Cards">
        {appliedJobs.map((job, index) => (
          <AppliedJobsCard
            key={index}
            imageSrc={job.imageSrc}
            title={job.title}
            description={job.description}
            location={job.location}
          />
        ))}
      </div>
      <div className="AppliedJobs-View-all-recommendations">
        <img
          src="/pictures/Arrow-left-alt.png"
          alt=""
          width="16px"
          height="8px"
        />
        <a href="/" className="AppliedJobs-footer-link">
          <h2 className="AppliedJobs-footer-title">View all applied jobs</h2>
        </a>
      </div>
    </section>
  );
}

export default AppliedJobs;
