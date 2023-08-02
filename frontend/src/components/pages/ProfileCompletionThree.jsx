import LeftBar from "../ProfileCompletion/LeftBarProfile"
import SkipButton from "../ProfileCompletion/SkipButton"
import NextButton from "../ProfileCompletion/nextButton"
import ProgressBar from "../ProfileCompletion/progressBar"
import UrapolkuLogo from "../ProfileCompletion/UrapolkuLogoText"
import "../css/ProfileCompletionThree.css"
function ProfileCompletionTwo() {
    return (
        <div id="ProfileCompletion-Wrapper">
            <LeftBar />
            <div className="Profile-completion-three-right">
                <SkipButton />
                <div className="Header-logo">
                    <UrapolkuLogo />
                </div>
                <div className="Profile-completion-three-content">
                    <div className="Header-text">
                        <h3>Finally, your work history</h3>
                        </div>
                        <div className="Title">
                            <p>Title</p>
                            <input type="text" name="" id="" placeholder="Ex. Project Manager"/>
                        </div>
                        <div className="Employment-type-dropdown">
                            <p>Employment type</p>
                                <button>
                                    <p>Please select</p>
                                    <img className="Expand-more" src="pictures/expand-more.png" alt="" />
                                </button>
                                <div className="Employment-type-content">
                                    <p className="Employment-type">Full-time</p>
                                    <p className="Employment-type">Part-time</p>
                                    <p className="Employment-type">Freelance</p>
                                    <p className="Employment-type">Contract</p>
                                    <p className="Employment-type">Self-employed</p>
                                    <p className="Employment-type">Internship</p>
                                </div>
                        </div>
                        <div className="Location">
                            <p>Location</p>
                            <input type="text" name="" id="" placeholder="Ex. Helsinki" />
                        </div>
                        <div className="Location-type-dropdown">
                            <p>Location type</p>
                            <button>
                                <p>Please select</p>
                                <img className="Expand-more" src="pictures/expand-more.png" alt="" />
                            </button>
                            <div className="Location-type-content">
                                <p>On-site</p>
                                <p>Hybrid</p>
                                <p>Remote</p>
                            </div>
                        </div>
                        <div className="Currently-working">
                            <input className="checkbox" type="checkbox" name="" id="" />
                            <p>I am currently working on this role </p>
                        </div>
                        <div className="Start-date">
                            <p>Start-date</p>
                            <div className="Start-date-buttons">
                            <button>
                                <p>Month</p>
                                <img className="Expand-more" src="pictures/expand-more.png" alt="" />
                            </button>
                            <button>
                                <p>Year</p>
                                <img className="Expand-more" src="pictures/expand-more.png" alt="" />
                            </button>
                        </div>
                        </div>
                        <div className="End-date">
                            <p>End-date</p>
                            <div className="End-date-buttons">
                            <button>
                                <p>Month</p>
                                <img className="Expand-more" src="pictures/expand-more.png" alt="" />
                            </button>
                            <button>
                                <p>Year</p>
                                <img className="Expand-more" src="pictures/expand-more.png" alt="" />
                            </button>
                        </div>
                        </div>
                    <div className="Bottom">
                        <NextButton/>
                        <ProgressBar />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileCompletionTwo