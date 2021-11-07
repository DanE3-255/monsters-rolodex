import "./card-list.styles.css";
import Card from "../card/card.component";

function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((data) => (
        <Card key={data.id} monster={data} />
      ))}
    </div>
  );
}

export default CardList;
