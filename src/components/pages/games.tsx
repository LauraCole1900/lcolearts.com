import { Component, ReactElement } from "react";
import { Row, Col, Image } from "react-bootstrap";
import ProjectCard from "../project";
import games from "../../games.json";
import { GitHubDark } from "../../pix";
import { Project } from "../../utils/interfaces";
import "./style.css";


class Games extends Component {
  state = { games };

  render(): ReactElement {
    return (
      <>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            <Row>
              <Col sm={12}>
                <h1>Fun & Games</h1>
              </Col>
            </Row>
            <Row>
              <Col sm={10}>
                <h3>Double-click any card for more information</h3>
              </Col>
              <Col sm={2}>
                <p className="flexEnd">See more on &nbsp;<a href="https://github.com/LauraCole1900" rel="noreferrer noopener" target="_blank"><Image fluid src={GitHubDark} alt="GitHub icon" className="icon" /></a></p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            {this.state.games.map((game: Project): ReactElement => (
              <ProjectCard
                id={game.id}
                key={game.id}
                name={game.name}
                image={game.image}
                subtitle={game.subtitle}
                description={game.description}
                tech={game.tech}
                repo={game.repo}
                deployed={game.deployed}
                deploy_button_label={game.deploy_button_label}
              />
            ))}
          </Col>
        </Row>
      </>
    );
  }
}

export default Games;