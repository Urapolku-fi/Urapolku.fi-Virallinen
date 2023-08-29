function NextButton(props) {
  const FilledButton = {
    borderRadius: "8px",
    border: "1px solid rgba(132, 131, 131, 0.85)",
    background: "#120A2F",
    padding: ".8rem 4rem",
    color: "#FFF",
    fontSize: "large",
    width: "min-content",
    ...props.extraClass,
  };
  return (
    <button style={FilledButton} onClick={props.onClick}>
      Finish
    </button>
  );
}
export default NextButton;
