const TextArea = (props) => {
  const styles = {
    textBox: {
      height: '15rem',
      width: '100%',
      borderRadius: '.5rem',
      border: 'none',
      outline: '.1rem solid #CCCCCC',
      resize: 'none',
      padding: '1.5rem',
      boxSizing: 'border-box',
      fontSize: '1.1rem',
      fontFamily: 'Montserrat, sans-serif',
      ...props.extraClass,
    },
    title: {
      fontWeight: '200',
      marginBottom: '.5rem',
    },
  };

  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <h3 style={styles.title}>{props.title}</h3>
      <textarea
        onChange={handleChange}
        style={styles.textBox}
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
