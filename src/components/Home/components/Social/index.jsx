import React from "react";

// Social Data
const socialData = [
  { id: 1, name: 'facebook'  },
  { id: 2, name: 'twitter'   },
  { id: 3, name: 'github'    },
  { id: 4, name: 'instagram' }
];

// Social List
let socialList = socialData.map((social) => {
  return (
    <a href={social.name} key={social.id}>
      <i className={`fa fa-${social.name}`}></i>
    </a>
  )
})


function Social() {
  return (
    <React.Fragment>
      <div className="social">
        <span>Follow Us</span>
        <div className="social-list">
          { socialList }
        </div>
      </div>
    </React.Fragment>
  );
}

export default Social;