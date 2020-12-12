import React, { useContext, createContext, useEffect, useReducer } from 'react';

const ResponsiveContext = createContext(null);

export const ResponsiveProvider = ({ children }) => {
  const reducer = (state, action) => {
    if (action.type === 'scroll') {
      let newState = {};
      Object.keys(state).map((key) =>
        key === action.payload ? (newState[key] = true) : (newState[key] = false)
      );

      return { ...newState };
    }
  };

  const responsiveVars = {
    home: true,
    skills: false,
    works: false,
    contact: false,
  };

  const [state, dispatch] = useReducer(reducer, responsiveVars);

  return (
    <ResponsiveContext.Provider value={{ state, dispatch }}>{children}</ResponsiveContext.Provider>
  );
};
export const useResponsiveContext = () => useContext(ResponsiveContext);
