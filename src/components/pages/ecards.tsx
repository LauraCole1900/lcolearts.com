import { Component, ReactElement } from "react";
import { Row, Col, Image } from "react-bootstrap";
import GameCard from "../game";
import ecards from "../../ecards.json";
import { GitHubDark } from "../../pix";
import { Game } from "../../utils/interfaces";
import "./style.css";


class Ecards extends Component {
  state = { ecards };

  render(): ReactElement {
    return (
      <>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            <Row>
              <Col sm={10}>
                <h1>E-Cards</h1>
              </Col>
              <Col sm={2}>
                <p className="flexEnd">See more on &nbsp;<a href="https://github.com/LauraCole1900" rel="noreferrer noopener" target="_blank" aria-label="my GitHub"><Image fluid src={GitHubDark} alt="GitHub icon" className="icon" /></a></p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            {this.state.ecards.map((ecard: Game): ReactElement => (
              <GameCard
                id={ecard.id}
                key={ecard.id}
                name={ecard.name}
                image={ecard.image}
                description={ecard.description}
                deployed={ecard.deployed}
                deploy_button_label={ecard.deploy_button_label}
              />
            ))}
          </Col>
        </Row>
        <Row className="addMargin"></Row>
      </>
    );
  }
}

export default Ecards;