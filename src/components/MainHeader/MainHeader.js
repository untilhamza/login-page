import React from "react";
import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Sample Login Page</h1>
      <Navigation onLogOut={props.onLogOut} isLoggedIn={props.isAutheticated} />
    </header>
  );
};

export default MainHeader;
