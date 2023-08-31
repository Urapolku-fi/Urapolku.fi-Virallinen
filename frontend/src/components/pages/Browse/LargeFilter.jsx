import "../../css/Browse/largeFilter.css";
import ToggleButton from "./ToggleButton";
import MultiOptionDropdown from "./MultiOptionDropdown";
import { FilterContext } from "./Filter";
import { useContext } from "react";

const LargeFilter = ({ propertyName }) => {
  const { filtersState, setFiltersState } = useContext(FilterContext);

  return (
    <MultiOptionDropdown
      options={filtersState[propertyName][0]}
      values={filtersState[propertyName][1]}
      setValues={(newValues) => {
        setFiltersState({
          ...filtersState,
          [propertyName]: [filtersState[propertyName][0], newValues],
        });
      }}
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
