import React from "react";
import axios from 'axios';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hub from './pages/Hub';
import Itinerary from './pages/Itinerary'
import Creation from './pages/Creation'


//data will be the string we send from our server
const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Hub />}></Route>
        <Route path="/itinerary" element={<Itinerary />}></Route>
        <Route path="/creation" element={<Creation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);