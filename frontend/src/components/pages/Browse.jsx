import { useEffect, useState } from "react";
import "../css/browse.css";
import SearchBar from "./Browse/SearchBar";
import Footer from "./Browse/Footer";
import JobCard from "./Browse/JobCard";
import Filter from "./Browse/Filter";
import CompareBox from "./Browse/CompareBox";
import AdCard from "./Browse/AdCard";

const Browse = () => {
  const [searchInput, setSearchInput] = useState("");

  const [comparedJobs, setComparedJobs] = useState([])

  useEffect(() => {
    if (comparedJobs.length > 4) {
      setComparedJobs(comparedJobs.slice(1, 3))
    }
  }, [comparedJobs]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
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
        <div className="button-sort">
          Järjestä{" "}
          <img
            className="sort-dropdown-arrow"
            src={"/pictures/expand-arrow.png"}
          />
        </div>
      </div>
      <div className="job-and-filter-container">
        <Filter />
        <div className="job-container">
          <JobCard data={{...exampleData, id: 1}} comparedJobs={comparedJobs} setComparedJobs={setComparedJobs} />
          <JobCard data={{...exampleData, id: 2}} comparedJobs={comparedJobs} setComparedJobs={setComparedJobs} />
          <AdCard text="Näillä kymmenellä alalla on eniten töitä tällä hetkellä." />
          <JobCard data={{...exampleData, id: 3}} comparedJobs={comparedJobs} setComparedJobs={setComparedJobs} />
          <JobCard data={{...exampleData, id: 4}} comparedJobs={comparedJobs} setComparedJobs={setComparedJobs} />
          <JobCard data={{...exampleData, id: 5}} comparedJobs={comparedJobs} setComparedJobs={setComparedJobs} />
        </div>
      </div>
      <Footer />
      <CompareBox comparables={comparedJobs} />
    </div>
  );
};

export default Browse;
