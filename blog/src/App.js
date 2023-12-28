import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = "BLOG";
  let [title1,b1] = useState('남자 코트 추천');
  let [title2,b2] = useState('남자 코트 추천');
  let [title3,b3] = useState('남자 코트 추천');
  let [c,d] = useState('BLOG');

  return (
    <div className="App">
      <div className='nav'>
        <h3>{post}</h3>
      </div>
      <div className='list'>
        <h4>{title1}</h4>
        <p>2/25 published</p>
      </div>
      <div className='list'>
        <h4>{title2}</h4>
        <p>2/25 published</p>
      </div>
      <div className='list'>
        <h4>{title3}</h4>
        <p>2/25 published</p>
      </div>
    </div>
  );
}

export default App;
