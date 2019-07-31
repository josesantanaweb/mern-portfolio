import React, {useContext} from "react";
import {PortfolioContext} from '../../PorfolioContext';

const Social = () => {
  const [socialData] = useContext(PortfolioContext)

  return (
    <React.Fragment>
      <div className="social">
        <span>Follow Us</span>
        <div className="social-list">
          {socialData.map(social => (
            <a href={social.name} key={social.id}>
              <i className={`fa fa-${social.name}`}></i>
            </a>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Social;