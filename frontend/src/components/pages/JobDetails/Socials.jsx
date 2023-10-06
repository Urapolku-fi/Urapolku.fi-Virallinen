import "../../css/JobDetails/socials.css";
import Linkedin from "../../../assets/linkedin.svg";
import Facebook from "../../../assets/facebook.svg";
import Instagram from "../../../assets/instagram.svg";
import Twitter from "../../../assets/twitter.svg";

export const Socials = () => {
  return (
    <div className="socials">
      <div className="social-links">
        <img src={Linkedin} alt="Linkedin logo" />
        <img src={Facebook} alt="Facebook logo" />
        <img src={Instagram} alt="Instagram logo" />
        <img src={Twitter} alt="Twitter logo" />
      </div>
    </div>
  );
};
