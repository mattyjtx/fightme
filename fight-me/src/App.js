import React from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
 from "react-router-dom"
import FighterCards from './FighterCards';


function App() {
  return (
    <div className="App">
    <Header />
      <Router>
        <Routes>
          <Route path='/chat' element={ <h1>ima chat page</h1> }>

          </Route>
          <Route path='/' element={ <FighterCards /> }>

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
