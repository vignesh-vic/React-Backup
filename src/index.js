import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Newcrud from './Newcrud';
// import MyuseEff from './MyuseEff';
// import Map from './Map';
// import Usestate from './usestate'
// import Mytask from './Mytask'
// import App from './App';
// import Sample from './sample';
// import Import from './Giri';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Newcrud/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
