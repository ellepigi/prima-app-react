import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Header from './Header/Header';
import Main from './Main/Main';
import logo from './logo.svg';
import Footer from './Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer> ciao sono il footer </Footer>
    <img src= {logo} />
  </React.StrictMode>
);


function stampaCiao (){
console.log ("ciao")
}