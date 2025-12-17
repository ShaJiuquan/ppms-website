import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Download from './pages/Download';
import './App.css';

function App() {
  return (
    <Router basename="/ppms-website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/ws-demo" element={<Navigate to="/ppms_ws_demo/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
