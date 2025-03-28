import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users');
      const data = await response.json();
      setUsers(data.data); // Set the users data
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleUserClick = (userId) => {
    navigate(`/users/${userId}`); // Navigate to user details page
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center text-purple-700 mb-8">Users List</h1>
      <div className="bg-red-500 text-white p-4">
        Tailwind CSS Test
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => handleUserClick(user.id)}
          >
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-lg font-semibold text-center text-gray-800">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-center text-gray-600">{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
