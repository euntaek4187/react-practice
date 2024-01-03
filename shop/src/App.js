import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import {a, b, data} from './data';
import Cart from './routes/Cart';
import Main from './routes/main';
import Detail from './routes/detail';
import Event from './routes/event';
import About from './routes/about';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import axios from 'axios';

function App() {

  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify([]));
  }, [])

  let [shoes, setshoes] = useState(data);
  let [resCount, setResCount] = useState(2);
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
            <Nav.Link onClick={()=>navigate('/cart')}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <button onClick={()=>{
        if (resCount < 4) {
          axios.get(`https://codingapple1.github.io/shop/data${resCount}.json`)
          .then((res)=>{
            setshoes([...shoes, ...res.data]);
            setResCount(resCount + 1);
          })
          .catch((error)=>{
            // 오류 처리
          })
        }
      }}></button>

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
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>

    </div>
  );
}

export default App;
