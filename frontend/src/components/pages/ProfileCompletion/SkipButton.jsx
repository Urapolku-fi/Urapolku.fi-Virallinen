function SkipButton(props) {
  const hollowbutton = {
    borderRadius: '12px',
    border: '1px solid rgba(132, 131, 131, 0.85)',
    background: 'white',
    padding: '.8rem 2.5rem',
    fontSize: 'large',
    ...props.extraClass,
  };

  return (
    <button style={hollowbutton} onClick={props.onClick}>
      Skip
    </button>
  );
}
export default SkipButton;
