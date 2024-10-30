import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import * as PAGE_COMPONENTS from "../types/pageComponents";
import { ENV } from "../config";

const AppRoutes = () => {
  return (
    <Router basename={ENV.homePage}>
      <Routes>
        <Route path={`/:groupId`} element={<PAGE_COMPONENTS.DashboardPage />} />
        <Route path="*" element={<Navigate to={`/errors/404`} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
