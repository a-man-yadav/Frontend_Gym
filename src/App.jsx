import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Diet from "./components/Diet"
import Exercise from "./components/Exercise"
import Training from "./pages/Training";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />}>
        <Route index element={<Exercise />} />   
        <Route path="diets" element={<Diet />} /> 
      </Route>
      <Route path="/training" element={<Training/>} />
      <Route path="/blogs" element={<Blogs/>}/>

    </Routes>
  );
};

export default App;
