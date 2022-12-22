import React, { useState, useEffect } from 'react';
// import { IconButton } from 'react';
import logo from './logo.svg';
// import GroupList from './components/group_list';

function App() {
  return (
    <div className="container m-10 mx-auto rounded-xl border bg-gray-200 p-8 shadow">
      <div className="grid grid-cols-12">
        <div className="border2 col-span-3">
          <p className="...mb-5 isolate border-2 border-sky-500 text-3xl font-bold text-gray-700">
            Modal Zone
          </p>
        </div>
        <div className="col-span-6">
          <p className="border-2 border-sky-500 text-lg text-gray-500">
            Main Section Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="col-span-3">
          <p className="border-2 border-sky-500 text-lg text-gray-500">
            Likes, Comment //Testing button
            <button
              className="active:bg-black-600 text-green bg-yellow-500 px-6 py-3 shadow outline-none duration-150 ease-linear"
              type="button"
            >
              BUTTON TEST
              <i className="fas fa-heart"></i>
            </button>
          </p>
        </div>
      </div>
      {/* <GroupList /> */}
    </div>
    // <div>
    //   testestsdfsdfsdfsdfsdfsdf
    // </div>
  );
}

export default App;
