// ThemeContext.js
import React, { createContext, useState } from 'react';

export const MediaContext = createContext();

export const MediaProvider = ({ children }) => {
  const [option, setOption] = useState("home");
return (
    <MediaContext.Provider value={{option, setOption}}>
      {children}
    </MediaContext.Provider>
  );
};
// export {MediaContext,MediaProvider}
