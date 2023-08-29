import ToggleButton from "./ToggleButton";

const ButtonGroup = ({ propertyName, filtersState, setFiltersState }) => {
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
