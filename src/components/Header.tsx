import React from "react";
import "../styles/header.scss";

type HeaderProps = {
  mainheader: string;
  subheader: string;
};

const Header = (props: HeaderProps) => {
  return (
    <div className="component-header">
      <div className="component-main-header">{props.mainheader}</div>
      <div className="component-sub-header">{props.subheader}</div>
    </div>
  );
};

export default Header;
