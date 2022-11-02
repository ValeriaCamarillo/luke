import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import People from './Views/People';
import Auth from './Views/Auth';
import Planets from './Views/Planets';
import SearchBar from './Components/SearchBar';

const Home = (props) => { 
  return (
    <div>
    <h1 style={{color: "red"}}>Home Component</h1>
    <a href="/about">Go to About </a>
    </div>
  );
}
    
const About = (props) => {
  return (
    <h1 style={{color: "blue"}}>About Component</h1>
  );
}

function App() {
  return (
   <fieldset>
    <legend>App.jsx</legend>
    <div>
      <SearchBar/>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/people/:people_id" element={<People />} />
        <Route path="/planets/:planets_id" element={<Planets />} />
      </Routes>
    </div>
   </fieldset>
  );
}

export default App;
