import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Home from "../components/Home";
import TestSingle from "../components/Movies/TestSingle";
import About from "../components/About";
import Footer from "../components/Footer";
import PageFaves from "../components/Favourites";

function AppRouter() {
  
  return(
<BrowserRouter>
<div className='wrapper'>
  
<title>Sunset Movies</title>
<Header title="SUNSET"/>
<main>
  <Routes>
    <Route path='/' exact element={<Home />}/>
    <Route path='/about' exact element={<About />}/>
  </Routes>
  <Routes>
    <Route path='/single-movie/:id' exact element={<TestSingle />}/>
    <Route path="/favourites" element={<PageFaves />} />
  </Routes>
</main>
<Footer title="SUNSET MOVIES"/>

</div>
</BrowserRouter>
  );
}

export default AppRouter;