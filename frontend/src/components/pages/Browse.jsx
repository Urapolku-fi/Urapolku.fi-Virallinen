import { useEffect, useState } from "react";
import "../css/browse.css";
import SearchBar from "./Browse/SearchBar";
import Footer from "./Browse/Footer";
import JobCard from "./Browse/JobCard";
import Filter from "./Browse/Filter";
import CompareBox from "./Browse/CompareBox";
import AdCard from "./Browse/AdCard";
import SingleOptionDropdown from "./Browse/SingleOptionDropdown";

const loremIpsum = [
  ["hello"],
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "curabitur",
  "vel",
  "hendrerit",
  "libero",
  "eleifend",
  "blandit",
  "nunc",
  "ornare",
  "odio",
  "ut",
  ["damn"],
  "orci",
  "gravida",
  "imperdiet",
  "nullam",
  "purus",
  "lacinia",
  "a",
  "pretium",
  "quis",
  "congue",
  "praesent",
  "sagittis",
  "laoreet",
  "auctor",
  "mauris",
  "non",
  "velit",
  "eros",
  ["world"],
  "dictum",
  "proin",
  "accumsan",
  "sapien",
  "nec",
  "massa",
  "volutpat",
  "venenatis",
  "sed",
  "eu",
  "molestie",
  "lacus",
  "quisque",
  "porttitor",
  "ligula",
  "dui",
  "mollis",
  "tempus",
];

const defaultFiltersState = {
  location: [
    loremIpsum,
    Array(loremIpsum.filter((e) => typeof e === "string").length).fill(false),
  ],
  jobType: [
    ["Full Time", true],
    ["Part Time", false],
    ["Internship", false],
    ["Apprenticeship", false],
  ],
  workType: [
    ["On-site", true],
    ["Hybrid", false],
    ["Remote", false],
    ["Custom hours", false],
  ],
  industry: [
    loremIpsum,
    Array(loremIpsum.filter((e) => typeof e === "string").length).fill(false),
  ],
  company: [
    loremIpsum,
    Array(loremIpsum.filter((e) => typeof e === "string").length).fill(false),
  ],
  language: [
    ["English", true],
    ["Swedish", false],
    ["Finnish", false],
  ],
  role: [
    loremIpsum,
    Array(loremIpsum.filter((e) => typeof e === "string").length).fill(false),
  ],
  salary: [0, 15000],
  education: [
    "Bachelor",
    "Master",
    "Licentiate",
    "Doctor",
    "Upper secondary school",
    "Vocational school",
    "Comprehensive school",
    "No education",
    "Certified course",
  ],
};

const Browse = () => {
  const [searchInput, setSearchInput] = useState("");

  const [comparedJobs, setComparedJobs] = useState([]);

  const [filtersState, setFiltersState] = useState(defaultFiltersState);

  useEffect(() => {
    if (comparedJobs.length > 4) {
      setComparedJobs([...comparedJobs].slice(1, 4));
    }
  }, [comparedJobs]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const clearFilters = () => {
    setFiltersState(defaultFiltersState);
  };

  const clearComparables = () => {
    setComparedJobs([]);
  };

  const removeComparedJobById = (id) => {
    setComparedJobs(comparedJobs.filter((e) => e.id !== id));
  };

  const exampleData = {
    title: "Nurse",
    area: "Welfare Area",
    field: "Health Care",
    type: "Full time | On Site",
    salary: "€35,000 annually",
    location: "Espoo",
  };

  return (
    <div className="Browse-wrapper">
      <div className="hero-stack">
        <div className="content">
          <div className="header-looking-for-job">Etsitkö työpaikkaa?</div>
          <div className="paragraph-wrapper">
            <div className="text-ipsum">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        <SearchBar searchInput={searchInput} handleInputChange={handleChange} />
      </div>
      <div className="job-count-and-sort-container">
        <div className="text-job-count">
          Näytetään 500 työtä alalla terveydenhuolto
        </div>
        <SingleOptionDropdown
          options={["päiväys", "osuvuus"]}
          forSort
          childComponent={
            <div className="button-sort">
              Järjestä{" "}
              <img
                className="sort-dropdown-arrow"
                src={"/pictures/expand-arrow.png"}
              />
            </div>
          }
        />
      </div>

      <div className="job-and-filter-container">
        <Filter
          filtersState={filtersState}
          setFiltersState={setFiltersState}
          clearFilters={clearFilters}
        />
        <div className="job-container">
          <JobCard
            data={{ ...exampleData, id: 1 }}
            comparedJobs={comparedJobs}
            setComparedJobs={setComparedJobs}
          />
          <JobCard
            data={{ ...exampleData, id: 2 }}
            comparedJobs={comparedJobs}
            setComparedJobs={setComparedJobs}
          />
          <AdCard text="Näillä kymmenellä alalla on eniten töitä tällä hetkellä." />
          <JobCard
            data={{ ...exampleData, id: 3 }}
            comparedJobs={comparedJobs}
            setComparedJobs={setComparedJobs}
          />
          <JobCard
            data={{ ...exampleData, id: 4 }}
            comparedJobs={comparedJobs}
            setComparedJobs={setComparedJobs}
          />
          <JobCard
            data={{ ...exampleData, id: 5 }}
            comparedJobs={comparedJobs}
            setComparedJobs={setComparedJobs}
          />
        </div>
      </div>
      <Footer />
      {
        <CompareBox
          comparables={comparedJobs}
          clearComparables={clearComparables}
          hidden={comparedJobs.length === 0}
          removeComparedJobById={removeComparedJobById}
        />
      }
    </div>
  );
};

export default Browse;
