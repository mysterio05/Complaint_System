import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [form, setForm] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    axios.get('http://localhost:5000/api/auth/profile', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setForm({ name: res.data.user.name, email: res.data.user.email });
    }).catch(() => setError('Failed to load profile.'));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put('http://localhost:5000/api/auth/profile', form, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Update localStorage so Navbar reflects new name
      const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
      localStorage.setItem('user', JSON.stringify({ ...storedUser, name: res.data.user.name, email: res.data.user.email }));
      setMessage('Profile updated successfully!');
    } catch (err) {
      setError(err.response?.data?.message || 'Update failed.');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '450px' }}>
      <h2>Edit Profile</h2>
      <p className="text-muted">Update your name or email address.</p>

      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile;
