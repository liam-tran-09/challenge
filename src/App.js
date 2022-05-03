import React from "react";
import "./App.css";
import BusinessList from "./components/BusinessList";
import Business from "./components/Business";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="grid place-items-center mt-10">
      <Router>
        <Routes>
          <Route path={"/"} exact element={<BusinessList />} />
          <Route path={"/business/:id"} element={<Business />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
