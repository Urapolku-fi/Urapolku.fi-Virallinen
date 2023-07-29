import UrapolkuLogo from "./UrapolkuLogoText"
import '../ProfileCompletion/LeftBarProfile.css'
function LeftBarProfile() {
    return (
        <div id="Profile-completion-sidebar">
            <UrapolkuLogo />
        <div className="Profile-completion-image-frame">
            <img src="pictures/ProfileCompletionImage.jpg" alt="" width="360px" height="484px" />
        </div>
        </div>
    )
}
export default LeftBarProfile