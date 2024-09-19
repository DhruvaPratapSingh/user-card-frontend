import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form';
import CardList from './components/CardList';
import "./App.css";
const BASE_URL = import.meta.env.VITE_BASE_URL;
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/users`)
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  const addUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 opacity-60"></div>
      
      <div className="relative z-10 w-full max-w-4xl p-6 backdrop-blur-md bg-white/30 rounded-lg shadow-2xl shadow-blue-900">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-purple-400 via-pink-200 to-red-200 p-6 rounded-lg shadow-lg max-w-md mx-auto ">User Information</h1>
        <Form addUser={addUser} />
        <CardList users={users} />
      </div>
    </div>
  );
}

export default App;
