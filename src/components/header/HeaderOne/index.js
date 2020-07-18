import React from "react";
import Logo from "../../logo";
import NavBar from "../../navbar";
import HeaderSocial from "../../HeaderSocial";
import HeaderContainer from "../../../container/header";

const Header = ({ classes }) => {
  return (
    <HeaderContainer classes={classes ? classes : null}>
      <Logo />

      <NavBar />

      <HeaderSocial noSocial={true} />
    </HeaderContainer>
  );
};

export default Header;
