import React, { useState, useEffect } from 'react';
// import { IconButton } from 'react';
import logo from './logo.svg';
// import GroupList from './components/group_list';

function App() {
  return (
    <div className="container m-10 mx-auto rounded-xl border bg-gray-200 p-8 shadow">
      <div className="grid grid-cols-12">
        <div className="border2 col-span-3">
          //Testing Modal effect with Image
          <div className="flex flex-wrap">
            <img
              src="https://storage.googleapis.com/jjalbot/2018/12/H1478pEzeE/20180927_5bac4f495aa35.png"
              alt="..."
            />
            <p className="...mb-5 isolate border-2 border-sky-500 text-3xl font-bold text-gray-700 backdrop-opacity-10 transition-transform">
              Modal Zone
            </p>
          </div>
          {/* <p className="...mb-5 isolate border-2 border-sky-500 text-3xl font-bold text-gray-700 backdrop-opacity-10 transition-transform">
            Modal Zone */}
          {/* </p> */}
        </div>
        <div className="col-span-6">
          <p className="border-2 border-sky-500 text-lg text-gray-500">
            Main Section Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy t
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
