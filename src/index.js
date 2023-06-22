import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './login';
import Products from './products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	  <BrowserRouter>
	      <Routes>
	        <Route path="login" element={<Login />} />
	        <Route path="products" element={<Products />} />
	      </Routes>
	   </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
