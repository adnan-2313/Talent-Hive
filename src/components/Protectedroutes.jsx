import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";
const Protectedroutes = ({ children }) => {
  const { isSignedIn, use, isLoaded } = useUser();
  const { pathname } = useLocation();

  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to="/?sign-in=true" />;
  }

  return children;
};

export default Protectedroutes;
