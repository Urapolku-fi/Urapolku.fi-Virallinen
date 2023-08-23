import { GradientLeftBar } from "./ProfileCompletion/LeftBarProfile";
import SkipButton from "./ProfileCompletion/SkipButton";
import "../css/employerProfileCompletion.css";
import { useNavigate } from "react-router-dom";
import ProfileImageUpload from "../ProfileImageUpload";
import TextArea from "../TextArea";

function EmployerProfileCompletion() {
  const navigate = useNavigate();

  const skipPage = () => {
    navigate("/empbrowse");
  };

  return (
    <div id="employer-profile-completion">
      <GradientLeftBar />
      <div id="employer-profile-completion-right-bar">
        <div id="employer-profile-completion-top">
          <div>
            <img src="/pictures/urapolku.png" />
            <p>Urapolku</p>
          </div>
          <SkipButton onClick={skipPage} />
        </div>
        <h1>Tell us more about you</h1>
        <ProfileImageUpload />
        <TextArea
          title="Description"
          placeholder="Write a description of your business, it's core values, vision etc."
        />
      </div>
    </div>
  );
}

export default EmployerProfileCompletion;
