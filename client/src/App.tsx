import React, { useState, useEffect } from 'react';

import PostList from './components/posts_list';
import Navbar from './components/navbar';
function App() {
  return (
    <div>
      <Navbar />
      <PostList />
    </div>
  );
}

export default App;
