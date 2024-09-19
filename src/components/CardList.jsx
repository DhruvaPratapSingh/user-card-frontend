import React from 'react';

function CardList({ users }) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {users.map((user, index) => (
          <div
            key={index}
            className="border border-gray-200 bg-white/60 backdrop-blur-md shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 hover:bg-green-100"
          >
            <h2 className="text-2xl font-semibold mb-4 text-teal-600">{user.name}</h2>
            <p className="text-gray-800 mb-2">Email: <span className="text-gray-600">{user.email}</span></p>
            <p className="text-gray-800 mb-2">Age: <span className="text-gray-600">{user.age}</span></p>
            <p className="text-gray-800">Address: <span className="text-gray-600">{user.address}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
