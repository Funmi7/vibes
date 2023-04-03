import { Route, Routes } from "react-router-dom";
import Homepage from "../screens/home/Homepage";

import Login from "screens/login/LoginPage";
import WithSpotifyTokenRoute from "layouts/WithSpotifyTokenRoute";
import PrivateRoute from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<WithSpotifyTokenRoute />}>
        <Route path="/" element={<PrivateRoute component={Homepage} />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
