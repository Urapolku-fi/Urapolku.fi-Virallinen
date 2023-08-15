import "../../css/Browse/largeFilter.css";
import ToggleButton from "./ToggleButton";
import MultiOptionDropdown from "./MultiOptionDropdown";

const LargeFilter = () => {
  return (
    <MultiOptionDropdown
      options={['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
      'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
      'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
      'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
      'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis', 
      'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros', ["hello"],
      'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
      'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
      'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
    ]}
      childComponent={
        <div className="large-filter-opener">
          <img
            className="expand-more-arrow"
            src={"/pictures/expand-arrow.png"}
          ></img>
          <div className="large-filter-opener-text">Hello world</div>
          {false && <ToggleButton />}
        </div>
      }
    />
  );
};

export default LargeFilter;
