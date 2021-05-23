import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navigation from "./components/navbar";
import { About, Contact, Landing, MartialArtist, Musician, WebPortfolio } from "./components/pages";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Container fluid className="mycontainer">
          <Route exact path="/LauraECole/about" component={About} />
          <Route exact path="/LauraECole/webdev" component={WebPortfolio} />
          <Route exact path="/LauraECole/martial_artist" component={MartialArtist} />
          <Route exact path="/LauraECole/musician" component={Musician} />
          <Route exact path="/LauraECole/contact" component={Contact} />
          <Route exact path={["/", "/LauraECole"]} component={Landing} />
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