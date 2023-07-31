function NextButton() {
    const floatLeft = {
        display: "flex",
        float: "left",
    }
    const FilledButton = {
        borderRadius: "8px",
        border: "1px solid rgba(132, 131, 131, 0.85)",
        background: "#120A2F",
        color: "#FFF",
      };
    return (
    <div className="Next-Button" style={floatLeft}>
        <button style={FilledButton}><p>Next</p></button>
    </div>
    )
}
export default NextButton