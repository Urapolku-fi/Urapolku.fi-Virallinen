function SkipButton() {
  const floatRight = {
    display: "flex",
    float: "right",
    padding: "20px",
  };
  const hollowbutton = {
    borderRadius: "12px",
    border: "1px solid rgba(132, 131, 131, 0.85)",
    background: "white",
  };
  return (
    <div className="skipButton" style={floatRight}>
      <button style={hollowbutton}>
        <p>Skip</p>
      </button>
    </div>
  );
}
export default SkipButton;
