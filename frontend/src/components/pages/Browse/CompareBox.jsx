import "../../css/Browse/compareBox.css";
import CompareJobCardSeperator from "./CompareCardSeperator";
import CompareJobCard from "./CompareJobCard";
import ToggleButton from "./ToggleButton";

const CompareBox = () => {
  return (
    <div className="compare-box">
      <CompareJobCard />
      <CompareJobCardSeperator />
      <CompareJobCard empty />
      <CompareJobCardSeperator />
      <CompareJobCard />
      <ToggleButton text="vertaile" selected forCompareBox />
      <div className="close-button-text">Close</div>
    </div>
  );
};

export default CompareBox;
