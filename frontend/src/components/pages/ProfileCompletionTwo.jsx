import LeftBar from "./ProfileCompletion/LeftBarProfile";
import SkipButton from "./ProfileCompletion/SkipButton";
import NextButton from "./ProfileCompletion/nextButton";
import ProgressBar from "./ProfileCompletion/progressBar";
import UrapolkuLogo from "./ProfileCompletion/UrapolkuLogoText";
import "../css/profileCompletionTwo.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../api/requestHooks";

function ProfileCompletionTwo() {
  const [openIndustry, setOpenIndustry] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [skills, setSkills] = useState([]);
  const [industry, setIndustry] = useState("");
  const IndustrySelectRef = useRef();
  const navigate = useNavigate();
  const withAuth = useFetch();

  const openFuncs = [setOpenSkills, setOpenIndustry];

  const handleIndustryClick = (event) => {
    const IndustryDataValue = event.currentTarget.textContent;
    IndustrySelectRef.current.textContent = IndustryDataValue; // Check if IndustrySelectRef.current is not null before setting textContent
    setIndustry(IndustryDataValue);
    setOpenIndustry(false);
  };

  const handleSkillClick = (event) => {
    const skillDataValue = event.currentTarget.getAttribute("data-value");
    // If 4 skills clicked do nothing
    // If skills list contains user clicked skill it removes it from the list
    if (skills.includes(skillDataValue)) {
      const updatedSkills = skills.filter((skill) => skill !== skillDataValue);
      setSkills(updatedSkills);
    } else if (skills.length < 4) {
      setSkills((prevSkills) => [...prevSkills, skillDataValue]);
    }
  };

  const handleOpen = (opener) => {
    opener((prevState) => !prevState); // Toggle the state
    openFuncs.filter((func) => func !== opener).forEach((func) => func(false)); // Close other states
  };

  const nextPage = () => {
    // User placed data will save and move to next-page
    const profileData = {
      industry: industry,
      skills: skills,
    };

    withAuth.patch(`/user/${localStorage.getItem("userId")}`, profileData);
    navigate("/profilethree");
  };

  const skipPage = () => {
    // No data saved, just skipped
    navigate("/profilethree");
  };

  const industries = [
    { value: "IT", label: "Information Technology (IT)" },
    { value: "Healthcare-Medicine", label: "Healthcare and Medicine" },
    { value: "Finance-Banking", label: "Finance and Banking" },
    { value: "Education-ELearning", label: "Education and E-Learning" },
    { value: "Retail-Ecommerce", label: "Retail and E-commerce" },
    { value: "Travel-Tourism", label: "Travel and Tourism" },
    {
      value: "Automotive-Transportation",
      label: "Automotive and Transportation",
    },
    { value: "Entertainment-Media", label: "Entertainment and Media" },
    { value: "RealEstate-Property", label: "Real estate and property" },
    { value: "Fashion-Apparel", label: "Fashion and apparel" },
    { value: "Energy-Utilities", label: "Energy and Utilities" },
    {
      value: "Manufacturing-Production",
      label: "Manufacturing and Production",
    },
    { value: "Agriculture-Farming", label: "Agriculture and Farming" },
    { value: "Hospitality-Events", label: "Hospitality and Events" },
    {
      value: "Environment-Sustainability",
      label: "Environmental and Sustainability",
    },
    { value: "Gaming-InteractiveMedia", label: "Gaming and Interactive Media" },
    { value: "Sports-Fitness", label: "Sports and Fitness" },
    { value: "Marketing-Advertising", label: "Marketing and Advertising" },
    {
      value: "NonProfit-SocialServices",
      label: "Non-profit and Social Services",
    },
    { value: "Aerospace-Aviation", label: "Aerospace and Aviation" },
    {
      value: "Biotechnology-Pharmaceuticals",
      label: "Biotechnology and Pharmaceuticals",
    },
    {
      value: "Construction-Architecture",
      label: "Construction and Architecture",
    },
    {
      value: "Telecommunication-Networking",
      label: "Telecommunications and Networking",
    },
    { value: "Art-Design", label: "Art and Design" },
    { value: "Legal-LawServices", label: "Legal and Law Services" },
    { value: "Insurance", label: "Insurance" },
    { value: "Logistics-SupplyChain", label: "Logistics and Supply Chain" },
    { value: "RenewableEnergy", label: "Renewable Energy" },
    { value: "Mining-NaturalResources", label: "Mining and Natural Resources" },
    { value: "Publishing-Printing", label: "Publishing and Printing" },
    { value: "Music-AudioProduction", label: "Music and Audio Production" },
    { value: "EDTech", label: "Education Technology (EdTech)" },
    { value: "FitTech", label: "Fitness Technology (FitTech)" },
    { value: "Robotics-Automation", label: "Robotics and Automation" },
    {
      value: "Virtual-AugmentedReality",
      label: "Virtual and Augmented Reality",
    },
    {
      value: "InteriorDesing-HomeDecor",
      label: "Interior Design and Home Decor",
    },
    { value: "Crypto-Blockchain", label: "Cryptocurrency and Blockchain" },
    {
      value: "AeroSpace-SpaceExploration",
      label: "Aerospace and Space Exploration",
    },
    { value: "Nanotechnology", label: "Nanotechnology" },
  ];
  const skillsData = [
    { value: "IT", label: "Programming" },
    { value: "Healthcare", label: "Web Development" },
    { value: "Finance", label: "Database Management" },
    { value: "Education", label: "Software Development" },
    { value: "Retail", label: "Networking" },
    { value: "Travel", label: "Cybersecurity" },
    { value: "Automotive", label: "Cloud Computing" },
    { value: "DevOps", label: "DevOps" },
    {
      value: "DataAnalysis-DataScience",
      label: "Data Analysis and Data Science",
    },
    { value: "IT-Support", label: "IT Support" },
    { value: "MobileAppDevelopment", label: "Mobile App Development" },
    { value: "Agile-Methodology", label: "Agile Methodology" },
    { value: "ProjectManagement", label: "Project Management" },
    { value: "DigitalMarketing", label: "Digital Marketing" },
    {
      value: "Sales-BusinessDevelopment",
      label: "Sales and Business Development",
    },
    { value: "CustomerService", label: "Customer Service" },
    { value: "CommunicationSkills", label: "Communication Skills" },
    { value: "ProblemSolving", label: "Problem Solving" },
    { value: "Creativity", label: "Creativity" },
    { value: "Financial-Literacy", label: "Financial Literacy" },
    { value: "DataVisualization", label: "Data Visualization" },
    { value: "Content-Creation", label: "Content Creation" },
    {
      value: "ForeignLanguageProficiency",
      label: "Foreign Language Proficiency",
    },
    { value: "PublicSpeaking", label: "Public Speaking" },
    { value: "EmotionalIntelligence", label: "Emotional Intelligence" },
    { value: "Negotiation", label: "Negotiation" },
    { value: "CriticalThinking", label: "Critical Thinking" },
    { value: "TimeManagement", label: "Time Management" },
    {
      value: "QualityAssurance-Testing",
      label: "Quality Assurance and Testing",
    },
    { value: "MarketResearch", label: "Market Research" },
    { value: "HumanResources", label: "Human Resources" },
  ];

  return (
    <div id="ProfileCompletion-Wrapper">
      <LeftBar />
      <div className="Profile-completion-two-right">
        <div className="Skipbutton-wrapper" onClick={skipPage}>
          <SkipButton />
        </div>
        <div className="Header-logo">
          <UrapolkuLogo />
        </div>
        <div className="Profile-completion-two-content">
          <div className="Header-text">
            <h3>let’s get to know your skills</h3>
          </div>
          <div className="Industry-dropdown">
            <p className="Industry-text">Industry</p>
            <button
              className="Industry-dropdown-button"
              onClick={() => handleOpen(setOpenIndustry)}
            >
              <p ref={IndustrySelectRef} className="Industry-select-text">
                Select an industry
              </p>
              <img
                className={`Expand-more ${openIndustry ? "up" : ""}`}
                src="pictures/expand-more.png"
                alt=""
              />
            </button>
            {openIndustry && (
              <div className="Industry-dropdown-content">
                {industries.map((industry) => (
                  <p
                    key={industry.value}
                    className="Industry"
                    data-value={industry.value}
                    onClick={handleIndustryClick}
                  >
                    {industry.label}
                  </p>
                ))}
                ;
              </div>
            )}
          </div>
          <div className="skill-dropdown">
            <p>Skills</p>
            <button
              className="skill-dropdown-button"
              onClick={() => handleOpen(setOpenSkills)}
            >
              <p>Select up to 4 skills</p>
              <img
                className={`Expand-more ${openSkills ? "up" : ""}`}
                src="pictures/expand-more.png"
                alt=""
              />
            </button>
            {openSkills && (
              <div className="skill-dropdown-content">
                {skillsData.map((skill) => (
                  <p
                    key={skill.value}
                    className={`Skill ${
                      skills.includes(skill.value) ? "active" : ""
                    }`}
                    data-value={skill.value}
                    onClick={handleSkillClick}
                  >
                    {skill.label}
                  </p>
                ))}
                ;
              </div>
            )}
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

export default ProfileCompletionTwo;
