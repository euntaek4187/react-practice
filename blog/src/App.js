/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "BLOG";
  let [title, setTitle] = useState(['여자 코트 추천', '바나나 추천', '사과 추천']);
  let [titleStatus, setTitleStatue] = useState(0);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [input, setInput] = useState('');

  return (
    <div className="App">
      <div className='nav'>
        <h3>{post}</h3>
      </div>

      <input onChange={(e)=>{setInput(e.target.value)}} type='text'></input>
      <button onClick={()=>{setTitle([...title, input]); setGood([...good, 0])}}>작성</button>

      {
        title.map((a, i)=>{
          return (
            <div className='list' key={i}>
            <h4 onClick={()=>{setModal(!modal); setTitleStatue(i)}}>{title[i]}
              <span onClick={(e)=>{
                e.stopPropagation();
                let copy = [...good];
                copy[i] = copy[i] + 1;
                setGood(copy)
                }}> 따봉: {good[i]}</span>
            </h4>
            <p>2/25 published</p>
            <button onClick={()=>{
              let copy = [...title];
              copy.splice(i, 1);
              setTitle(copy);
            }}>글 삭제</button>
          </div>
          )
        })
      }

      {
          modal==true ? <Modal titleStatus={titleStatus} color={'skyblue'} title={title}></Modal> : null
      }
    </div>
  );
}

function Modal(props){
  return(
    <div className='modal' style={{background:props.color}}>
        <h4>{props.title[props.titleStatus]}</h4>
        <p>date</p>
    </div>
  )
}

export default App;
