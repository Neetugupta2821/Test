import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './component/Login';
import ForgetPass from './component/ForgetPass';
import Register from './component/Register';
import Dashboard from './component/Dashboard';
import Heade from './component/Heade';
import Visiter from './component/Visiter';
import Addmin from './component/Addmin';
import RightBar from './component/RightBar'; // Import RightBar

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Use Routes to handle routing */}
        <Route path="/" element={<Login />} />
        <Route path="/Addmin" element={<Visiter />} />
        <Route path="/Dashboard" element={<Dashboard />}>

        </Route>

        <Route path="/Register" element={<Register />} />
        <Route path="/ForgetPass" element={<ForgetPass />} />

        <Route path="/Addmin" element={<Addmin />}>
          <Route path="Visiter" element={<Visiter />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
