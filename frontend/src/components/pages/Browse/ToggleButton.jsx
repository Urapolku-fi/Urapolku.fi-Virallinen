import "../../css/Browse/toggleButton.css";

const ToggleButton = ({
  text,
  selected,
  onClick = () => {},
  forDropdownControls = false,
  forCompareBox = false,
}) => {
  return (
    <>
      {selected ? (
        <div
          className={
            forDropdownControls
              ? "toggle-button-toggled for-dropdown-controls"
              : (forCompareBox
              ? "toggle-button-toggled for-compare-box"
              : "toggle-button-toggled")
          }
          onClick={onClick}
        >
          <div className="toggle-button-inner-text-toggled">{text}</div>
        </div>
      ) : (
        <div
          className={
            forDropdownControls
              ? "toggle-button for-dropdown-controls"
              : forCompareBox
              ? "toggle-button for-compare-box"
              : "toggle-button"
          }
          onClick={onClick}
        >
          <div className="toggle-button-inner-text">{text}</div>
        </div>
      )}
    </>
  );
};

export default ToggleButton;
