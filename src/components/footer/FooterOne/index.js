import React from "react";
import socialIcons from "../../../data/SocialNetworks";
const FooterOne = ({ next, prev }) => {
  return (
    <div className="footer-section position-fixed section pt-30 pb-30">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="footer-search col-lg-4 col-12 order-lg-3 order-2 mb-sm-15 mb-xs-15">
            {socialIcons.map((social) => (
              <a
                style={{
                  padding: "48px",
                }}
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
    </div>
  );
};

export default FooterOne;
