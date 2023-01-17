import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import { posterPath } from '../components/movieVariables';
import Home from "../components/Home";

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
</main>



</div>
</BrowserRouter>
  );
}

export default AppRouter;