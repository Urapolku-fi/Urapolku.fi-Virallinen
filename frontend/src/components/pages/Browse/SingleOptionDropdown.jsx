import { useEffect, useState } from "react";
import "../../css/Browse/singleOptionDropdown.css";

// options is an array of the options, they must be unique since they're being used as values
// example: [
//   "€1,000 - €2,000",
//   "€2,000 - €3,000",
//   "€3,000 - €4,000",
//   "€4,000 - €5,000",
//   "€5,000 - €10,000",
//   "€10,000 +",
// ]
// childComponent is the component that should open the dropdown
const SingleOptionDropdown = ({ options, childComponent }) => {
  const [value, setValue] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOptionClick = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setShowDropdown(false);
  }, [value]);

  return (
    <>
      <span onClick={toggleDropdown}>{childComponent}</span>
      <div className={showDropdown ? "education-list" : "education-list hide"}>
        {options.map((item) => (
          <div
            value={item}
            className={item !== value ? "option" : "option selected-option"}
            onClick={() => {
              handleOptionClick(item);
            }}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleOptionDropdown;
