// import React from 'react';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Modal_ImgPopUp from './modal';
// import './App.css';
// test
function GroupList() {
  const [groups, setGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  // fetch data from the local server to run the server pls check backend/readme.md !!
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await fetch('http://127.0.0.1:8000/posts/')
        .then((resp) => resp.json())
        .then((data) => {
          setGroups(data);
          setLoading(false);
          console.log('From api: ', data);
        })
        .catch((e) => {
          setError(true);
          setLoading(false);
          console.log('Error... : ', e);
        });
    };
    getData();
  }, []);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading</h1>;
  return (
    <div className="container m-10 mx-auto flex rounded-xl border bg-green-200 p-12 shadow">
      <div className="flex"></div>
      <p className="text-lg text-blue-600">
        <div className="flex flex-wrap">
          {groups &&
            groups.map((group) => {
              function setShowModal(arg0: boolean): void {
                throw new Error('Function not implemented.');
              }
              return (
                <img
                  className="... aspect-square w-1/3"
                  src={group.img_url}
                  alt="test"
                  width="100"
                  height="100"
                  onClick={(src) => Modal_ImgPopUp()}
                />
              );
            })}
        </div>
      </p>
    </div>
  );
}
// test
export default GroupList;
