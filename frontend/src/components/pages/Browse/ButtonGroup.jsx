import ToggleButton from "./ToggleButton";
import { FilterContext } from "./Filter";
import { useContext } from "react";

const ButtonGroup = ({ propertyName }) => {
  const { filtersState, setFiltersState } = useContext(FilterContext);

  return filtersState[propertyName].map((item, i) => (
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
  ));
};

export default ButtonGroup;
