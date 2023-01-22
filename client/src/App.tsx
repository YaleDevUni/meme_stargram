import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
// import { Navbar } from './components/nav_bar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PostsList } from './features/posts/PostsList';

function App() {
  return (
    <>
      <header></header>
      <div className="container m-10 mx-auto rounded-xl border bg-gray-200 p-8 shadow">
        <p className="mb-5 text-3xl font-bold text-gray-700">Welcome!</p>
        <p className="text-lg text-gray-500">
          React and Tailwind CSS in action
        </p>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <PostsList />
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}

export default App;
