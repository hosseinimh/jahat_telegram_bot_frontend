import React from "react";

import { AppContextProvider } from "../store";
import { ErrorBoundary } from "../features/error/components";

const AppProvider = ({ children }) => {
  return (
    <AppContextProvider>
      <ErrorBoundary>{children}</ErrorBoundary>
    </AppContextProvider>
  );
};

export default AppProvider;
