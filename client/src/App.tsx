import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import PostList from './components/group_list';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
