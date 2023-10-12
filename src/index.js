import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'; // Add this line
// import App from "./App";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Fontend/Home.js';
import About from './Components/Fontend/About.js';
import Contact from './Components/Fontend/Contact.js'

import MainLayout from './views/MainLayout.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
  <Routes>
    <Route
      path="/"
      element={<MainLayout />}>
      {/* Nested routes will be rendered inside MainLayout */}
      <Route index element={<Home></Home>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
    {/* Add more routes for other pages */}
  </Routes>
</BrowserRouter>

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

