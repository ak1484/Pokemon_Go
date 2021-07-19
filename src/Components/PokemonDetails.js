import React from "react";
import { useEffect, useCallback, useState } from "react";
// import Button from "./Button.js";
import Details from "./Details.js";
const PokemonDetails = (props) => {
  const [toggle, setToggle] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [details, setDetails] = useState(null);
  const fetchPhoto = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(`${props.url}`);
    const data = await response.json();
    setPhoto(data.sprites.front_default);
    const DetailsData = {
      height: data.height,
      weight: data.weight,
      moves: data.moves.length,
    };
    setDetails(DetailsData);
    setIsLoading(false);
  }, [props.url]);
  useEffect(() => {
    fetchPhoto();
  }, [fetchPhoto]);
  const PokemonDetailsHandler = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {!isLoading && <img src={photo} alt="Logo" />}
      <h1>{props.name}</h1>
      {toggle && (
        <Details
          height={details.height}
          weight={details.weight}
          moves={details.moves}
        />
      )}
      <button onClick={PokemonDetailsHandler}>Pokemon Details</button>
    </>
  );
};

export default PokemonDetails;
