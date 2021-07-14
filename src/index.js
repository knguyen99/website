import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './content/fonts/Cako-Regular.ttf';
import './content/fonts/Cako-Black.ttf';
import './content/fonts/Cako-Thin.ttf';
import './content/fonts/Cako-RegularItalic.ttf';
import './content/fonts/Cako-BlackItalic.ttf';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
