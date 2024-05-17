import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import './App.css';
import Main from './frontend/main';
import Create from './Components/create';
import Expand from './Components/expand';
import View from './Components/view';

function App() {
  return (
    <div className="App">
      <Router>
      <header style={{  backgroundColor: 'black', padding:"10px", position: "sticky", top: "0", zIndex: "999" }}>
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
        <h1 style={{color: "#b8860b", margin:"0", }}>Canon</h1>
        <div className="navBar">
          <ul>
          <li>
            <Link to="/Create">Create</Link>
          </li>
          <li>
            <Link to="/Expand">Expand</Link>
          </li>
          <li>
            <Link to="/View">View</Link>
          </li>
          </ul>
        </div>
        </header>
        <Routes>
           {/* Routing for Main component */}
           <Route exact path="/" element={<Main />} />
           </Routes>
           </Router>
    

      <div className="App-header"/>
      </div>
  );
}


export default App;