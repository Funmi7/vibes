import { Navigate } from "react-router-dom";
import { ElementType, FC } from "react";
import { useSelector } from "react-redux";

import { selectLoggedIn } from "redux/reducers/authorizationSlice";

type PrivateRouteProps = {
  component: ElementType;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ component: Component }) => {
  const loggedIn = useSelector(selectLoggedIn);
  if (!loggedIn) return <Navigate replace to="/login" />;

  return <Component />;
};

export default PrivateRoute;
