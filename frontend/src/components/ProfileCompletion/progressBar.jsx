function ProgressBar() {
    const floatRight = {
        display: "flex",
        float: "Right",
        gap: "10px",
    }
    return (
        <div className="Proggress-bar" style={floatRight}>
            <div className="First"></div>
            <div className="Second"></div>
            <div className="Third"></div>
        </div>
    )
}
export default ProgressBar