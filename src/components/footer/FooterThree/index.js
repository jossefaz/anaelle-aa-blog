import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import socialIcons from "../../../data/SocialNetworks";
const FooterThree = ({ position }) => {
  return (
    <div className={`footer-section section position-${position} pt-30 pb-30`}>
      <Container fluid>
        <Row className={"align-items-center"}>
          {socialIcons.map((social) => (
            <a
              style={{
                paddingTop: "48px",
                paddingLeft: "48px",
              }}
              key={social.id}
              href={`https://${social.media}.com/${social.username}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={`fa fa-${social.media}`} />
            </a>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FooterThree;
