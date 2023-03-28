import { Route, Routes } from "react-router-dom";
import Homepage from "../screens/home/Homepage";

import UserStateContext from "common/context/UserContext";
import Login from "screens/login/LoginPage";

const AllRoutes = () => {
  return (
    <UserStateContext>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </UserStateContext>
  );
};

export default AllRoutes;
