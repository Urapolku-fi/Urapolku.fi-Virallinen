import LeftBar from "./ProfileCompletion/LeftBarProfile";
import SkipButton from "./ProfileCompletion/SkipButton";
import NextButton from "./ProfileCompletion/nextButton";
import ProgressBar from "./ProfileCompletion/progressBar";
import UrapolkuLogo from "./ProfileCompletion/UrapolkuLogoText";
import { useState } from "react";
import "../css/profileCompletionOne.css";
import { useS3 } from "../../api/s3Hooks";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../api/requestHooks";

function ProfileCompletionOne() {
  const [bannerImageUrl, setBannerUrl] = useState("/pictures/Camera-alt.png");
  const [profileImageUrl, setProfileUrl] = useState("/pictures/Camera-alt.png");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const withAuth = useFetch();
  //const { uploadObject } = useS3();

  const handleBannerChange = (event) => {
    const banner = event.target.files[0];
    if (banner) {
      const reader = new FileReader();
      reader.onload = () => {
        setBannerUrl("test-profile-banner.png");
      };
      reader.readAsDataURL(banner);
    }
  };

  const handleProfileChange = (event) => {
    const profile = event.target.files[0];
    if (profile) {
      const reader = new FileReader();
      reader.onload = () => {
        //uploadObject("profile-picture", user.email, reader.result);
        //setProfileUrl(reader.result);
        setProfileUrl("test-profile-picture.png");
      };
      reader.readAsArrayBuffer(profile);
    }
  };

  const clickBannerButton = () => {
    // Trigger the hidden input file when the button is clicked
    document.getElementById("upload-banner").click();
  };

  const clickProfileButton = () => {
    // Trigger the hidden input file when the button is clicked
    document.getElementById("upload-profile").click();
  };

  const nextPage = () => {
    // User placed data will save and move to next page
    const profileData = {
      profilePicture: profileImageUrl,
      bannerPicture: bannerImageUrl,
      description: description,
    };

    withAuth.patch(`/user/${localStorage.getItem("userId")}`, profileData);
    navigate("/profiletwo");
  };

  const skipPage = () => {
    // No data saved, just skipped
    navigate("/profiletwo");
  };

  return (
    <div id="ProfileCompletion-Wrapper">
      <LeftBar />
      <div className="Profile-completion-one-right">
        <div className="Skipbutton-wrapper" onClick={skipPage}>
          <SkipButton />
        </div>
        <div className="Header-logo">
          <UrapolkuLogo />
        </div>
        <div className="Profile-completion-one-content">
          <div className="Header-logo"></div>
          <div className="Header-text">
            <h3>Victor, tell us more about you</h3>
          </div>
          <div className="Main-wrapper">
            <div className="User-photos">
              <p>Upload your photos</p>
              <button className="Banner-button" onClick={clickBannerButton}>
                {bannerImageUrl === "/pictures/Camera-alt.png" ? (
                  <img
                    src={bannerImageUrl}
                    alt=""
                    id="User-uploaded-photo"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                ) : (
                  <img
                    src={bannerImageUrl}
                    alt=""
                    id="User-uploaded-photo"
                    style={{ width: "100%", height: "100%", border: "none" }}
                  />
                )}
                <input
                  type="file"
                  id="upload-banner"
                  onChange={handleBannerChange}
                  accept="image/*"
                />
              </button>
              <button
                className={`Circle ${
                  profileImageUrl === "/pictures/Camera-alt.png"
                    ? "centered"
                    : ""
                }`}
                onClick={clickProfileButton}
              >
                {profileImageUrl === "/pictures/Camera-alt.png" ? (
                  <img
                    src={profileImageUrl}
                    alt=""
                    id="User-uploaded-photo"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                ) : (
                  <img
                    src={profileImageUrl}
                    alt=""
                    id="User-uploaded-photo"
                    style={{ width: "100%", height: "100%", border: "none" }}
                  />
                )}
                <input
                  type="file"
                  id="upload-profile"
                  onChange={handleProfileChange}
                  accept="image/*"
                />
              </button>
            </div>
          </div>
          <div className="Description">
            <p>Description</p>
            <div className="Description-frame">
              <textarea
                className="longInput"
                cols="30"
                rows="10"
                placeholder="Write a brief description of yourself..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="Bottom">
            <div className="Next-button-wrapper" onClick={nextPage}>
              <NextButton />
            </div>
            <ProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCompletionOne;
