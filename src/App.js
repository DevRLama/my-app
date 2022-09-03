import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Login from './component/Login'
import Home from './component/Home'
import SignUp from './component/SignUp'

import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";



function App() {
  return (
<>
<div className="container"><img src="logo12.png" alt="" srcset="" /></div>
    <div className="container my-10">
    <Router>
      
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/signUp" element={<SignUp />} />
       

      </Routes>
    </Router>
    </div>
    </>

  );
}

export default App;
