import { Route, Routes } from "react-router-dom";
import Homepage from "../screens/home/Homepage";

import UserStateContext from "common/context/UserContext";

const AllRoutes = () => {
  return (
    <Routes>
      <UserStateContext>
        <Route path="/" element={<Homepage />} />
      </UserStateContext>
    </Routes>
  );
};

export default AllRoutes;
