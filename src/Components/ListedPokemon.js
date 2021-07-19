import React from "react";
import PokemonDetails from "./PokemonDetails.js";
import Card from "./Card.js";
const ListedPokemon = (props) => {
  const content = props.NameData.map((item) => (
    <Card key={item.id}>
      <PokemonDetails url={item.url} name={item.name} />
    </Card>
  ));
  return <>{content}</>;
};
export default ListedPokemon;
