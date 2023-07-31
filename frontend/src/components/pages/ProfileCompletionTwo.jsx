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

    const urapolkuBackround = {
        background: "#120A2F",
        color: "white",
      };
      const background2 = {
        background: "#FFF"
      }
      const skills = []

    const handleIndustryClick = (event) => {
        /* This gets the text-content when industry children is clicked */
        /* It stores the value into dataValue */
        const IndustrydataValue = event.currentTarget.textContent;
        const select = document.querySelector('.Industry-select-text')
        select.textContent = IndustrydataValue
        setOpenIndustry(false)
    }
    const handleSkillClick = (event) => {
        const SkillDataValue = event.currentTarget
        if (SkillDataValue.style.background = "#fff") {
            SkillDataValue.style.background = urapolkuBackround.background
            SkillDataValue.style.color = urapolkuBackround.color
        } else {
            SkillDataValue.style.background = background2.background
        }
        }


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
                        <p className="Industry-select-text">Select an industry</p>
                        <img className="Expand-more" src="pictures/expand-more.png" alt="" />
                    </button>
                    { openIndustry &&
                    <div className="Industry-dropdown-content">
                        <p className="Industry" data-value="IT" onClick={handleIndustryClick}>Information Technology (IT)</p>
                        <p className="Industry" data-value="Healthcare-Medicine" onClick={handleIndustryClick}>Healthcare and Medicine</p>
                        <p className="Industry" data-value="Finance-Banking" onClick={handleIndustryClick}>Finance and Banking</p>
                        <p className="Industry" data-value="Education-ELearning" onClick={handleIndustryClick}>Education and E-Learning</p>
                        <p className="Industry" data-value="Retail-Ecommerce"onClick={handleIndustryClick}>Retail and E-commerce</p>
                        <p className="Industry" data-value="Travel-Tourism" onClick={handleIndustryClick}>Travel and Tourism</p>
                        <p className="Industry" data-value="Automotive-Transportation" onClick={handleIndustryClick}>Automotive and Transportation</p>
                        <p className="Industry" data-value="Entertainment-Media" onClick={handleIndustryClick}>Entertainment and media</p>
                        <p className="Industry" data-value="RealEstate-Property" onClick={handleIndustryClick}>Real estate and property</p>
                        <p className="Industry" data-value="Fashion-Apparel" onClick={handleIndustryClick}>Fashion and apparel</p>
                        <p className="Industry" data-value="Energy-Utilities" onClick={handleIndustryClick}>Energy and Utilities</p>
                        <p className="Industry" data-value="Manufacturing-Production" onClick={handleIndustryClick}>Manufacturing and Production</p>
                        <p className="Industry" data-value="Agriculture-Farming" onClick={handleIndustryClick}>Agriculture and Farming</p>
                        <p className="Industry" data-value="Hospitality-Events" onClick={handleIndustryClick}>Hospitality and Events</p>
                        <p className="Industry" data-value="Environment-Sustainability" onClick={handleIndustryClick}>Environmental and Sustainability</p>
                        <p className="Industry" data-value="Gaming-InteractiveMedia" onClick={handleIndustryClick}>Gaming and Interactive Media</p>
                        <p className="Industry" data-value="Sports-Fitness" onClick={handleIndustryClick}>Sports and Fitness</p>
                        <p className="Industry" data-value="Marketing-Advertising" onClick={handleIndustryClick}>Marketing and Advertising</p>
                        <p className="Industry" data-value="NonProfit-SocialServices" onClick={handleIndustryClick}>Non-profit and Social Services</p>
                        <p className="Industry" data-value="Aerospace-Aviation" onClick={handleIndustryClick}>Aerospace and aviation)</p>
                        <p className="Industry" data-value="Biotechnology-Pharmaceuticals" onClick={handleIndustryClick}>Biotechnology and Pharmaceuticals</p>
                        <p className="Industry" data-value="Construction-Architecture" onClick={handleIndustryClick}>Construction and Architecture</p>
                        <p className="Industry" data-value="Telecommunication-Networking" onClick={handleIndustryClick}>Telecommunications and Networking</p>
                        <p className="Industry" data-value="Art-Design"onClick={handleIndustryClick}>Art and Design</p>
                        <p className="Industry" data-value="Legal-LawServices" onClick={handleIndustryClick}>Legal and Law Services</p>
                        <p className="Industry" data-value="Insurance" onClick={handleIndustryClick}>Insurance</p>
                        <p className="Industry" data-value="Logistics-SupplyChain" onClick={handleIndustryClick}>Logistics and Supply Chain</p>
                        <p className="Industry" data-value="RenewableEnergy" onClick={handleIndustryClick}>Renewable Energy</p>
                        <p className="Industry" data-value="Mining-NaturalResources" onClick={handleIndustryClick}>Mining and Natural Resources</p>
                        <p className="Industry" data-value="Publishing-Printing" onClick={handleIndustryClick}>Publishing and Printing</p>
                        <p className="Industry" data-value="Music-AudioProduction" onClick={handleIndustryClick}>Music and Audio Production</p>
                        <p className="Industry" data-value="EDTech" onClick={handleIndustryClick}>Education Technology (EdTech)</p>
                        <p className="Industry" data-value="FitTech" onClick={handleIndustryClick}>Fitness Technology (FitTech)</p>
                        <p className="Industry" data-value="Robotics-Automation" onClick={handleIndustryClick}>Robotics and Automation</p>
                        <p className="Industry" data-value="Virtual-AugmentedReality" onClick={handleIndustryClick}>Virtual and Augmented Reality</p>
                        <p className="Industry" data-value="InteriorDesing-HomeDecor" onClick={handleIndustryClick}>Interior Design and Home Decor</p>
                        <p className="Industry" data-value="Crypto-Blockhain" onClick={handleIndustryClick}>Cryptocurrency and Blockchain</p>
                        <p className="Industry" data-value="AeroSpace-SpaceExploration" onClick={handleIndustryClick}>Aerospace and Space Exploration</p>
                        <p className="Industry" data-value="Nanotechnology" onClick={handleIndustryClick}>Nanotechnology</p>

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
                        <p className="Skill" data-value="IT" onClick={handleSkillClick}>Programming</p>
                        <p className="Skill" data-value="Healthcare" onClick={handleSkillClick}>Web Development</p>
                        <p className="Skill" data-value="Finance" onClick={handleSkillClick}>Database Management</p>
                        <p className="Skill" data-value="Education" onClick={handleSkillClick}>Software Development</p>
                        <p className="Skill" data-value="Retail" onClick={handleSkillClick}>Networking</p>
                        <p className="Skill" data-value="Travel" onClick={handleSkillClick}>Cybersecurity</p>
                        <p className="Skill" data-value="Automotive" onClick={handleSkillClick}>Cloud Computing</p>
                        <p className="Skill" data-value="DevOps" onClick={handleSkillClick}>DevOps</p>
                        <p className="Skill" data-value="DataAnalysis-DataScience" onClick={handleSkillClick}>Data Analysis and Data Science</p>
                        <p className="Skill" data-value="IT-Support" onClick={handleSkillClick}>IT Support</p>
                        <p className="Skill" data-value="MobileAppDevelopment" onClick={handleSkillClick}>Mobile App Development</p>
                        <p className="Skill" data-value="Agile-Methodology" onClick={handleSkillClick}>Agile Methodology</p>
                        <p className="Skill" data-value="ProjectManagement" onClick={handleSkillClick}>Project Management</p>
                        <p className="Skill" data-value="DigitalMarketing" onClick={handleSkillClick}>Digital Marketing</p>
                        <p className="Skill" data-value="Sales-BusinessDevelopment" onClick={handleSkillClick}>Sales and Business Development:</p>
                        <p className="Skill" data-value="CustomerService" onClick={handleSkillClick}>Customer Service</p>
                        <p className="Skill" data-value="CommunicationSkills" onClick={handleSkillClick}>Communication Skills</p>
                        <p className="Skill" data-value="ProblemSolving" onClick={handleSkillClick}>Problem Solving</p>
                        <p className="Skill" data-value="Creativity" onClick={handleSkillClick}>Creativity</p>
                        <p className="Skill" data-value="Financial-Literacy" onClick={handleSkillClick}>Financial Literacy</p>
                        <p className="Skill" data-value="DataVisualization" onClick={handleSkillClick}>Data Visualization</p>
                        <p className="Skill" data-value="Content-Creation" onClick={handleSkillClick}>Content Creation</p>
                        <p className="Skill" data-value="ForeignLanguageProficiency" onClick={handleSkillClick}>Foreign Language Proficiency</p>
                        <p className="Skill" data-value="PublicSpeaking" onClick={handleSkillClick}>Public Speaking</p>
                        <p className="Skill" data-value="EmotionalIntelligence" onClick={handleSkillClick}>Emotional Intelligence</p>
                        <p className="Skill" data-value="Negotiation" onClick={handleSkillClick}>Negotiation</p>
                        <p className="Skill" data-value="CriticalThinking" onClick={handleSkillClick}>Critical Thinking</p>
                        <p className="Skill" data-value="TimeManagement" onClick={handleSkillClick}>Time Management</p>
                        <p className="Skill" data-value="QualityAssurance-Testing" onClick={handleSkillClick}>Quality Assurance and Testing</p>
                        <p className="Skill" data-value="MarketResearch" onClick={handleSkillClick}>Market Research</p>
                        <p className="Skill" data-value="HumanResources" onClick={handleSkillClick}>Human Resources</p>


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