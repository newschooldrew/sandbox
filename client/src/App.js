import logo from './logo.svg';
import './App.css';
import React from 'react'
import TopNavbar from './TopNavbar.js'
import Headers from './Headers.js'
import Tenets from './Tenets.js'
import MyCards from './MyCards.js'
import Sections from './Sections.js'
import Contact from './Contact.js'

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Headers />
      <Sections />
      <Tenets />
      <MyCards />
      <Contact />
    </div>
  );
}

export default App;
