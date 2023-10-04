import { useEffect, useState } from "react";
import "../../css/Browse/mobileFilters.css";
import ToggleButton from "./ToggleButton";
import ButtonGroup from "./ButtonGroup";
import MultipointRangeInput from "./MultipointRangeInput";

const FilterListItem = ({ text, active }) => {
  return (
    <div className="mobile-filter-list-value-item">
      <div className={`mobile-filters-ellipse ${active ? "active" : ""}`} />
      <p className={`mobile-filters-value ${active ? "active" : ""}`}>{text}</p>
    </div>
  );
};

const ListItems = ({ activeFilter, filtersState, setFiltersState }) => {
  //ugly but does the job, using ternary operator for rendering these would look way too messy
  switch (activeFilter) {
    case "jobtype":
      return (
        <ButtonGroup
          propertyName={"jobType"}
          filtersStateProp={filtersState}
          setFiltersStateProp={setFiltersState}
          mobile={true}
        />
      );
    case "worktype":
      return (
        <ButtonGroup
          propertyName={"workType"}
          filtersStateProp={filtersState}
          setFiltersStateProp={setFiltersState}
          mobile={true}
        />
      );
    case "language":
      return (
        <ButtonGroup
          propertyName={"language"}
          filtersStateProp={filtersState}
          setFiltersStateProp={setFiltersState}
          mobile={true}
        />
      );

    case "salary":
      return (
        <MultipointRangeInput
          minValue={0}
          maxValue={15000}
          marks={[3000, 6000, 9000, 12000]}
          defaultValues={[3500, 12000]}
          filtersState={filtersState}
          setFiltersState={setFiltersState}
        />
      );

    case "education":
      return filtersState["education"].map((fil, i) => (
        <FilterListItem key={i} text={fil} />
      ));
    default:
      return filtersState[
        Object.keys(filtersState).filter(
          (filter) => filter.toLowerCase() === activeFilter && filter
        )
      ][0].map((fil, i) => <FilterListItem key={i} text={fil} />);
  }
};

const MobileFilters = ({ filtersState, setFiltersState, categoryNames }) => {
  const [open, setOpen] = useState(false);

  const [activeFilter, setActiveFilter] = useState(
    Object.keys(filtersState)[0].toLowerCase()
  );

  useEffect(() => {
    if (open) document.body.classList.add("stop-scrolling");
    else document.body.classList.remove("stop-scrolling");
  }, [open]);

  const changeActiveCategory = (e) => {
    const cleanId = e.target.id.replace(" ", "").toLowerCase();
    setActiveFilter(cleanId);
  };

  return (
    <div>
      <div className="text-job-filter-toggle" onClick={() => setOpen(true)}>
        Filters
      </div>
      {open && (
        <div className="mobile-filters">
          <div
            className="mobile-filters-thumb-wrapper" //this exists because the part is too small to grab otherwise
            onClick={() => setOpen(false)}
          >
            <div className="mobile-filters-thumb"></div>{" "}
          </div>

          <div className="mobile-filters-header">
            <p>Filters</p>
            <p>Clear all</p>
          </div>
          <div className="mobile-filters-content-wrapper">
            <div className="mobile-filters-names">
              {categoryNames.map((filterName) => (
                <div
                  onClick={changeActiveCategory}
                  className={`mobile-filters-name ${
                    filterName.replace(" ", "").toLowerCase() === activeFilter
                      ? "active"
                      : ""
                  }`}
                  id={filterName}
                  key={filterName}
                >
                  {filterName}
                </div>
              ))}
            </div>
            <div className="mobile-filters-values">
              <ListItems
                activeFilter={activeFilter}
                filtersState={filtersState}
                setFiltersState={setFiltersState}
              />
            </div>
          </div>
          <div className="dropdown-controls-container mobile">
            <ToggleButton text="clear" forDropdownControls />
            <ToggleButton text="apply" selected={true} forDropdownControls />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileFilters;
