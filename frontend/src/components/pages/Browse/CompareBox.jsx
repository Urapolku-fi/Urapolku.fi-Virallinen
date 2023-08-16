import "../../css/Browse/compareBox.css";
import CompareJobCardSeperator from "./CompareCardSeperator";
import CompareJobCard from "./CompareJobCard";
import ToggleButton from "./ToggleButton";

const CompareBox = () => {
  const exampleData = {
    title: "Nurse",
    area: "Welfare Area",
    field: "Health Care",
    type: "Full time | On Site",
    salary: "€35,000 annually",
    location: "Espoo",
  };

  return (
    <div className="compare-box">
      <CompareJobCard data={exampleData} />
      <CompareJobCardSeperator />
      <CompareJobCard empty />
      <CompareJobCardSeperator />
      <CompareJobCard data={exampleData} />
      <ToggleButton text="vertaile" selected forCompareBox />
      <div className="close-button-text">Sulje</div>
    </div>
  );
};

export default CompareBox;
