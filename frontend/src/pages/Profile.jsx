import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [message, setMessage] = useState({ type: '', text: '' });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('https://ccmsbackend.vercel.app/api/auth/profile', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                if (res.data && res.data.user) {
                    setFormData(prev => ({
                        ...prev,
                        name: res.data.user.name || '',
                        email: res.data.user.email || ''
                    }));
                }
            } catch (err) {
                showFeedback('error', 'Failed to load profile data.');
            }
        };
        fetchProfile();
    }, []);

    const showFeedback = (type, text) => {
        setMessage({ type, text });
        setTimeout(() => setMessage({ type: '', text: '' }), 4000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.newPassword || formData.confirmPassword) {
            if (formData.newPassword !== formData.confirmPassword) {
                return showFeedback('error', 'New passwords do not match.');
            }
            if (!formData.currentPassword) {
                return showFeedback('error', 'Please provide your current password to save updates.');
            }
        }

        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const res = await axios.put('https://ccmsbackend.vercel.app/api/auth/profile', {
                name: formData.name,
                email: formData.email,
                currentPassword: formData.currentPassword,
                newPassword: formData.newPassword
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            showFeedback('success', res.data.message || 'Profile updated successfully!');
            setFormData(prev => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }));
        } catch (err) {
            const rawError = err.response?.data?.message || '';
            
            // Intercepting MongoDB duplicate key index restrictions
            if (rawError.includes('E11000') || rawError.toLowerCase().includes('duplicate key')) {
                showFeedback('error', 'This email address is already taken or unavailable.');
            } else {
                showFeedback('error', rawError || 'An error occurred during update.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="profile-container">
            
            {message.text && (
                <div className={`feedback-banner ${message.type === 'success' ? 'feedback-success' : 'feedback-error'}`}>
                    {message.text}
                </div>
            )}

            <div className="profile-card">
                
                <div className="profile-header">
                    <div className="profile-avatar">
                        {formData.name ? formData.name.charAt(0) : 'U'}
                    </div>
                    <h2 className="profile-username">{formData.name || 'User Profile'}</h2>
                    <p className="profile-useremail">{formData.email || 'Manage account updates'}</p>
                </div>

                <form onSubmit={handleSubmit} className="profile-form">
                    
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="name@example.com"
                            required
                        />
                    </div>

                    <hr className="section-divider" />
                    <h4 className="section-title">Security Update</h4>

                    <div className="form-group">
                        <label>Current Password</label>
                        <input
                            type="password"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            placeholder="Type current password to confirm changes"
                        />
                    </div>

                    <div className="form-group">
                        <label>New Password</label>
                        <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            placeholder="Enter new password"
                        />
                    </div>

                    <div className="form-group">
                        <label>Confirm New Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm new password"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="profile-submit-btn"
                    >
                        {loading ? 'Saving Changes...' : 'Save Changes'}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Profile;