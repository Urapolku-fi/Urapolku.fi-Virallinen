import { useEffect, useState } from "react";
import ToggleButton from "./ToggleButton";
import "../../css/Browse/mobileFilters.css";

const MobileCompare = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.classList.add("stop-scrolling");
    else document.body.classList.remove("stop-scrolling");
  }, [open]);

  return (
    <div>
      <div className="text-job-filter-toggle" onClick={() => setOpen(true)}>
        Filters
      </div>
      {open && (
        <div className="mobile-filters">
          <div
            className="mobile-filters-thumb-wrapper" //this exists because the part is too small to grab otherwise
            onClick={() => setOpen(false)}
          >
            <div className="mobile-filters-thumb"></div>{" "}
          </div>

          <div className="mobile-filters-header">
            <p>Filters</p>
            <p>Clear all</p>
          </div>
          <div className="dropdown-controls-container mobile">
            <ToggleButton text="Sulje" forDropdownControls />
            <ToggleButton text="Vertaile" selected={true} forDropdownControls />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileCompare;
