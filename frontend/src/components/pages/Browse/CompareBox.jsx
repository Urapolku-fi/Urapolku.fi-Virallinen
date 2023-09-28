import '../../css/Browse/compareBox.css';
import CompareJobCardSeperator from './CompareCardSeperator';
import CompareJobCard from './CompareJobCard';
import ToggleButton from './ToggleButton';

const CompareBox = ({ comparables, clearComparables, hidden, removeComparedJobById }) => {
  return (
    <div className={hidden ? 'compare-box compare-box-hide' : 'compare-box compare-box-show'}>
      <div className="mobile-compare-header">
        <p>Compare</p>
        <div className="mobile-compare-thumb"></div>
        <p>Clear all</p>
      </div>
      <div className="comparables-container">
        {comparables.length > 0 ? (
          <CompareJobCard data={comparables[0]} removeComparedJobById={removeComparedJobById} />
        ) : (
          <CompareJobCard empty />
        )}
        <CompareJobCardSeperator />
        {comparables.length > 1 ? (
          <CompareJobCard data={comparables[1]} removeComparedJobById={removeComparedJobById} />
        ) : (
          <CompareJobCard empty />
        )}
        <CompareJobCardSeperator />
        {comparables.length > 2 ? (
          <CompareJobCard data={comparables[2]} removeComparedJobById={removeComparedJobById} />
        ) : (
          <CompareJobCard empty />
        )}
      </div>
      <div className="compare-box-buttons-container">
        <ToggleButton text="Compare" selected forCompareBox />
        <div className="close-button-text" onClick={clearComparables}>
          Cancel
        </div>
      </div>
    </div>
  );
};

export default CompareBox;
