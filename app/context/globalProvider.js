"use client";

import React, { createContext, useState, useContext } from "react";
import themes from "./themes";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ childern }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = theme[selectedTheme];
  return (
    <GlobalContext.Provider
      value={{
        theme,
      }}
    >
      <GlobalUpdateContext.Provider value={{}}>
        {childern}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);
