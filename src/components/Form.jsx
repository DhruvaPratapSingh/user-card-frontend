import React, { useState } from 'react';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
function Form({ addUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BASE_URL}/api/users`, formData);
      addUser(res.data);
      setFormData({ name: '', email: '', age: '', address: '' }); // Reset form
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  return (
    <form 
  onSubmit={handleSubmit} 
  className="bg-white/20 backdrop-blur-lg p-6 rounded-md shadow-2xl mb-6 container mx-auto max-w-lg"
>
  <div className="mb-4">
    <input
      type="text"
      name="name"
      placeholder="Name"
      value={formData.name}
      onChange={handleChange}
      required
      className="w-full p-2 border rounded-md bg-transparent backdrop-blur-sm text-blue-900 text-lg font-medium"
    />
  </div>
  <div className="mb-4">
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
      className="w-full p-2 border rounded-md bg-transparent backdrop-blur-sm text-blue-900 text-lg font-medium"
    />
  </div>
  <div className="mb-4">
    <input
      type="number"
      name="age"
      placeholder="Age"
      value={formData.age}
      onChange={handleChange}
      required
      className="w-full p-2 border rounded-md bg-transparent backdrop-blur-sm text-blue-900 text-lg font-medium"
    />
  </div>
  <div className="mb-4">
    <input
      type="text"
      name="address"
      placeholder="Address"
      value={formData.address}
      onChange={handleChange}
      required
      className="w-full p-2 border rounded-md bg-transparent backdrop-blur-sm text-blue-900 text-lg font-medium"
    />
  </div>
  <button
    type="submit" 
    className="bg-blue-500 text-white p-2 rounded-md w-full "
  >
    Submit
  </button>
</form>

  );
}

export default Form;
