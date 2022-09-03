import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './component/Login'
import Navbar from './component/Navbar'
import Home from './component/Home'
import SignUp from './component/SignUp'

import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";



function App() {
  return (
<>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signUp" element={<SignUp />} />
       

      </Routes>
    </Router>
    </>

  );
}

export default App;
