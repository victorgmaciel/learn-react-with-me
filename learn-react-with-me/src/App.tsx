import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import State from "./components/State";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learnState" element={<State />} />
    </Routes>
  );
}

export default App;