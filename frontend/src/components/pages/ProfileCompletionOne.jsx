import LeftBar from "./ProfileCompletion/LeftBarProfile";
import SkipButton from "./ProfileCompletion/SkipButton";
import NextButton from "./ProfileCompletion/nextButton";
import ProgressBar from "./ProfileCompletion/progressBar";
import UrapolkuLogo from "./ProfileCompletion/UrapolkuLogoText";
import React, { useState } from "react";
import "../css/ProfileCompletionOne.css";

function ProfileCompletionOne() {
  const [imageUrl, setImageUrl] = useState("/pictures/Camera-alt.png");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clickImageButton = () => {
    // Trigger the hidden input file when the button is clicked
    document.getElementById("upload-image").click();
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
              <button onClick={clickImageButton}>
                <img src={"pictures/Camera-alt.png"} alt="" />
                <input
                  type="file"
                  id="upload-image"
                  onChange={handleImageChange}
                />
              </button>
              <div
                className={`Circle ${
                  imageUrl === "/pictures/Camera-alt.png" ? "centered" : ""
                }`}
              >
                {imageUrl === "/pictures/Camera-alt.png" ? (
                  <img
                    src={imageUrl}
                    alt=""
                    id="User-uploaded-photo"
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                ) : (
                  <img
                    src={imageUrl}
                    alt=""
                    id="User-uploaded-photo"
                    style={{ width: "100%", height: "100%", border: "none" }}
                  />
                )}
              </div>
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
            <div
              className="Next-button-wrapper"
              onClick={nextPage}
              onChange={handleImageChange}
            >
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
