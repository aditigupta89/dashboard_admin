import Home from "./Pages/home/Home";
import "./Style/dark.scss";

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import Single from "./Pages/single/Single";
import New from "./Pages/new/New";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
// import { useState } from "react";
function App() {
  const{darkMode}=useContext(DarkModeContext)
  return (
    <BrowserRouter>
     <div className={darkMode ?"app dark":"app"}>
      <Routes>
        <Route path="/">
        <Route index element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="users">
        <Route index element={<List/>}></Route>
        <Route path=":userId" element={<Single/>}></Route>
       <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}></Route>
       </Route>
       <Route path="products">
        <Route index  element={<List/>}></Route>
        <Route path=":productId" element={<Single/>}></Route>
       <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}></Route>
       </Route>
       </Route>
      </Routes>

    
</div>
    </BrowserRouter>
   
  );
}

export default App;
