import "../../css/Browse/searchBar.css";

const SearchBar = ({ searchInput, handleInputChange }) => {
  return (
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
        <div className="frame-item" />
        <div className="experience">Kokemus</div>
        <img
          className="search-bar-expand-icon"
          alt=""
          src={"/pictures/expand-arrow.png"}
        />
        <div className="frame-item" />
        <div className="color-parent">
          <img className="color-icon" alt="" src={"/svg/map-indicator.svg"} />
          <div className="experience">Sijainti</div>
        </div>
      </div>
      <div className="frame-parent">
        <div className="frame-inner" />
        <div className="search">Hae</div>
      </div>
    </div>
  );
};

export default SearchBar;
