import 'bootstrap/dist/css/bootstrap.min.css';
import React, { ReactElement } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Container from "react-bootstrap/Container";
import Navigation from "./components/navbar";
import { About, Blog, BlogEntry, Contact, Landing, MartialArtist, Musician, NotFound, WebPortfolio } from "./components/pages";
import Footer from "./components/footer";

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = (): ReactElement => {


  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Navigation />
          <Container fluid className="mycontainer">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/webdev" element={<WebPortfolio />} />
              <Route path="/martial_artist" element={<MartialArtist />} />
              <Route path="/musician" element={<Musician />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/*" element={<BlogEntry />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Landing />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
          <div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
          <Footer />
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;