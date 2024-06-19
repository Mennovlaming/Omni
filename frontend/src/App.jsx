// src/App.js
import './App.css'
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Customer from './components/Customer/Customer';

function App() {
    

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/customer/:id" element={<Customer />} />
            </Routes>
        </Router>
    );
}

export default App;
