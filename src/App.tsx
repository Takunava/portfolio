import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Fonts/fonts.css';
import {Box} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div style={{ width: '100%' }}>
              <Box display="flex" p={4}>
                  <div className="Container-Red"/>
                  <Box p={1} flexGrow={1}>
                      <div className="Title-name">ANASTASIA<div className="Title-surname">RABOTKO</div></div>
                  </Box>

                  <div className="Menu-item">
                      <Box p={1} className="Item">
                          <a className="Home-link">HOME</a>
                      </Box>
                      <Box p={1} className="Item">
                          <a className="About-link">ABOUT</a>
                      </Box>
                      <Box p={1} className="Item">
                          <a className="Contact-link">CONTACT</a>
                      </Box>
                  </div>
              </Box>
          </div>

      </header>
    </div>
  );
}

export default App;
