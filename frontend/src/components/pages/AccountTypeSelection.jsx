import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
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
  const [redirectPage, setRedirectPage] = useState();
  const [loading, setLoading] = useState(true);
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    if (user && user.userId === undefined) {
      const addUser = async () => {
        const dbUserData = {
          email: user.email,
          name: user.name,
          picture: user.picture,
          onBoardingFinished: false,
        };
        //send userinfo to backend and get userid back
        /*
        withAuth.post("/user/create", dbUserData).then(({ status, json }) => {
          //user exists
          if (status === 200) {
            if (json.onBoardingFinished) setRedirectPage("/browse");
            else setRedirectPage("/profileone");
          } else if (status === 201) setRedirectPage("/profileone"); //user didn't exist
          localStorage.setItem("userId", json.userId);
          setLoading(false);
        });
        */
      };
      addUser();
    }
  }, [user, withAuth]);

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
            active={activeCard === 1}
            setActive={() => setActiveCard(1)}
          />
          <Card
            logo={briefcaseIcon}
            header="Sign up as a candidate"
            description="Discover the perfect job matches"
            active={activeCard === 2}
            setActive={() => setActiveCard(2)}
          />
        </div>
        <div id="account-type-box-bottom">
          <button>Cancel</button>
          <button>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default CallbackPage;
