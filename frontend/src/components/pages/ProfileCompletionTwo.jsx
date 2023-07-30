import LeftBar from "../ProfileCompletion/LeftBarProfile"
import SkipButton from "../ProfileCompletion/SkipButton"
import NextButton from "../ProfileCompletion/nextButton"
import ProgressBar from "../ProfileCompletion/progressBar"
import UrapolkuLogo from "../ProfileCompletion/UrapolkuLogoText"
import "../css/ProfileCompletionTwo.css"
import { useState } from "react"
function ProfileCompletionTwo() {
    const [openIndustry,setOpenIndustry] = useState(false)
    const [openSkills,setOpenSkills] = useState(false)

    return (
        <div id="ProfileCompletion-Wrapper">
            <LeftBar />
        <div className="Profile-completion-two-right">
                <SkipButton />
                <div className="Header-logo">
                <UrapolkuLogo />
                </div>
            <div className="Profile-completion-two-content">
            <div className="Header-text">
                    <h3>let’s get to know your skills</h3>
                </div>
                <div className="Industry-dropdown">
                    <p className="Industry-text">Industry</p>
                    <button className="Industry-dropdown-button" onClick={()=>setOpenIndustry(!openIndustry)}>
                        <p>Select an industry</p>
                        <img className="Expand-more" src="pictures/expand-more.png" alt="" />
                    </button>
                    { openIndustry &&
                    <div className="Industry-dropdown-content">
                        <p className="Industry" data-value="IT">Information Technology (IT)</p>
                        <p className="Industry" data-value="Healthcare">Healthcare and Medicine</p>
                        <p className="Industry" data-value="Finance">Finance and Banking</p>
                        <p className="Industry" data-value="Education">Education and E-Learning</p>
                        <p className="Industry" data-value="Retail">Retail and E-commerce</p>
                        <p className="Industry" data-value="Travel">Travel and Tourism</p>
                        <p className="Industry" data-value="Automotive">Automotive and Transportation</p>
                        <p className="Industry" data-value="Food">Food and Beverage</p>
                    </div>
                    }
                </div>
                <div className="skill-dropdown">
                    <p>Skills</p>
                    <button className="skill-dropdown-button" onClick={()=>setOpenSkills(!openSkills)}>
                        <p>Select skills</p>
                        <img className="Expand-more" src="pictures/expand-more.png" alt="" />
                    </button>
                    {openSkills &&
                    <div className="skill-dropdown-content">
                        <p className="Skill" data-value="IT">Programming</p>
                        <p className="Skill" data-value="Healthcare">Web Development</p>
                        <p className="Skill" data-value="Finance">Database Management</p>
                        <p className="Skill" data-value="Education">Software Development</p>
                        <p className="Skill" data-value="Retail">Networking</p>
                        <p className="Skill" data-value="Travel">Cybersecurity</p>
                        <p className="Skill" data-value="Automotive">Cloud Computing</p>
                        <p className="Skill" data-value="Food">DevOps</p>
                    </div>
                    }
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
export default ProfileCompletionTwo