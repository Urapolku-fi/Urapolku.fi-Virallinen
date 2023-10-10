import '../../css/JobDetails/applyButton.css';

export const ApplyNow = ({ link }) => {
  return (
    <>
      <a className="applyButton" href={link} target="_blank" rel="noreferrer">
        Apply now
      </a>
    </>
  );
};
