import { useState } from "react";
import "../../css/Browse/multiOptionDropdown.css";
import CheckBox from "./CheckBox";
import ToggleButton from "./ToggleButton";
import FilterLabel from "./FilterLabel";

const MultiOptionDropdown = ({ options, childComponent }) => {
  const [values, setValues] = useState(
    options.map((option) =>
      Array.isArray(option) ? option[0] : [option, false]
    )
  );
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (index) => {
    let newValues = values;
    newValues[index] = [newValues[index][0], !newValues[index][1]];
    setValues(newValues);
    toggleDropdown();
    setTimeout(() => {
      setShowDropdown(true);
    }, 1);
  };

  const handleTogglebuttonClick = (value) => {
    setValues(values.map((val) => (val[0] === value ? [value, false] : val)));
  };

  const handleClearClick = () => {
    setValues(options.map((option) => [option, false]));
    toggleDropdown();
  };

  return (
    <>
      <span onClick={toggleDropdown}>{childComponent}</span>
      <div className="dropdown-container">
        <div
          className={
            showDropdown
              ? "multi-option-dropdown"
              : "multi-option-dropdown hide"
          }
        >
          <div className="dropdown-flex-container">
            {values.map((item, index) =>
              typeof item !== "string" ? (
                <CheckBox
                  key={item[0]}
                  text={item[0]}
                  toggled={item[1]}
                  onClick={() => handleOptionClick(index)}
                />
              ) : (
                <div className="filter-label-container" key={item}>
                  <FilterLabel text={item} />
                </div>
              )
            )}
          </div>
          <div className="whitespace-under-dropdown-controls" />
        </div>
        <div
          className={
            showDropdown
              ? "sticky-dropdown-controls"
              : "sticky-dropdown-controls hide"
          }
        >
          <div className="dropdown-controls-container">
            <ToggleButton
              text="clear"
              forDropdownControls
              onClick={handleClearClick}
            />
            <ToggleButton
              text="apply"
              selected={true}
              forDropdownControls
              onClick={toggleDropdown}
            />
          </div>
        </div>
      </div>
      <div className="multi-option-dropdown-togglebutton-container">
        {values
          .filter((value) => typeof value !== "string")
          .filter((value) => value[1] === true)
          .map((value) => (
            <ToggleButton
              text={value[0]}
              selected={true}
              key={value[0]}
              onClick={() => handleTogglebuttonClick(value[0])}
            />
          ))}
      </div>
    </>
  );
};

export default MultiOptionDropdown;
