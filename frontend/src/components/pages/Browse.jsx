import { useState } from "react";
import "../css/browse.css";
import SearchBar from "./Browse/SearchBar";
import Footer from "./Browse/Footer";

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
      <Footer />
    </div>
  );
};

export default Browse;
