const TextInput = (props) => {
  const styles = {
    textInput: {
      width: "100%",
      borderRadius: ".5rem",
      border: "none",
      outline: ".1rem solid #CCCCCC",
      padding: "1.5rem",
      fontSize: "1.1rem",
      boxSizing: "border-box",
      fontFamily: "Montserrat, sans-serif",
      ...props.extraClass,
    },
    title: {
      fontWeight: "200",
      marginBottom: ".5rem",
    },
  };

  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <h3 style={styles.title}>{props.title}</h3>
      <input
        onChange={handleChange}
        type={props.type || "text"}
        style={styles.textInput}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextInput;
