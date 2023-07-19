import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./containers/auth/Login";
import SignUp from "./containers/auth/SignUp";
import Home from "./containers/home/Home";

export default function NavigationRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
