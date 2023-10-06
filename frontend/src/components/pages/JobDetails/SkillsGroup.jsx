import "../../css/JobDetails/skillsGroup.css";

export const SkillsGroup = ({ skills }) => {
  return (
    <div className="skillsGroup">
      <h2 className="skillsGroup-header">Key Skills</h2>
      <div className="skillsGroup-skills">
        {skills.map((skill, i) => (
          <div key={i}>{skill}</div>
        ))}
      </div>
    </div>
  );
};
