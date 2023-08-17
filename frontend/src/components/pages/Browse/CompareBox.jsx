import "../../css/Browse/compareBox.css";
import CompareJobCardSeperator from "./CompareCardSeperator";
import CompareJobCard from "./CompareJobCard";
import ToggleButton from "./ToggleButton";

const CompareBox = ({ comparables }) => {
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
      {comparables.length > 0 ? (
        <CompareJobCard data={comparables[0]} />
      ) : (
        <CompareJobCard empty />
      )}
      <CompareJobCardSeperator />
      {comparables.length > 1 ? (
        <CompareJobCard data={comparables[1]} />
      ) : (
        <CompareJobCard empty />
      )}
      <CompareJobCardSeperator />
      {comparables.length > 2 ? (
        <CompareJobCard data={comparables[2]} />
      ) : (
        <CompareJobCard empty />
      )}
      <ToggleButton text="vertaile" selected forCompareBox />
      <div className="close-button-text">Sulje</div>
    </div>
  );
};

export default CompareBox;
