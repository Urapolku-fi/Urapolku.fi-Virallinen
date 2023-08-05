import LeftBar from "./ProfileCompletion/LeftBarProfile";
import SkipButton from "./ProfileCompletion/SkipButton";
import NextButton from "./ProfileCompletion/nextButton";
import ProgressBar from "./ProfileCompletion/progressBar";
import UrapolkuLogo from "./ProfileCompletion/UrapolkuLogoText";
import React, { useState } from "react";
import "../css/ProfileCompletionOne.css";

function ProfileCompletionOne() {
  const [BannerImageUrl, setBannerUrl] = useState("/pictures/Camera-alt.png");
  const [ProfileImageUrl, setProfileUrl] = useState("/pictures/Camera-alt.png");

  const handleBannerChange = (event) => {
    const banner = event.target.files[0];
    if (banner) {
      const reader = new FileReader();
      reader.onload = () => {
        setBannerUrl(reader.result);
      };
      reader.readAsDataURL(banner);
    }
  };
  const handleProfileChange = (event) => {
    const profile = event.target.files[0];
    if (profile) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileUrl(reader.result);
      };
      reader.readAsDataURL(profile);
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
    window.location.href = "/profiletwo";
  };
  const skipPage = () => {
    // No data saved, just skipped
    window.location.href = "/profiletwo";
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
                {BannerImageUrl === "/pictures/Camera-alt.png" ? "" : ""}
                {BannerImageUrl === "/pictures/Camera-alt.png" ? (
                  <img
                    src={BannerImageUrl}
                    alt=""
                    id="User-uploaded-photo"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                ) : (
                  <img
                    src={BannerImageUrl}
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
                  ProfileImageUrl === "/pictures/Camera-alt.png"
                    ? "centered"
                    : ""
                }`}
                onClick={clickProfileButton}
              >
                {ProfileImageUrl === "/pictures/Camera-alt.png" ? (
                  <img
                    src={ProfileImageUrl}
                    alt=""
                    id="User-uploaded-photo"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                ) : (
                  <img
                    src={ProfileImageUrl}
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
