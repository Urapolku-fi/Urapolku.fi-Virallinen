import Bell from '../../../assets/bell.svg';
import Delete from '../../../assets/delete.svg';
import '../../css/Favorites/jobCard.css';

export default function JobCard({ role, company, jobType, location, description, ends }) {
  return (
    <div className="glowing job-card">
      <div className="company-picture"></div>
      <div className="job-info-container">
        <h1 className="role-text">{role}</h1>
        <h2 className="company-text">{company}</h2>

        <p className="meta-text">
          {jobType} | {location} | {ends}
        </p>
        <p className="description-text">{description}</p>
      </div>
      <div className="buttons-container">
        <button>View Details</button>
        <div className="icon-button-container">
          <button>
            <img src={Bell} alt="bell" />
          </button>
          <button>
            <img src={Delete} alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
}
