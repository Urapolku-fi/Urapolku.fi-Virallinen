import { useState } from "react";
import "../../css/Browse/multiOptionDropdown.css";
import CheckBox from "./CheckBox";
import ToggleButton from "./ToggleButton";
import FilterLabel from "./FilterLabel";

const MultiOptionDropdown = ({
  options,
  childComponent,
  values,
  setValues,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (index) => {
    setValues(values.map((e, i) => (i === index ? !e : e)));
    /*
    what is this???? causes flickering but dunno what it does so...
    toggleDropdown();
    setTimeout(() => {
      setShowDropdown(true);
    }, 1);
    */
  };

  const handleTogglebuttonClick = (index) => {
    setValues(values.map((e, i) => (i === index ? !e : e)));
  };

  const handleClearClick = () => {
    setValues(Array(values.length).fill(false));
    toggleDropdown();
  };

  return (
    <>
      <span onClick={toggleDropdown}>{childComponent}</span>
      <div className={`dropdown-container${showDropdown ? "" : " hide"}`}>
        <div className={"multi-option-dropdown"}>
          <div className="dropdown-flex-container">
            {options.map((item) =>
              typeof item === "string" ? (
                <CheckBox
                  key={item}
                  text={item}
                  toggled={
                    values[
                      options
                        .filter((e) => typeof e === "string")
                        .findIndex((e) => e === item)
                    ]
                  }
                  onClick={() =>
                    handleOptionClick(
                      options
                        .filter((e) => typeof e === "string")
                        .findIndex((e) => e === item)
                    )
                  }
                />
              ) : (
                <div className="filter-label-container" key={item[0]}>
                  <FilterLabel text={item[0]} />
                </div>
              )
            )}
          </div>
          <div className="whitespace-under-dropdown-controls" />
        </div>
        <div className={"sticky-dropdown-controls"}>
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
        {options
          .filter((e) => typeof e === "string")
          .map((e, i) => [e, i])
          .filter((e) => values[e[1]])
          .map((value) => (
            <ToggleButton
              text={value[0]}
              selected={true}
              onClick={() => handleTogglebuttonClick(value[1])}
              key={value[0]}
            />
          ))}
      </div>
    </>
  );
};

export default MultiOptionDropdown;
