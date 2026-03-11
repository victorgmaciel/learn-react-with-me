import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import State from "./pages/State";
import Props from "./pages/Props";
import WhatIsReact from "./pages/WhatIsReact";
import ReactForms from "./pages/ReactForms";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/learnState" element={<State />} />
      <Route path="/learnForms" element={<ReactForms />} />
      <Route path="/learnProps" element={<Props />} />
      <Route path="/whatIsReact" element={<WhatIsReact />} />
    </Routes>
  );
}

export default App;