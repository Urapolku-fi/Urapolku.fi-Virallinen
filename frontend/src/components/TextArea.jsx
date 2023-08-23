const TextArea = (props) => {
  const styles = {
    textBox: {
      height: "15rem",
      width: "100%",
      borderRadius: ".5rem",
      border: "none",
      outline: ".1rem solid #CCCCCC",
      resize: "none",
      padding: "2rem",
      boxSizing: "border-box",
      fontSize: "1.1rem",
      ...props.extraClass,
    },
    title: {
      fontWeight: "200",
      marginBottom: ".5rem",
    },
  };

  return (
    <div>
      <h3 style={styles.title}>{props.title}</h3>
      <textarea style={styles.textBox}></textarea>
    </div>
  );
};

export default TextArea;
