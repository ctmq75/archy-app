import React, { useState, createContext } from 'react'

export const MyContext = createContext({
    coords: [],
    setCoords: () => {}
})


export const MyProvider = ({ children }) => {
    const [coords, setCoords] = useState();
  
    return (
      <MyContext.Provider
        value={{
          coords,
          setCoords,
        }}
      >
        {children}
      </MyContext.Provider>
    );
  };