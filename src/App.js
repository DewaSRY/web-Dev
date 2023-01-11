import React, { useState, useEffect } from "react";
import "./App.css";

import SeacrhBox from "./components/search-box/seacrch-box-component";
import CardList from "./components/card-list/card-list-component";

function App() {
  const [SearchField, setSearchField] = useState(" ");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredMonster = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(SearchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">My monster list</h1>
      <SeacrhBox
        className="search-box"
        search={onSearchChange}
        placeholder="search monster"
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
}

export default App;
