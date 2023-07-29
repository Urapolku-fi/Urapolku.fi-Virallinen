function urapolkuLogo() {
    const display = {
        display: 'flex',
        gap: '5px',
        alignItems: 'center',
        justifyConent: 'center',
        color: '#FFF',
        float: "left",
        marginBottom: "20px"
    };
    return (
        <div style={display}>
             <img src="pictures/urapolku.png" alt="" width="25px" height="25px"/>
             <h2>Urapolku</h2>
        </div>
    )
}
export default urapolkuLogo