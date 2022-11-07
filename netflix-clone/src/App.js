import React from "react"
import Navbar from "./Components/Navbar"
import Home from "./Page Components/Home";
import {Routes ,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
