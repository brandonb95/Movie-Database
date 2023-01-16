import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";

function AppRouter() {
  return(
<BrowserRouter>
<div className='wrapper'>
<Header/>
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