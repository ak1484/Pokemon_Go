import React from "react";

export default function Details(props) {
  return (
    <div>
      <h3>Height : {props.height}</h3>
      <h3>Weight : {props.weight}</h3>
      <h3>No of Moves : {props.moves}</h3>
    </div>
  );
}
