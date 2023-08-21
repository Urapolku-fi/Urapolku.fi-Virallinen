import "../../css/Browse/checkBox.css";

const CheckBox = ({ text, toggled, onClick, forJobcard = false }) => {
  return (
    <div
      className={
        forJobcard
          ? "check-box-ellipse-parent for-job-card"
          : "check-box-ellipse-parent"
      }
      onClick={onClick ? onClick : () => {}}
    >
      <div
        className={
          toggled ? "check-box-ellipse ellipse-toggled" : "check-box-ellipse"
        }
      />
      <div className="check-box-label">{text}</div>
    </div>
  );
};

export default CheckBox;
