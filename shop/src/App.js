import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import {a, b, data} from './data';
import Card from './component/card';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">HelloShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'>
      </div>
      <div className='container'>
        <div className='row'>
          {
            shoes.map((e, i)=>{
              return (
                <Card shoe={e} num={i}></Card>
              );
            })
          }
        </div>
      </div>
      <Button variant="primary">Primary</Button>{' '}
    </div>
  );
}

export default App;
