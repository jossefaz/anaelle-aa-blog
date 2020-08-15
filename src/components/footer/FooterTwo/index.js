import React from "react";
import socialIcons from "../../../data/SocialNetworks";
const FooterTwo = ({ loadHandler, allItems }) => {
  return (
    <div className="footer-section position-fixed section pb-15">
      <div className="container-fluid">
        <div className="row align-items-center">
          {socialIcons.map((social) => (
            <a
              style={{
                paddingTop: "48px",
                paddingLeft: "48px",
              }}
              className="ml-3"
              key={social.id}
              href={`https://${social.media}.com/${social.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa fa-${social.media}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;
