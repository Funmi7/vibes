import { Route, Routes } from "react-router-dom";
import Homepage from "../screens/home/Homepage";

import Login from "screens/login/LoginPage";
import WithSpotifyTokenRoute from "layouts/WithSpotifyTokenRoute";
import PrivateRoute from "./PrivateRoute";
import TracksList from "screens/common/tracks/Tracks";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<WithSpotifyTokenRoute />}>
        <Route path="/" element={<PrivateRoute component={Homepage} />} />
        <Route path="/:id" element={<PrivateRoute component={TracksList} />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
