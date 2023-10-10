function ProgressBar({ progress }) {
  const numGreenBars = progress;
  const hasHalfBar = progress % 1 === 0.5;

  const bars = [];
  for (let i = 0; i < numGreenBars; i++) {
    bars.push(<div className="bar green-bar" key={`green-${i}`} />);
  }
  if (hasHalfBar) {
    bars.push(
      <div className="bar half-bar" key="half">
        <div className="half-green" />
        <div className="half-grey" />
      </div>,
    );
  }
  const numGreyBars = 4 - bars.length;
  for (let i = 0; i < numGreyBars; i++) {
    bars.push(<div className="bar grey-bar" key={`grey-${i}`} />);
  }

  return <div className="progress-bars">{bars}</div>;
}
export default ProgressBar;
