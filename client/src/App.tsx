import React from 'react';
import { BrowserRouter as Router, Route, redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import PostsList from './components/post_lists';

function App() {
  return (
    <>
      <header></header>
      <div className="container m-10 mx-auto rounded-xl border bg-gray-200 p-8 shadow">
        <p className="mb-5 text-3xl font-bold text-gray-700">Welcome!</p>
        <p className="text-lg text-gray-500">
          React and Tailwind CSS in action
        </p>
        <PostsList />
      </div>
    </>
  );
}

export default App;
