import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './Page/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Component/Navbar' 
import NotePage from './Page/Note'
import './App.css';

function App() {
  return <>
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />}/>
        <Route path="/note/:utilisateur" element={<NotePage />} />
        <Route path="/note/:utilisateur/:categorie" element={<NotePage />} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;