// MainLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
// import Nav from '../Components/Nav/Nav';
function MainLayout() {
  return (
    <div>
    <Header/>
      {/* <Nav/> */}
      {/* Content before the navigation */}

      {/* Navigation menu */}
      <nav>
        {/* Place your navigation links here */}
      </nav>
      <Outlet /> {/* Nested routes will be rendered here */}
      <Footer />
    </div>
  );
}

export default MainLayout;
