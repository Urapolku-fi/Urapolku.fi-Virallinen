function CompleteButton() {
  const floatLeft = {
    display: 'flex',
    float: 'left',
  };
  const FilledButton = {
    borderRadius: '8px',
    border: '1px solid rgba(132, 131, 131, 0.85)',
    background: '#120A2F',
    color: '#FFF',
  };
  return (
    <div className="Finish-button" style={floatLeft}>
      <button style={FilledButton}>
        <p>Finish</p>
      </button>
    </div>
  );
}
export default CompleteButton;
