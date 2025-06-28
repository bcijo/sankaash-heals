import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Corporate from './Corporate';
import Edu from './edu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/edu" element={<Edu />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
