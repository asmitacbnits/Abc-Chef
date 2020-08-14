import React from 'react';
import './assets/css/style.css';
//import Header from './components/common/Header';
//import Footer from './components/common/Footer';
import Router from './Router';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer } from 'react-toastify';

function App() {
  return (
    <React.Fragment>
      {/* <Header /> */}
      <ToastContainer autoClose={2000} />
      <Router />
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
