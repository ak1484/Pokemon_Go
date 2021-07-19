import "./App.css";
import SearchBar from "./Components/SearchBar";
import Title from "./Components/Title";
import { useEffect, useState, useCallback, createRef } from "react";
import ListedPokemon from "./Components/ListedPokemon";
import Button from "./Components/Button";
import classes from "./Components/SearchBar.module.css";
function App() {
  const textInput = createRef();
  const [ListedName, setListedName] = useState([]);
  const [number, setNumber] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const ListedPokemonHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${number}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      const transformedPokemonData = data.results.map((pokemonData) => {
        return {
          id: pokemonData.name,
          name: pokemonData.name,
          url: pokemonData.url,
        };
      });
      setListedName(transformedPokemonData);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, [number]);
  useEffect(() => {
    ListedPokemonHandler();
  }, [ListedPokemonHandler]);
  let content = <p>Found no Pokemon.</p>;

  if (ListedName.length > 0) {
    content = <ListedPokemon NameData={ListedName} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  const SearchedListHandler = (nameSearchData) => {
    let searcjQery = nameSearchData.toLowerCase(),
      displayedNameList = ListedName.filter((el) => {
        let searchValue = el.name.toLowerCase();
        return searchValue.indexOf(searcjQery) !== -1;
      });
    setListedName(displayedNameList);
  };
  let NumberPokemonHandler = () => {
    if (textInput.current.value > 1000) {
      setNumber(1000);
    } else {
      setNumber(textInput.current.value);
    }
  };

  return (
    <div className="App">
      <Title />
      <SearchBar onSearchData={SearchedListHandler} />
      <section className={classes.input}>
        <input ref={textInput} type="text" placeholder="Number.." />
        <br />
        <br />
        <Button onClick={NumberPokemonHandler}>
          Enter number of Pokemon for List at Max 1000
        </Button>
      </section>
      {content}
    </div>
  );
}

export default App;
