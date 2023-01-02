import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import PostList from './components/posts_list';
import { Navbar } from './components/nav_bar';
import { Router } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <Navbar is_signed_in={true} name={'Anon'} new_alarm={3} />
      </header>
      <div className="container m-10 mx-auto rounded-xl border bg-gray-200 p-8 shadow">
        <p className="mb-5 text-3xl font-bold text-gray-700">Welcome!</p>
        <p className="text-lg text-gray-500">
          React and Tailwind CSS in action
        </p>
        <PostList />
      </div>
    </>
  );
}

export default App;
