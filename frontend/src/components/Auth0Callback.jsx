import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useFetch } from "../api/requestHooks";

const CallbackPage = () => {
  const { isLoading, user } = useAuth0();
  const withAuth = useFetch();
  const [redirectPage, setRedirectPage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && user.userId === undefined) {
      const addUser = async () => {
        const dbUserData = {
          email: user.email,
          name: user.name,
          picture: user.picture,
        };
        //send userinfo to backend and get userid back
        withAuth.post("/user/create", dbUserData).then(({ status, json }) => {
          if (status === 200) setRedirectPage("/profile");
          else if (status === 201) setRedirectPage("/profileone");
          localStorage.setItem("userId", json.userId);
          setLoading(false);
        });
      };
      addUser();
    }
  }, [user, withAuth]);

  return (
    <>
      {loading && isLoading ? (
        <div>Loading...</div>
      ) : (
        <Navigate to={redirectPage} replace={true} />
      )}
    </>
  );
};

export default CallbackPage;
