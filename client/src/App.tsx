// import React from 'react';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import GroupList from './components/group_list';
// import './App.css';

function App() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
      <GroupList />
    </div>
  
  
  );
}

export default App;
