import { Route, Routes } from "react-router-dom";
import Homepage from "../screens/home/Homepage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
};

export default AllRoutes;
