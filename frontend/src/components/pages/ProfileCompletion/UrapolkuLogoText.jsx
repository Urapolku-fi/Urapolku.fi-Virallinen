function urapolkuLogo(props) {
  const display = {
    display: 'flex',
    gap: '5px',
    alignItems: 'center',
    justifyConent: 'center',
    color: props.textColor,
  };
  return (
    <div style={display}>
      <img src="pictures/urapolku.png" alt="" width="25px" height="25px" />
      <h2>Urapolku</h2>
    </div>
  );
}
export default urapolkuLogo;
