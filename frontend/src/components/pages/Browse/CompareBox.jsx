import "../../css/Browse/compareBox.css";
import CompareJobCardSeperator from "./CompareCardSeperator";
import CompareJobCard from "./CompareJobCard";
import ToggleButton from "./ToggleButton";

const CompareBox = ({
  comparables,
  clearComparables,
  hidden,
  removeComparedJobById,
}) => {
  return (
    <div
      className={
        hidden ? "compare-box compare-box-hide" : "compare-box compare-box-show"
      }
    >
      <div className="compare-box-buttons-container-mobile">
        <ToggleButton text="vertaile" selected forCompareBox />
        <div className="close-button-text" onClick={clearComparables}>
          Sulje
        </div>
      </div>
      <div className="comparables-container">
        {comparables.length > 0 ? (
          <CompareJobCard
            data={comparables[0]}
            removeComparedJobById={removeComparedJobById}
          />
        ) : (
          <CompareJobCard empty />
        )}
        <CompareJobCardSeperator />
        {comparables.length > 1 ? (
          <CompareJobCard
            data={comparables[1]}
            removeComparedJobById={removeComparedJobById}
          />
        ) : (
          <CompareJobCard empty />
        )}
        <CompareJobCardSeperator />
        {comparables.length > 2 ? (
          <CompareJobCard
            data={comparables[2]}
            removeComparedJobById={removeComparedJobById}
          />
        ) : (
          <CompareJobCard empty />
        )}
      </div>
      <div className="compare-box-buttons-container">
        <ToggleButton text="vertaile" selected forCompareBox />
        <div className="close-button-text" onClick={clearComparables}>
          Sulje
        </div>
      </div>
    </div>
  );
};

export default CompareBox;
