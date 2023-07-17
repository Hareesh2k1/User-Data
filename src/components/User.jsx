import React, { useState } from 'react';
import axios from 'axios';
import '../css/styles.css';

function User() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="Container">
        <div className="Navbar mb-5">
          <h1 className="data" style={{ marginLeft: '50px', color: 'yellow' }}>Data Works</h1>
          <button className="Button" onClick={getUsers} style={{ marginRight: '50px' }}>
            Get Users
          </button>
        </div>
        {loading ? (
          <div className="Loader">Loading...</div>
        ) : (
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {users.map((user) => (
              <div className="col" key={user.id}>
                <div className="card mb-4">
                  <img src={user.avatar} className="card-img-top rounded-start" alt="User Avatar" />
                  <div className="card-body">
                    <h4 className="UserName">{`${user.first_name} ${user.last_name}`}</h4>
                    <p className="UserEmail">{user.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default User;

