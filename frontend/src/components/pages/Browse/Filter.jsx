import "../../css/Browse/filter.css";
import FilterLabel from "./FilterLabel";
import LargeFilter from "./LargeFilter";
import ToggleButton from "./ToggleButton";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-header-container">
        <div className="filter-header">Suodattimet</div>
        <div className="filter-clear">Poista suodattimet</div>
      </div>
      <div className="filters-flex-container">
        <FilterLabel text="Hello world" />
        <div className="toggle-buttons-flex-container">
          <ToggleButton text="Hello" selected={false} />
          <ToggleButton text="Hello" selected={true} />
          <ToggleButton text="Hello" selected={false} />
        </div>
        <FilterLabel text="Industry" />
        <LargeFilter />
      </div>
    </div>
  );
};

export default Filter;
