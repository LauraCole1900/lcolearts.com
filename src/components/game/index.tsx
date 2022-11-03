import { ReactElement } from "react";
import { Button, Card } from "react-bootstrap";
import { Game } from "../../utils/interfaces";
import "./style.css";

// Flip cards code from here: https://codepen.io/danishyma/pen/dyXEjev


const GameCard = (props: Game): ReactElement => {


  return (
    <Card className="game-card">
      <Card.Header className="card-title"><h2>{props.name}</h2></Card.Header>
      <Card.Img src={process.env.PUBLIC_URL + props.image} alt={props.name} className="bgImage" />
      {/* <Card.Title><h2 className="dev">{props.subtitle}</h2></Card.Title> */}
      <Card.Body>
        <Card.Text>
          {props.description}<br /><br />
        </Card.Text>
        <div className="btndiv">
          <Button className="btn" href={props.deployed} target="_blank">{props.deploy_button_label}</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default GameCard;