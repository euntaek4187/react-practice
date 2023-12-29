/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "BLOG";
  let [title, change] = useState(['남자 코트 추천', '바나나 추천', '사과 추천']);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className='nav'>
        <h3>{post}</h3>
      </div>

      <button onClick={()=>{
        let copy = [...title];
        copy[0]="여자 코트 추천"
        change(copy);
      }}>변경</button>

      {
        title.map((a, i)=>{
          return (
            <div className='list' key={i}>
            <h4 onClick={()=>{setModal(!modal)}}>{title[i]}
              <span onClick={()=>{
                let copy = [...good];
                copy[i] = copy[i] + 1;
                setGood(copy)
                }}> 따봉: {good[i]}</span>
            </h4>
            <p>2/25 published</p>
          </div>
          )
        })
      }

      {
          modal==true ? <Modal></Modal> : null
      }
      

    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
        <h4>title</h4>
        <p>date</p>
        <p>detail content</p>
    </div>
  )
}

export default App;
