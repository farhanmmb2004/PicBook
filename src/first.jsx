import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import App from "./App";

function First() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<App/>} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default First;
