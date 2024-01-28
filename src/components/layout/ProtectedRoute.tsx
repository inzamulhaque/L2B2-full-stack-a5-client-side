import { ReactNode, useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  const token = useAppSelector(useCurrentToken);

  if (isLoading) {
    return <h1 style={{ fontWeight: "bold", fontSize: "24px" }}>Loading...</h1>;
  }

  if (!token) {
    return <Navigate to="/user/signin" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
