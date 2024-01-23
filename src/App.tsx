import { ReactElement } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Navigation from "./components/navbar";
import { About, Contact, Games, Landing, MartialArtist, Musician, NotFound, Redirect, WebPortfolio } from "./components/pages";
import Footer from "./components/footer";
import './App.css';

const App = (): ReactElement => {

  const routesArr: Array<string> = ['about', 'webdev', 'musician', 'martial_artist', 'fun_and_games', 'contact', ''];

  const urlArr: Array<string> = location.href.split('/');

  // if (!urlArr.includes('#')) {
  //   location.replace(`https://lcolearts.com/#/${urlArr.at(-1)}`);
  // };

  return (
    <>
      <Router basename={`/`}>
        <Navigation />
        <Container fluid className="mycontainer">
          <Routes>
            <Route path="/about" element={<><About /><Footer /></>} />
            <Route path="/webdev" element={<><WebPortfolio /><Footer /></>} />
            <Route path="/musician" element={<><Musician /><Footer /></>} />
            <Route path="/martial_artist" element={<><MartialArtist /><Footer /></>} />
            <Route path="/fun_and_games" element={<><Games /><Footer /></>} />
            <Route path="/contact" element={<><Contact /><Footer /></>} />
            <Route path="/:redirect" element={<><Redirect /><Footer /></>} />
            <Route path="" element={<Landing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;