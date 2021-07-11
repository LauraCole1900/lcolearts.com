import React, { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";

const BlogEntry = (): ReactElement => {


  return (
    <>
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <h1>Blog Entry Title Here</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <p>And this isn't my nose. This is a false one. I'm not a witch. Bring her forward! We want a shrubbery!! You don't vote for kings.

              What do you mean? I am your king. The Knights Who Say Ni demand a sacrifice! Well, we did do the nose. I have to push the pram a lot.

              You can't expect to wield supreme power just 'cause some watery tart threw a sword at you!
              I don't want to talk to you no more, you empty-headed animal food trough water! I fart in your general direction! Your mother was a hamster and your father smelt of elderberries! Now leave before I am forced to taunt you a second time! You don't frighten us, English pig-dogs! Go and boil your bottoms, sons of a silly person! I blow my nose at you, so-called Ah-thoor Keeng, you and all your silly English K-n-n-n-n-n-n-n-niggits!</p>

            <ul>
              <li>…Are you suggesting that coconuts migrate?</li>
              <li>And this isn't my nose. This is a false one.</li>
              <li>Burn her anyway!</li>
              <li>Well, she turned me into a newt.</li>
            </ul>

            <p>And the hat. She's a witch! I dunno. Must be a king. We want a shrubbery!! Well, we did do the nose. Well, how'd you become king, then?</p>

            <ol>
              <li>Shut up! Will you shut up?!</li>
              <li>Camelot!</li>
              <li>Where'd you get the coconuts?</li>
            </ol>

            <p>Shut up! Will you shut up?! Shut up! Shh! Knights, I bid you welcome to your new home. Let us ride to Camelot! We shall say 'Ni' again to you, if you do not appease us. No, no, no! Yes, yes. A bit. But she's got a wart.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BlogEntry;