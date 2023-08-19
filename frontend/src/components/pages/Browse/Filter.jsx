import "../../css/Browse/filter.css";
import FilterLabel from "./FilterLabel";
import LargeFilter from "./LargeFilter";
import ToggleButton from "./ToggleButton";

const Filter = ({ filtersState, setFiltersState }) => {
  return (
    <div className="filter">
      <div className="filter-header-container">
        <div className="filter-header">Suodattimet</div>
        <div className="filter-clear">Poista suodattimet</div>
      </div>
      <div className="filters-flex-container">
        <FilterLabel text="Job Type" />
        <div className="toggle-buttons-flex-container">
          <ToggleButton
            text="Full Time"
            selected={filtersState.jobType[0]}
            onClick={() => {
              setFiltersState({
                ...filtersState,
                jobType: filtersState.jobType.map((e, index) =>
                  index === 0 ? !e : e
                ),
              });
            }}
          />
          <ToggleButton
            text="Part Time"
            selected={filtersState.jobType[1]}
            onClick={() => {
              setFiltersState({
                ...filtersState,
                jobType: filtersState.jobType.map((e, index) =>
                  index === 1 ? !e : e
                ),
              });
            }}
          />
          <ToggleButton
            text="Internship"
            selected={filtersState.jobType[2]}
            onClick={() => {
              setFiltersState({
                ...filtersState,
                jobType: filtersState.jobType.map((e, index) =>
                  index === 2 ? !e : e
                ),
              });
            }}
          />
          <ToggleButton
            text="Apprenticeship"
            selected={filtersState.jobType[3]}
            onClick={() => {
              setFiltersState({
                ...filtersState,
                jobType: filtersState.jobType.map((e, index) =>
                  index === 3 ? !e : e
                ),
              });
            }}
          />
        </div>
        <FilterLabel text="Industry" />
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
      </div>
    </div>
  );
};

export default Filter;
