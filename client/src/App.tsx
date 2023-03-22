import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import PostList from './components/group_list';
// import Navbar from './components/navbar';
function App() {
  return (
    <div>
      <Navbar />
      <PostList />
    </div>
  );
}

export default App;
