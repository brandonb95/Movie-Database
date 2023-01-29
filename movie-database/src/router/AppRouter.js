import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import Home from "../components/Home";
import Favourites from "../components/Favourites";

function AppRouter() {
  
  return(
<BrowserRouter>
<div className='wrapper'>
  
<title>Sunset Movies</title>
<Header title="SUNSET"/>
<main>
  <Routes>
    <Route path='/' exact element={<Home />}/>
    <Route path='/' exact element={<Favourites />}/>
  </Routes>
</main>



</div>
</BrowserRouter>
  );
}

export default AppRouter;