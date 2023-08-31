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
            <LargeFilter propertyName={"location"} label={"Location"} />
            <ButtonGroup propertyName={"jobType"} label={"Job Type"} />
            <ButtonGroup propertyName={"workType"} label={"Work Type"} />
            <LargeFilter propertyName={"industry"} label={"Industry"} />
          </div>
        </div>
        <JobToolsPanel />
      </div>
    </FilterContext.Provider>
  );
};

export default Filter;
