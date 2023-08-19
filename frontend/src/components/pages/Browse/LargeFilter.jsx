import "../../css/Browse/largeFilter.css";
import ToggleButton from "./ToggleButton";
import MultiOptionDropdown from "./MultiOptionDropdown";

const LargeFilter = ({ options, values, setValues }) => {
  return (
    <MultiOptionDropdown
      options={options}
      values={values}
      setValues={setValues}
      childComponent={
        <div className="large-filter-opener">
          <img
            className="expand-more-arrow"
            src={"/pictures/expand-arrow.png"}
          ></img>
          <div className="large-filter-opener-text">Hello world</div>
          {false && <ToggleButton />}
        </div>
      }
    />
  );
};

export default LargeFilter;
