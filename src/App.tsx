import 'bootstrap/dist/css/bootstrap.min.css';
import React, { ReactElement } from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "./components/navbar";
import { About, Blog, BlogEntry, Contact, Landing, MartialArtist, Musician, NotFound, WebPortfolio } from "./components/pages";
import Footer from "./components/footer";

const App = (): ReactElement => {


  return (
    <div>
      <Router>
        <Navigation />
        <Container fluid className="mycontainer">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/webdev" component={WebPortfolio} />
            <Route exact path="/martial_artist" component={MartialArtist} />
            <Route exact path="/musician" component={Musician} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blog/*" component={BlogEntry} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path={["/"]} component={Landing} />
            <Route component={NotFound} />
          </Switch>
        </Container>
        <div>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;