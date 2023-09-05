import ToggleButton from "./ToggleButton";
import { FilterContext } from "./Filter";
import { useContext } from "react";
import FilterLabel from "./FilterLabel";

const ButtonGroup = ({
  propertyName,
  label,
  filtersStateProp = false,
  setFiltersStateProp = false,
  mobile = false,
}) => {
  let { filtersState, setFiltersState } = useContext(FilterContext);

  if (!filtersState) {
    filtersState = filtersStateProp;
    setFiltersState = setFiltersStateProp;
  }

  return (
    <>
      {label && <FilterLabel text={label} />}
      <div
        className={`toggle-buttons-flex-container ${mobile ? "mobile" : ""}`}
      >
        {filtersState[propertyName].map((item, i) => (
          <ToggleButton
            key={i}
            text={item[0]}
            selected={item[1]}
            onClick={() => {
              setFiltersState({
                ...filtersState,
                [propertyName]: filtersState[propertyName].map((e, index) =>
                  index === i ? [e[0], !e[1]] : [e[0], e[1]]
                ),
              });
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ButtonGroup;
