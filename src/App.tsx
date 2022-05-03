import { ReactElement } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Navigation from "./components/navbar";
import { About, Contact, Landing, MartialArtist, Musician, NotFound, WebPortfolio } from "./components/pages";
import Footer from "./components/footer";


const App = (): ReactElement => {
  const urlArray: string[] = window.location.href.split("/");
  const urlWhere: string | undefined = urlArray.at(-1);
  console.log({ urlWhere });


  return (
    <>
      <Router>
        <Navigation />
        <Container fluid className="mycontainer">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/webdev" element={<WebPortfolio />} />
            <Route path="/musician" element={<Musician />} />
            <Route path="/martial_artist" element={<MartialArtist />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
        {urlWhere !== ""
          ? <><div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
            <Footer />
          </>
          : null}
      </Router>
    </>
  );
}

export default App;