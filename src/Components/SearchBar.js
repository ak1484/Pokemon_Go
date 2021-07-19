import React, { createRef } from "react";
import Button from "./Button";
import classes from "./SearchBar.module.css";
const SearchBar = (props) => {
  const textInput = createRef();
  let SearchBarHandler = () => {
    props.onSearchData(textInput.current.value);
  };
  return (
    <div className={classes.input}>
      <input ref={textInput} type="text" placeholder="Name..." />
      <Button onClick={SearchBarHandler}>Search Pokemon</Button>
    </div>
  );
};
export default SearchBar;
