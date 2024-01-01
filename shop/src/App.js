import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import {a, b, data} from './data';
import Main from './routes/main';
import Detail from './routes/detail';
import Event from './routes/event';
import About from './routes/about';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">HelloShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={()=>navigate('/detail')}>Detail</Nav.Link>
            <Nav.Link onClick={()=>navigate('/about')}>About</Nav.Link>
            <Nav.Link onClick={()=>navigate('/event')}>Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Main shoes={shoes}></Main>}></Route>
        <Route path='/detail/:id' element={<Detail shoes={shoes}></Detail>}></Route>
        <Route path='/about' element={<About></About>}>
          <Route path='member' element={<div>1</div>}></Route>
          <Route path='location' element={<div>2</div>}></Route>
        </Route>
        <Route path='/event' element={<Event></Event>}>
          <Route path='apple' element={<div>사과 할인</div>}></Route>
          <Route path='banana' element={<div>바나나 할인</div>}></Route>
        </Route>


      </Routes>

    </div>
  );
}

export default App;
