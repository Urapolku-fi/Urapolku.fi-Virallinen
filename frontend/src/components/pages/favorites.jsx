import '../css/favorites.css';
import Filter from './Browse/Filter';
import { useState } from 'react';
import TextInput from '../TextInput';

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

          </div>
        </div>
    </main>
  );
}

export default Favorites;
