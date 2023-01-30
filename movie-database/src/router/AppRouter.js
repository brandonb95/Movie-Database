import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Home from "../components/Home";
import TestSingle from "../components/Movies/TestSingle";

function AppRouter() {
  
  return(
<BrowserRouter>
<div className='wrapper'>
  
<title>Sunset Movies</title>
<Header title="SUNSET"/>
<main>
  <Routes>
    <Route path='/' exact element={<Home />}/>
  </Routes>
  <Routes>
    <Route path='/single-movie/:id' exact element={<TestSingle />}/>
  </Routes>
</main>



</div>
</BrowserRouter>
  );
}

export default AppRouter;