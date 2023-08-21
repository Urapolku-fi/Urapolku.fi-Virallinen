import React from "react";
import "../../css/applyButton.css"

function ApplyNow({ link }) {
  return (
    <>
          <a className="applyButton" href={link} target="_blank" rel="noreferrer">Apply now</a>
          
    </>
  );
}

export default ApplyNow;
