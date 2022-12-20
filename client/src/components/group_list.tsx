// import React from 'react';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
// import './App.css';

function GroupList() {
  const [groups,setGroups]=useState<any[]>([]);
  const [loading,setLoading]=useState<boolean>(false);
  const [error,setError]=useState<boolean>(false);
// fetch data from the local server to run the server pls check backend/readme.md
  useEffect(() => {
    setLoading(true)
    const getData = async () => {
      await fetch('http://127.0.0.1:8000/api/groups/')
      .then(resp => resp.json())
      .then(data => {
        setGroups(data);
        setLoading(false);
        console.log("From api: ",data);
      }).catch(e => {
        setError(true);
        setLoading(false);
        console.log("Error... : ",e);
      })
    }
    getData();
  }, [])
  if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading</h1>
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Welcome!
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
      <p className="text-blue-600 text-lg">
        {groups&&groups.map(group=>{
          return <p>{group.name}</p>
        })}
      </p>
    </div>
  
  
  );
}

export default GroupList;
