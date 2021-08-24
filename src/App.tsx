import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div style={{ width: '100%', background: '#FFFAEC' }}>
              <Box display="flex" p={3}>
                  <Box p={1} flexGrow={1}>
                      <div className="Title">
                          <p>ANASTASIA  RABOTKO</p>
                      </div>
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

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
