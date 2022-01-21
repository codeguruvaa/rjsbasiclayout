import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import Cards from './Components/Cards';
import Header from './Components/Header';
import Lsbox from './Components/Lsbox';
import Rsbox from './Components/Rsbox';

function App() {
  return (
    <div>

    <Header />
    <Container style={{marginTop:'10px'}}>
      <Row>
      <Col sm={6} lg={9}>
        <Lsbox />
      </Col>  
      <Col sm={6} lg={3}>
        <Rsbox />
      </Col>
      </Row>
    </Container>

    <Container style={{marginTop:'25px'}}>
      <Cards />
    </Container>



    </div>
  );
}

export default App;