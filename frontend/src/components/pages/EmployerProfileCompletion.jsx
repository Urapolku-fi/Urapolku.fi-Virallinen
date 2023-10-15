import { GradientLeftBar } from './ProfileCompletion/LeftBarProfile';
import SkipButton from './ProfileCompletion/SkipButton';
import NextButton from './ProfileCompletion/nextButton';
import '../css/employerProfileCompletion.css';
import { useNavigate } from 'react-router-dom';
import ProfileImageUpload from '../ProfileImageUpload';
import TextArea from '../TextArea';
import Dropdown from '../Dropdown';
import TextInput from '../TextInput';
import { useState } from 'react';
import { useFetch } from '../../api/requestHooks';

const industries = [
  { value: 'IT', label: 'Information Technology (IT)' },
  { value: 'Healthcare-Medicine', label: 'Healthcare and Medicine' },
  { value: 'Finance-Banking', label: 'Finance and Banking' },
  { value: 'Education-ELearning', label: 'Education and E-Learning' },
  { value: 'Retail-Ecommerce', label: 'Retail and E-commerce' },
  { value: 'Travel-Tourism', label: 'Travel and Tourism' },
  {
    value: 'Automotive-Transportation',
    label: 'Automotive and Transportation',
  },
  { value: 'Entertainment-Media', label: 'Entertainment and Media' },
  { value: 'RealEstate-Property', label: 'Real estate and property' },
  { value: 'Fashion-Apparel', label: 'Fashion and apparel' },
  { value: 'Energy-Utilities', label: 'Energy and Utilities' },
  {
    value: 'Manufacturing-Production',
    label: 'Manufacturing and Production',
  },
  { value: 'Agriculture-Farming', label: 'Agriculture and Farming' },
  { value: 'Hospitality-Events', label: 'Hospitality and Events' },
  {
    value: 'Environment-Sustainability',
    label: 'Environmental and Sustainability',
  },
  { value: 'Gaming-InteractiveMedia', label: 'Gaming and Interactive Media' },
  { value: 'Sports-Fitness', label: 'Sports and Fitness' },
  { value: 'Marketing-Advertising', label: 'Marketing and Advertising' },
  {
    value: 'NonProfit-SocialServices',
    label: 'Non-profit and Social Services',
  },
  { value: 'Aerospace-Aviation', label: 'Aerospace and Aviation' },
  {
    value: 'Biotechnology-Pharmaceuticals',
    label: 'Biotechnology and Pharmaceuticals',
  },
  {
    value: 'Construction-Architecture',
    label: 'Construction and Architecture',
  },
  {
    value: 'Telecommunication-Networking',
    label: 'Telecommunications and Networking',
  },
  { value: 'Art-Design', label: 'Art and Design' },
  { value: 'Legal-LawServices', label: 'Legal and Law Services' },
  { value: 'Insurance', label: 'Insurance' },
  { value: 'Logistics-SupplyChain', label: 'Logistics and Supply Chain' },
  { value: 'RenewableEnergy', label: 'Renewable Energy' },
  { value: 'Mining-NaturalResources', label: 'Mining and Natural Resources' },
  { value: 'Publishing-Printing', label: 'Publishing and Printing' },
  { value: 'Music-AudioProduction', label: 'Music and Audio Production' },
  { value: 'EDTech', label: 'Education Technology (EdTech)' },
  { value: 'FitTech', label: 'Fitness Technology (FitTech)' },
  { value: 'Robotics-Automation', label: 'Robotics and Automation' },
  {
    value: 'Virtual-AugmentedReality',
    label: 'Virtual and Augmented Reality',
  },
  {
    value: 'InteriorDesing-HomeDecor',
    label: 'Interior Design and Home Decor',
  },
  { value: 'Crypto-Blockchain', label: 'Cryptocurrency and Blockchain' },
  {
    value: 'AeroSpace-SpaceExploration',
    label: 'Aerospace and Space Exploration',
  },
  { value: 'Nanotechnology', label: 'Nanotechnology' },
];

function EmployerProfileCompletion() {
  const navigate = useNavigate();
  const withAuth = useFetch();
  const [employerInfo, setEmployerInfo] = useState({
    profilePicture: '',
    bannerPicture: '',
    description: '',
    industry: '',
    location: '',
    numOfEmployees: '',
    website: '',
    onBoardingFinished: false,
  });

  const skipPage = () => {
    navigate('/empbrowse');
  };

  const nextPage = () => {
    const profileData = {
      ...employerInfo,
      onBoardingFinished: true,
    };

    withAuth.patch(`/user/${localStorage.getItem('userId')}?type=Employer`, profileData);
    navigate('/empbrowse');
  };

  return (
    <div id="employer-profile-completion">
      <GradientLeftBar />
      <div id="employer-profile-completion-right-bar">
        <div id="employer-profile-completion-top">
          <div>
            <img src="/pictures/urapolku.png" />
            <p>Urapolku</p>
          </div>
          <SkipButton onClick={skipPage} />
        </div>
        <div id="employer-profile-completion-right-bar-content">
          <h1>Tell us more about you</h1>
          <ProfileImageUpload
            onChange={(type, newValue) =>
              setEmployerInfo({
                ...employerInfo,
                [type === 'profile-picture' ? 'profilePicture' : 'bannerPicture']: newValue,
              })
            }
          />
          <TextArea
            title="Description"
            placeholder="Write a description of your business, it's core values, vision etc."
            onChange={(newVal) => setEmployerInfo({ ...employerInfo, description: newVal })}
          />
          <Dropdown
            title={'Industry'}
            options={industries}
            numberToSelect={1}
            onChange={(newVal) => setEmployerInfo({ ...employerInfo, industry: newVal[0].value })}
          />
          <TextInput
            title="No of employees"
            onChange={(newVal) => setEmployerInfo({ ...employerInfo, numOfEmployees: newVal })}
          />
          <TextInput
            title="Location"
            placeholder="Ex. Helsinki"
            onChange={(newVal) => setEmployerInfo({ ...employerInfo, location: newVal })}
          />
          <TextInput
            title="Official website link"
            onChange={(newVal) => setEmployerInfo({ ...employerInfo, website: newVal })}
          />
          <NextButton onClick={nextPage} />
        </div>
      </div>
    </div>
  );
}

export default EmployerProfileCompletion;
