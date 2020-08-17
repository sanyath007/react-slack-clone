import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
