import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import Card from './Card';
import { robots } from './profiles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='flex flexwrap'>
      <Card name={robots[0].name} email={robots[0].email} username={robots[0].username}/>
      <Card name={robots[1].name} email={robots[1].email} username={robots[1].username}/>
      <Card name={robots[2].name} email={robots[2].email} username={robots[2].username}/>
      <Card name={robots[3].name} email={robots[3].email} username={robots[3].username}/>
      <Card name={robots[4].name} email={robots[4].email} username={robots[3].username}/>
      <Card name={robots[5].name} email={robots[5].email} username={robots[3].username}/>
      <Card name={robots[6].name} email={robots[6].email} username={robots[3].username}/>
      <Card name={robots[7].name} email={robots[7].email} username={robots[3].username}/>
    </div>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
