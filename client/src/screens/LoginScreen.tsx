import React, { useState, useEffect, Component } from 'react';
import { RouterProviderProps } from 'react-router-dom';
type Props ={}
function LoginScreen =({ history }) {
  return (
    <div className="container m-10 mx-auto rounded-xl border bg-gray-200 p-8 shadow">
      <p className="mb-5 text-3xl font-bold text-gray-700">Welcome!</p>
      <p className="text-lg text-gray-500">React and Tailwind CSS in action</p>
    </div>
  );
}

export default LoginScreen;
