import React, { useState, createContext } from 'react';

export const PortfolioContext = createContext();

export const PortfolioProvider = props => {
  const [socialData] = useState([
    { id: 1, name: 'facebook', link: 'https://github.com/josesantanaweb' },
    { id: 2, name: 'twitter', link: 'https://github.com/josesantanaweb' },
    { id: 3, name: 'github', link: 'https://github.com/josesantanaweb' },
    { id: 4, name: 'instagram', link: 'https://github.com/josesantanaweb' }
  ])

  return (
    <PortfolioContext.Provider value={[socialData]}>
      {props.children}
    </PortfolioContext.Provider>
  );
}