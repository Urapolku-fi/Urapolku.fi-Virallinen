import UrapolkuLogo from "./UrapolkuLogoText";
import "../../css/LeftBarProfile.css";
function LeftBar() {
  return (
    <div id="Profile-completion-sidebar">
      <UrapolkuLogo textColor="white" />
      <div className="Profile-completion-image-frame">
        <img
          src="pictures/ProfileCompletionImage.jpg"
          alt=""
          width="360px"
          height="484px"
        />
      </div>
    </div>
  );
}

const GradientLeftBar = () => {
  return (
    <div id="gradient-left-bar">
      <div id="gradient-left-bar-img-frame">
        <img src="/pictures/employer.png" />
      </div>
    </div>
  );
};

export { LeftBar, GradientLeftBar };
