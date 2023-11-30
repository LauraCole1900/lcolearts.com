import { ReactElement } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Navigation from "./components/navbar";
import { About, Contact, Games, Landing, MartialArtist, Musician, NotFound, WebPortfolio } from "./components/pages";
import Footer from "./components/footer";
import './App.css';

const App = (): ReactElement => {

  const routesArr = ['about', 'webdev', 'musician', 'martial_artist', 'fun_and_games', 'contact', ''];

  const urlArr = location.href.split('/');

  if (!urlArr.includes('#') && urlArr.at(-1) === 'music') {
    location.replace('https://lcolearts.herokuapp.com/music/page/1');
  } else if (!urlArr.includes('#') && urlArr.at(-1) === 'blog') {
    location.replace('https://lcolearts.herokuapp.com/blog/page/1');
  } else if (!routesArr.includes(urlArr.at(-1)!)) {
    location.replace(`https://lcolearts.com/#/${urlArr.at(-1)}`);
  };

  return (
    <>
      <Router>
        <Navigation />
        <Container fluid className="mycontainer">
          <Routes>
            <Route path="/about" element={<><About /><Footer /></>} />
            <Route path="/webdev" element={<><WebPortfolio /><Footer /></>} />
            <Route path="/musician" element={<><Musician /><Footer /></>} />
            <Route path="/martial_artist" element={<><MartialArtist /><Footer /></>} />
            <Route path="/fun_and_games" element={<><Games /><Footer /></>} />
            <Route path="/contact" element={<><Contact /><Footer /></>} />
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;