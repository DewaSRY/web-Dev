import { Component } from "react";
import Card from "./card";
import "./card-list.css";
class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div>
        <h1>hallo i'm the CardList Component</h1>
        <hr />
        <div className="card-list">
          {monsters.map((monster) => {
            return (
              <div className="card-container">
                <Card monster_card={monster} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default CardList;
