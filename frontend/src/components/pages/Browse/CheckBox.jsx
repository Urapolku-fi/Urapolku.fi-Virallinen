import "../../css/Browse/checkBox.css";

const CheckBox = ({ text, toggled, onClick, forJobcard = false }) => {
  return (
    <div
      className={forJobcard ? "ellipse-parent for-job-card" : "ellipse-parent"}
      onClick={onClick ? onClick : () => {}}
    >
      <div className={toggled ? "ellipse ellipse-toggled" : "ellipse"} />
      <div className="label">{text}</div>
    </div>
  );
};

export default CheckBox;
