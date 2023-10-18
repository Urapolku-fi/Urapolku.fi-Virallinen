import '../css/favorites.css';
import Filter from './Browse/Filter';
import { useState } from 'react';
import Bell from '../../assets/bell.svg';
import Delete from '../../assets/delete.svg';

const mocData = [
  {
    role: 'Job Role',
    company: 'Company Name',
    jobType: 'Full Time',
    location: 'Location',
    description:
      'Designing logos, brand identities, and marketing materials to establish and maintain a consistent visual identity for a company or organization.',
    ends: 'Ends',
  },
  {
    role: 'Job Role',
    company: 'Company Name',
    jobType: 'Full Time',
    location: 'Location',
    description:
      'Designing logos, brand identities, and marketing materials to establish and maintain a consistent visual identity for a company or organization.',
    ends: 'Ends',
  },
  {
    role: 'Job Role',
    company: 'Company Name',
    jobType: 'Full Time',
    location: 'Location',
    description:
      'Designing logos, brand identities, and marketing materials to establish and maintain a consistent visual identity for a company or organization.',
    ends: 'Ends',
  },
  {
    role: 'Job Role',
    company: 'Company Name',
    jobType: 'Full Time',
    location: 'Location',
    description:
      'Designing logos, brand identities, and marketing materials to establish and maintain a consistent visual identity for a company or organization.',
    ends: 'Ends',
  },
];

const loremIpsum = [
  ['hello'],
  'lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'curabitur',
  'vel',
  'hendrerit',
  'libero',
  'eleifend',
  'blandit',
  'nunc',
  'ornare',
  'odio',
  'ut',
  ['damn'],
  'orci',
  'gravida',
  'imperdiet',
  'nullam',
  'purus',
  'lacinia',
  'a',
  'pretium',
  'quis',
  'congue',
  'praesent',
  'sagittis',
  'laoreet',
  'auctor',
  'mauris',
  'non',
  'velit',
  'eros',
  ['world'],
  'dictum',
  'proin',
  'accumsan',
  'sapien',
  'nec',
  'massa',
  'volutpat',
  'venenatis',
  'sed',
  'eu',
  'molestie',
  'lacus',
  'quisque',
  'porttitor',
  'ligula',
  'dui',
  'mollis',
  'tempus',
];

const defaultFiltersState = {
  location: [loremIpsum, Array(loremIpsum.filter((e) => typeof e === 'string').length).fill(false)],
  jobType: [
    ['Full Time', true],
    ['Part Time', false],
    ['Internship', false],
    ['Apprenticeship', false],
  ],
  workType: [
    ['On-site', true],
    ['Hybrid', false],
    ['Remote', false],
    ['Custom hours', false],
  ],
  industry: [loremIpsum, Array(loremIpsum.filter((e) => typeof e === 'string').length).fill(false)],
  company: [loremIpsum, Array(loremIpsum.filter((e) => typeof e === 'string').length).fill(false)],
  language: [
    ['English', true],
    ['Swedish', false],
    ['Finnish', false],
  ],
  role: [loremIpsum, Array(loremIpsum.filter((e) => typeof e === 'string').length).fill(false)],
  salary: [0, 15000],
  education: [
    'Bachelor',
    'Master',
    'Licentiate',
    'Doctor',
    'Upper secondary school',
    'Vocational school',
    'Comprehensive school',
    'No education',
    'Certified course',
  ],
};

function Favorites() {
  const [filtersState, setFiltersState] = useState(defaultFiltersState);

  const clearFilters = () => {
    setFiltersState(defaultFiltersState);
  };

  return (
    <main>
      <div className="hero-section">
        <h1>Saved Jobs</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore
        </p>
      </div>

      <div className="filter-and-jobs-container">
        <div>
          <h2 className="text-job-count">{mocData.length} saved jobs</h2>
          <div className="filter-container">
            <Filter
              filtersState={filtersState}
              setFiltersState={setFiltersState}
              clearFilters={clearFilters}
            />
          </div>
        </div>

        <div className="job-card-container">
          {mocData.map((job, i) => (
            <JobCard key={`${job.name}-${i}`} {...job} />
          ))}
        </div>
      </div>
    </main>
  );
}

function JobCard({ role, company, jobType, location, description, ends }) {
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

export default Favorites;
