import { Route, Routes } from "react-router-dom";
import Homepage from "../screens/home/Homepage";

import Login from "screens/login/LoginPage";
import PrivateRoute from "./PrivateRoute";
import TracksList from "screens/common/tracks/Tracks";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute component={Homepage} />} />
      <Route path="/:id" element={<PrivateRoute component={TracksList} />} />
    </Routes>
  );
};

export default AllRoutes;
