import React, { useContext, createContext, useEffect, useReducer } from 'react';

const initialContext = {
  home: true,
  skills: false,
  works: false,
  contact: false,
};

const ResponsiveContext = createContext(initialContext);

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

  const [state, dispatch] = useReducer(reducer, initialContext);

  return (
    <ResponsiveContext.Provider value={{ state, dispatch }}>{children}</ResponsiveContext.Provider>
  );
};
export const useResponsiveContext = () => useContext(ResponsiveContext);
