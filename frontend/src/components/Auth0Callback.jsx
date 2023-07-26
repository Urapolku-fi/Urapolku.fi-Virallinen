import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const CallbackPage = () => {
  const { isLoading, user } = useAuth0();

  useEffect(() => {
    console.log(user);
  }, [user]);

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
