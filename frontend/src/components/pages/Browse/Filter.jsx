import "../../css/Browse/filter.css";
import ButtonGroup from "./ButtonGroup";
import FilterLabel from "./FilterLabel";
import JobToolsPanel from "./JobToolsPanel";
import LargeFilter from "./LargeFilter";
import ToggleButton from "./ToggleButton";

const Filter = ({ filtersState, setFiltersState, clearFilters }) => {
  return (
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
          <LargeFilter
            options={filtersState.location[0]}
            values={filtersState.location[1]}
            setValues={(newValues) => {
              setFiltersState({
                ...filtersState,
                location: [filtersState.location[0], newValues],
              });
            }}
          />
          <FilterLabel text="Job Type" />
          <div className="toggle-buttons-flex-container">
            <ButtonGroup
              propertyName={"jobType"}
              filtersState={filtersState}
              setFiltersState={setFiltersState}
            />
          </div>
          <FilterLabel text="Work Type" />
          <div className="toggle-buttons-flex-container">
            <ButtonGroup
              propertyName={"workType"}
              filtersState={filtersState}
              setFiltersState={setFiltersState}
            />
          </div>
          <FilterLabel text="Industry" />
          <LargeFilter
            options={filtersState.industry[0]}
            values={filtersState.industry[1]}
            setValues={(newValues) => {
              setFiltersState({
                ...filtersState,
                industry: [filtersState.industry[0], newValues],
              });
            }}
          />
        </div>
      </div>
      <JobToolsPanel />
    </div>
  );
};

export default Filter;
