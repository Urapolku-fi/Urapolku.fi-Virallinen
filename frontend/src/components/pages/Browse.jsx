import { useState } from "react";
import "../css/browse.css";
import SearchBar from "./Browse/SearchBar";
import Footer from "./Browse/Footer";
import JobCard from "./Browse/JobCard";
import Filter from "./Browse/Filter";
import CompareBox from "./Browse/CompareBox";
import CompareJobCard from "./Browse/CompareJobCard";

const Browse = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
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
        <div className="button-sort">Järjestä <img className="sort-dropdown-arrow" src={"/pictures/expand-arrow.png"} /></div>
      </div>
      <div className="job-and-filter-container">
        <Filter />
        <div className="job-container">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
      <Footer />
      <CompareBox>
        <CompareJobCard />
        <CompareJobCard />
      </CompareBox>
    </div>
  );
};

export default Browse;
