import "../../css/Browse/filter.css";
import ButtonGroup from "./ButtonGroup";
import FilterLabel from "./FilterLabel";
import JobToolsPanel from "./JobToolsPanel";
import LargeFilter from "./LargeFilter";
import { createContext } from "react";

export const FilterContext = createContext({});

const Filter = ({ filtersState, setFiltersState, clearFilters }) => {
  return (
    <FilterContext.Provider
      value={{ filtersState: filtersState, setFiltersState: setFiltersState }}
    >
      <div className="filter-and-tools-container">
        <div className="filter">
          <div className="filter-header-container">
            <div className="filter-header">Suodattimet</div>
            <div className="filter-clear" onClick={clearFilters}>
              Poista suodattimet
            </div>
          </div>
          <div className="filters-flex-container">
            <FilterLabel text="Location" />
            <LargeFilter propertyName={"location"} />
            <FilterLabel text="Job Type" />
            <div className="toggle-buttons-flex-container">
              <ButtonGroup propertyName={"jobType"} />
            </div>
            <FilterLabel text="Work Type" />
            <div className="toggle-buttons-flex-container">
              <ButtonGroup propertyName={"workType"} />
            </div>
            <FilterLabel text="Industry" />
            <LargeFilter propertyName={"industry"} />
          </div>
        </div>
        <JobToolsPanel />
      </div>
    </FilterContext.Provider>
  );
};

export default Filter;
