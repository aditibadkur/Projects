import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Timer from './Timer';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import ShortBreak from './ShortBreak';
import LongBreak from './LongBreak';
import React, { useState } from 'react';



function App() {

  const [current,setCurrent] = useState('null');
  
  return (
    <Router>
     
      <div className="App">
        <Navbar />
        <Home  />
        <div className='content'>
          <Switch>

            <Route exact path="/">
              <Timer />
            </Route>

            <Route path="/shortbreak">
              <ShortBreak />
            </Route>

            <Route path="/longbreak">
              <LongBreak />
            </Route>

          </Switch>
        </div>

      </div>
      
    </Router>
    
  );
}

export default App;
