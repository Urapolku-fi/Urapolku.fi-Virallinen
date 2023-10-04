import { useContext, useEffect, useRef, useState } from "react";
import ReactSlider from "react-slider"; //might need to change this since the marks and track length are bugged
import "../../css/Browse/multipointRangeInput.css";
import FilterLabel from "./FilterLabel";
import { FilterContext } from "./Filter";

const MultipointRangeInput = (props) => {
  const [minValue, setMinValue] = useState(props.defaultValues[0]);
  const [maxValue, setMaxValue] = useState(props.defaultValues[1]);
  const [minText, setMinText] = useState(minValue);
  const [maxText, setMaxText] = useState(maxValue);
  let { filtersState, setFiltersState } = useContext(FilterContext);

  if (!filtersState) {
    filtersState = props.filtersState;
    setFiltersState = props.setFiltersState;
  }

  const handleSliderChange = (values) => {
    if (typeof values[0] === "number") {
      //comes from slider
      setMinValue(values[0]);
      setMaxValue(values[1]);
      setMinText(values[0]);
      setMaxText(values[1]);
      setFiltersState({ ...filtersState, salary: values });
    } else if (values.key === "Enter") {
      //comes from text inputs
      let value = parseInt(values.target.value);
      if (value <= props.maxValue && value >= props.minValue) {
        if (values.target.className === "min-text") setMinValue(value);
        else setMaxValue(value);
        setFiltersState({ ...filtersState, salary: [minValue, maxValue] });
      }
    }
  };

  return (
    <div>
      {props.label && <FilterLabel text={props.label} />}
      <div className="multipoint-input-wrapper">
        <ReactSlider
          className="multipoint-slider"
          markClassName="multipoint-slider-mark"
          thumbClassName="multipoint-slider-thumb-container"
          trackClassName="multipoint-slider-track"
          min={props.minValue}
          max={props.maxValue}
          marks={props.marks}
          defaultValue={props.defaultValues}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => (
            <div {...props}>
              <div className="multipoint-slide-thumb-headsup-value">
                {state.valueNow}
              </div>
              <div className="multipoint-slider-thumb" />
            </div>
          )}
          value={[minValue === "" ? 0 : minValue, maxValue]}
          pearling
          minDistance={250}
          onChange={handleSliderChange}
        />
        <div className="multipoint-input-text-fields">
          <div>
            <p>Min.</p>
            <input
              type="number"
              value={minText}
              onChange={(e) => setMinText(e.target.value)}
              className="min-text"
              onKeyDown={handleSliderChange}
            />
          </div>
          <div>
            <p>Max.</p>
            <input
              type="number"
              value={maxText}
              onChange={(e) => setMaxText(e.target.value)}
              className="max-text"
              onKeyDown={handleSliderChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipointRangeInput;
