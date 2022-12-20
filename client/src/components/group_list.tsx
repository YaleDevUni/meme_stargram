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
    <div className="container mx-auto bg-green-200 rounded-xl shadow border p-12 m-10">
      <p className="text-blue-600 text-lg">
        {groups&&groups.map(group=>{
            return <div>
                <p>user: {group.name}</p>
                <img src={group.img_url} alt="test" width="100" height="100"></img>
                <p>{group.description}</p>
                <p className='text-red-600'>{group.datetime}</p>
            </div>
        })}
      </p>
    </div>
  
  
  );
}

export default GroupList;
