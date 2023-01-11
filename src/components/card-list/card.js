import { Component } from "react";

class Card extends Component {
  render() {
    const { name, id, email, username } = this.props.monster_card;
    return (
      <div key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt="{name}"
        ></img>
        <h3>{username}</h3>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}
export default Card;
