import React from 'react';
import { Switch, Route, } from "react-router-dom";
import './assets/css/style.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Router from './Router'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router />
      <Footer />
    </React.Fragment>
  );
}

export default App;
