import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navagation from "./Navigation";
import Profile from "../routes/Profile";

export default function AppRouter({ isLoggedIn, userObj }) {
  // 구조분해할당

  return (
    <Router>
      {isLoggedIn && <Navagation />}
      <Routes>
        {isLoggedIn ? (
          <Route exact path="/" element={<Home userObj={userObj} />} />
        ) : (
          <Route exact path="/" element={<Auth />} />
        )}
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
