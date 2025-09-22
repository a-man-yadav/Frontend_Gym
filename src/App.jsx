import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Diet from "./components/programs/Diet";
import Exercise from "./components/programs/Exercise";
import Training from "./pages/Training";
import Blogs from "./pages/Blogs";
import CreateProgram from "./pages/CreateProgram";

const App = () => {
  const location = useLocation(); // 👈 track current route

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />}>
          <Route index element={<Exercise />} />
          <Route path="diets" element={<Diet />} />
        </Route>

        <Route path="/create" element={<CreateProgram />} />
        <Route path="/training" element={<Training />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
