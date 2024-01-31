import { useState } from 'react'
import Home  from './Pages/Home';
import { Route,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
function App() {
  return (<>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login type="login" />} />
      <Route path="/OtpLogin" element={<Login type="otp" />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </>);
}

export default App
