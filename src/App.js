import React, { Component } from "react";
import "./App.css";

import SeacrhBox from "./components/search-box/seacrch-box-component";
import CardList from "./components/card-list/card-list-component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchMonsterFiled: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respose) => respose.json())
      .then((user) =>
        this.setState(() => {
          return { monsters: user };
        })
      );
  }

  onSearchChane = (event) => {
    console.log(event.target.value);
    const searchMonsterFiled = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchMonsterFiled };
    });
  };

  render() {
    const { monsters, searchMonsterFiled } = this.state;
    const { onSearchChane } = this;

    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchMonsterFiled);
    });

    return (
      <div className="App">
        <h1 className="app-title">monsters box</h1>
        <SeacrhBox
          placeholder="search monster"
          className="search-box"
          search={onSearchChane}
        />
        <CardList monsters={filteredMonster} />
      </div>
    );
  }
}

export default App;
