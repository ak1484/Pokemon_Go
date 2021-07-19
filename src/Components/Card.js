import React from "react";
import classes from "./Cart.module.css";
export default function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
