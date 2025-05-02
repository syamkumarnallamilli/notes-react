import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App1 = () => {
  const [username, setUsername] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  // Simulate login + fetch user
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      const user = res.data.find(u => u.username.toLowerCase() === username.toLowerCase());

      if (!user) {
        setError('User not found');
        return;
      }

      setLoggedInUser(user);
    } catch (err) {
      setError('Something went wrong');
      console.error(err);
    }
  };

  // Fetch posts after login
  useEffect(() => {
    const fetchPosts = async () => {
      if (!loggedInUser) return;
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${loggedInUser.id}`
        );
        setPosts(res.data);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    };

    fetchPosts();
  }, [loggedInUser]);

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      {!loggedInUser ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Enter username (e.g. Bret)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '8px', marginRight: '10px' }}
          />
          <button type="submit" style={{ padding: '8px' }}>
            Login
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      ) : (
        <div>
          <h2>Welcome, {loggedInUser.name}!</h2>
          <p><strong>Email:</strong> {loggedInUser.email}</p>
          <p><strong>Company:</strong> {loggedInUser.company.name}</p>

          <h3>Your Posts</h3>
          {posts.length === 0 ? (
            <p>Loading posts...</p>
          ) : (
            <ul>
              {posts.map(post => (
                <li key={post.id}>
                  <strong>{post.title}</strong>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default App1;
