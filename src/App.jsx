import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Diet from "./components/programs/Diet"
import Exercise from "./components/programs/Exercise"
import Training from "./pages/Training";
import Blogs from "./pages/Blogs";
import CreateProgram from "./pages/CreateProgram";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/programs" element={<Programs />}>
        <Route index element={<Exercise />} />   
        <Route path="diets" element={<Diet />} /> 
      </Route>
        <Route path="/create" element={<CreateProgram/>} />

      <Route path="/training" element={<Training/>} />
      <Route path="/blogs" element={<Blogs/>}/>

    </Routes>
  );
};

export default App;
