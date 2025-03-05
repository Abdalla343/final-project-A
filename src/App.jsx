import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Donation from "./Components/Donation";
import Profile from "./Components/Profile";
import Housing from "./Components/housing";
import Tour from "./Components/Tour";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" index element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Donation" element={<Donation />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/housing" element={<Housing />} />
        {/* <Route path="/Login" element={<Login />} /> AA */} 
      </Routes>
    </>
  );
}

export default App;
