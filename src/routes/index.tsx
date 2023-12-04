import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import PrivateRoute from "./PrivateRoute";
import CenterLoader from "common/components/loader/CenterLoader";

const Login = lazy(() => import("screens/login/LoginPage"));
const Homepage = lazy(() => import("screens/home/Homepage"));
const TracksList = lazy(() => import("screens/common/tracks/Tracks"));

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <Suspense fallback={<CenterLoader />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="/"
        element={
          <Suspense fallback={<CenterLoader />}>
            <PrivateRoute component={Homepage} />
          </Suspense>
        }
      />
      <Route
        path="/:id"
        element={
          <Suspense fallback={<CenterLoader />}>
            <PrivateRoute component={TracksList} />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
