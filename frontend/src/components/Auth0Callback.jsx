import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useFetch } from "../api/user";

const CallbackPage = () => {
  const { isLoading, user } = useAuth0();
  const { postWAuth } = useFetch();

  useEffect(() => {
    if (user) {
      const dbUserData = {
        email: user.email,
        name: user.name,
        picture: user.picture,
      };

      postWAuth("/user/create", dbUserData);
    }
  }, [user, postWAuth]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Navigate to="/landing" replace={true} />
      )}
    </>
  );
};

export default CallbackPage;
