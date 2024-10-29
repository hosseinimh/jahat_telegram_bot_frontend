import React, { createContext, useReducer, useContext } from "react";

import { appDefaultValues } from "./AppDefaultValues";
import { appReducer } from "./AppReducer";

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, appDefaultValues);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext() {
  return useContext(AppContext);
}
