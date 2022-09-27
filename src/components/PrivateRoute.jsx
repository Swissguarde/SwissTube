import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import { ImSpinner10 } from "react-icons/im";

const PrivateRoute = () => {
  const { loggedIn, loading } = useAuthStatus();
  if (loading) {
    return (
      <div>
        <button type="button" className=" bg-indigo-500">
          <ImSpinner10 className="mr-3 h-5 w-5 animate-spin" />
          Loading...
        </button>
      </div>
    );
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};
export default PrivateRoute;
