import Card from "./card";
import "./card-list.css";

const CardList = (props) => {
  const { monsters } = props;

  return (
    <div>
      <h1>hallo i'm the CardList Component</h1>
      <hr />
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <div key={monster.id} className="card-container">
              <Card monster_card={monster} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CardList;
