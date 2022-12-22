// import React from 'react';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
// import './App.css';
// test
function GroupList() {
  const [groups, setGroups] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  // fetch data from the local server to run the server pls check backend/readme.md
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await fetch('http://127.0.0.1:8000/api/groups/')
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
    <div className="container m-10 mx-auto rounded-xl border bg-green-200 p-12 shadow">
      <p className="text-lg text-blue-600">
        {groups &&
          groups.map((group) => {
            return (
              <div>
                <p>user: {group.name}</p>
                <img
                  src={group.img_url}
                  alt="test"
                  width="100"
                  height="100"
                ></img>
                <p>{group.description}</p>
                <p className="text-red-600">{group.datetime}</p>
                <p>this is my tag {group.tag}</p>
              </div>
            );
          })}
      </p>
    </div>
  );
}
// test
export default GroupList;
