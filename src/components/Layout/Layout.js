import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";
import Burger from "../Burger/Burger";
const layout = props => (
  <Aux>
    <Burger />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
