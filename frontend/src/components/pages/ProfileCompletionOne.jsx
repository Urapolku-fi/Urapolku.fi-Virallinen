import LeftBar from "../ProfileCompletion/LeftBarProfile"
import SkipButton from "../ProfileCompletion/SkipButton"
import NextButton from "../ProfileCompletion/nextButton"
import ProgressBar from "../ProfileCompletion/progressBar"
import UrapolkuLogo from "../ProfileCompletion/UrapolkuLogoText"
import "../css/ProfileCompletionOne.css"
function ProfileCompletionOne() {
    return (
        <div id="ProfileCompletion-Wrapper">
            <LeftBar />
        <div className="Profile-completion-one-right">
                <SkipButton />
                <div className="Header-logo">
                <UrapolkuLogo />
                </div>
            <div className="Profile-completion-one-content">
                <div className="Header-logo">
                </div>
                <div className="Header-text">
                    <h3>Victor, tell us more about you</h3>
                </div>
                <div className="Main-wrapper">
                    <div className="User-photos">
                        <p>Upload your photos</p>
                        <input type="file" id="fileInput"/>
                        
                    </div>
                    </div>
                    <div className="Description">
                        <p>Description</p>
                    <div className="Description-frame">
                    <textarea className="longInput" cols="30" rows="10" placeholder="Write a brief description of yourself..."></textarea>
                    </div>
                    
                    </div>
                    <div className="Bottom">
                    <NextButton />
                    <ProgressBar />
                    </div>

            </div>
        </div>
        </div>
    )
}
export default ProfileCompletionOne