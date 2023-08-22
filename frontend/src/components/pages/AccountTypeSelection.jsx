import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../api/requestHooks";
import "../css/accountType.css";
import closeIcon from "../../assets/close-menu.svg";
import checkmarkIcon from "../../assets/checkmark.svg";
import userIcon from "../../assets/user.svg";
import briefcaseIcon from "../../assets/briefcase.svg";

const Card = (props) => {
  return (
    <div
      className={`account-type-card ${props.active ? "active" : "inactive"}`}
      onClick={props.setActive}
    >
      <img className="account-type-card-logo" src={props.logo} />
      <div className="account-type-card-text">
        <p>{props.header}</p>
        <p>{props.description}</p>
      </div>
      {props.active ? (
        <img className="account-type-card-check" src={checkmarkIcon} />
      ) : (
        <div className="account-type-card-nocheck"></div>
      )}
    </div>
  );
};

const CallbackPage = () => {
  const { isLoading, user } = useAuth0();
  const withAuth = useFetch();
  const [accType, setAccType] = useState("employer");
  const navigate = useNavigate();

  const addUser = async () => {
    let dbUserData = {
      email: user.email,
      name: user.name,
      picture: user.picture,
      onBoardingFinished: false,
    };

    withAuth
      .post(`/user/create?type=${accType}`, dbUserData)
      .then(({ status, json }) => {
        //user exists
        /*
        if (status === 200) {
          if (json.onBoardingFinished) navigate("/browse");
          else navigate("/profileone");
        } else if (status === 201) navigate("/profileone"); //user didn't exist
        */
        localStorage.setItem("userId", json.userId);
      });
  };

  return (
    <div id="account-type-page-wrapper">
      <div id="account-type-box">
        <div id="account-type-box-top">
          <img id="account-type-logo" src="/pictures/urapolku.png" />
          <img id="account-type-close" src={closeIcon} />
        </div>
        <p>Choose your account</p>
        <div id="account-type-card-wrapper">
          <Card
            logo={userIcon}
            header="Sign up as an employer"
            description="Access a pool of qualified candidates"
            active={accType === "employer"}
            setActive={() => setAccType("employer")}
          />
          <Card
            logo={briefcaseIcon}
            header="Sign up as a candidate"
            description="Discover the perfect job matches"
            active={accType === "employee"}
            setActive={() => setAccType("employee")}
          />
        </div>
        <div id="account-type-box-bottom">
          <button onClick={() => navigate("/")}>Cancel</button>
          <button onClick={addUser}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default CallbackPage;
