import "../../css/Browse/searchBar.css";
import SingleOptionDropdown from "./SingleOptionDropdown";
import SearchIcon from "../../../assets/search.svg";

const SearchBar = ({ searchInput, handleInputChange }) => {
  return (
    <>
      <div className="search-bar">
        <div className="search-bar-left" />
        <input
          className="search-for-a"
          type="text"
          placeholder="Hae työtä, yritystä, tai toimialaa"
          onChange={handleInputChange}
          value={searchInput}
        />
        <div className="line-parent">
          <div id="experience-start" className="frame-item" />
          <div className="experience">Kokemus</div>
          <SingleOptionDropdown
            options={[
              "ei työkokemusta",
              "alle 1 vuosi",
              "1 - 2 vuotta",
              "2 - 3 vuotta",
              "3 - 4 vuotta",
              "4 - 5 vuotta",
              "5 - 10 vuotta",
              "yli 10 vuotta",
            ]}
            childComponent={
              <img
                className="search-bar-expand-icon"
                alt=""
                src={"/pictures/expand-arrow.png"}
              />
            }
          />

          <div className="frame-item" />
          <div className="color-parent">
            <img className="color-icon" alt="" src={"/svg/map-indicator.svg"} />
            <div className="experience">Sijainti</div>
          </div>
        </div>
        <div className="frame-parent">Search</div>
      </div>
      <div className="mobile-search-bar">
        <img src={SearchIcon} alt="search icon" />
        <input type="text" placeholder="Search" />
      </div>
    </>
  );
};

export default SearchBar;
