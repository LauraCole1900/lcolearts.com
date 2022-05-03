import { Component, ReactElement } from "react";
import { Row, Col, Image } from "react-bootstrap";
import ProjectCard from "../project";
import projects from "../../projects.json";
import { Bootstrap2, CssCircle, Express3, GitHubDark, GraphQL, HtmlCircle, jQuery, JavaScript, Jwt, Materialize, Mern, MongoDB, MySQL, Node, Npm, ReactIcon, ReactBootstrap, TypeScript } from "../../pix";
import { Project } from "../../utils/interfaces";
import "./style.css";


class WebPortfolio extends Component {
  state = { projects };

  render(): ReactElement {
    return (
      <>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            <Row>
              <Col sm={12}>
                <h1>Web Development Portfolio</h1>
              </Col>
            </Row>
            <Row>
              <Col sm={10}>
                <h3>Double-click any project for more information</h3>
              </Col>
              <Col sm={2}>
                <p className="flexEnd">See more on &nbsp;<a href="https://github.com/LauraCole1900" rel="noreferrer noopener" target="_blank"><Image fluid src={GitHubDark} alt="GitHub icon" className="icon" /></a></p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            {this.state.projects.map((project: Project): ReactElement => (
              <ProjectCard
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                subtitle={project.subtitle}
                description={project.description}
                tech={project.tech}
                repo={project.repo}
                deployed={project.deployed}
                deploy_button_label={project.deploy_button_label}
              />
            ))}
          </Col>
        </Row>
        <Row className="topMargin">
          <Col sm={{ span: 10, offset: 1 }}><h1 className="outline">Technical Skills</h1></Col>
        </Row>
        <Row className="flexCenter addMargin">
          <Col sm={{ span: 10, offset: 1 }}>
            <Image fluid src={HtmlCircle} alt="HTML5" className="iconBig darkBg" />
            <Image fluid src={CssCircle} alt="CSS3" className="iconBig darkBg" />
            <Image fluid src={Bootstrap2} alt="Bootstrap" className="iconBig" />
            <Image fluid src={Materialize} alt="Materialize" className="iconBig" />
            <Image fluid src={JavaScript} alt="JavaScript" className="iconBig" />
            <Image fluid src={jQuery} alt="jQuery" className="iconBig" />
            <Image fluid src={TypeScript} alt="TypeScript" className="iconBig" />
            <Image fluid src={Node} alt="Node.js" className="iconBig darkBg" />
            <Image fluid src={Npm} alt="NPM" className="iconBig" />
            <Image fluid src={Jwt} alt="JWT" className="iconBig" />
            <Image fluid src={Express3} alt="Express" className="iconBig" />
            <Image fluid src={GraphQL} alt="GraphQL" className="iconBig" />
            <Image fluid src={MySQL} alt="MySQL" className="iconBig ltBg" />
            <Image fluid src={MongoDB} alt="MongoDB" className="iconBig darkBg" />
            <Image fluid src={GitHubDark} alt="GitHub" className="iconBig ltBg" />
            <Image fluid src={ReactIcon} alt="React" className="iconBig" />
            <Image fluid src={ReactBootstrap} alt="React Bootstrap" className="iconBig" />
            <Image fluid src={Mern} alt="MERN" className="iconBig" />
          </Col>
        </Row>
      </>
    );
  }
}

export default WebPortfolio;