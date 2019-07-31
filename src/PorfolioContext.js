import React, { useState, createContext } from 'react';

export const PortfolioContext = createContext();

export const PortfolioProvider = props => {
  const [socialData] = useState([
    { id: 1, name: 'facebook'  },
    { id: 2, name: 'twitter'   },
    { id: 3, name: 'github'    },
    { id: 4, name: 'instagram' }
  ])

  return (
    <PortfolioContext.Provider value={[socialData]}>
      {props.children}
    </PortfolioContext.Provider>
  );
}