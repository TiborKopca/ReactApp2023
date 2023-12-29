import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//ReactDOM.render() is deprecated
//Obtain the reference of the 'div' called 'root' to generate HTML elements
/* 
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Hello />); 
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
