import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Page Components/Home";
import {Routes ,Route } from "react-router-dom"
import { AuthContextProvider } from "./Context/AuthContext";
import { LogIn } from "./Page Components/LogIn";
import { SignUp } from "./Page Components/SignUp";
import Account from "./Page Components/Account";
import ProtectUser from "./Components/ProtectUser";
function App() {
  return (
    <>
      <AuthContextProvider>      
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/account" element={<ProtectUser> <Account/></ProtectUser>}/>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
