import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../config';

const Login = () => {
    const navigate = useNavigate();
    const [openForgot, setOpenForgot] = useState(false);
    const [forgotEmail, setForgotEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
  
    const [form, setForm] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
  
    const valueUpdate = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
  
    const handleLogin = (e) => {
    if (e) e.preventDefault();
    setError('');

    axios.post(`${API_BASE_URL}/auth/login`, form)
      .then((res) => {

        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('userId', res.data.user.id);

        const userRole = res.data.user.role;
        if (userRole === 'Admin' ) {
            navigate('/AdminDashboard');
        }else if (userRole === 'Student') {
            navigate('/Dashboard');
        }
      })
      .catch((err) => {
        const serverMessage = err.response?.data?.message || 'Invalid login credentials';
        setError(serverMessage); 
      });
    };

    const handleForgotPasswordSubmit = () => {
        if (!forgotEmail) {
            alert("Please enter your email address.");
            return;
        }
        alert(`Password reset link successfully sent to: ${forgotEmail}`);
        setOpenForgot(false);
        setForgotEmail('');
    };

    const brandColor = '#2d3db4';
    const brandHoverColor = '#1f2b94';

    return (
        <div style={{ backgroundColor: '#f4f6f9', minHeight: '100vh', width: '100%' }} className="d-flex flex-column">
            
            <style>{`
                .unified-input-group {
                    border: 1px solid #ced4da;
                    border-radius: 6px;
                    background-color: #ffffff;
                    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
                }
                .unified-input-group:focus-within {
                    border-color: ${brandColor} !important;
                    box-shadow: 0 0 0 0.2rem rgba(45, 61, 180, 0.25) !important;
                }
                .unified-input-group .form-control,
                .unified-input-group .input-group-text,
                .unified-input-group .btn {
                    border: none !important;
                    background: transparent !important;
                    box-shadow: none !important;
                }
                .unified-input-group .form-control:-webkit-autofill {
                    -webkit-box-shadow: 0 0 0 100px #ffffff inset !important;
                    -webkit-text-fill-color: #111 !important;
                }
                .modal-input:focus {
                    border-color: ${brandColor} !important;
                    box-shadow: 0 0 0 0.2rem rgba(45, 61, 180, 0.25) !important;
                }
            `}</style>

            
            <div className="d-flex align-items-center gap-2 px-4 py-3 w-100" style={{ boxSizing: 'border-box' }}>
                <div className="text-white d-flex align-items-center justify-content-center" style={{ backgroundColor: brandColor, padding: '8px', borderRadius: '8px' }}>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                </div>
                <span className="fw-bold text-dark" style={{ fontSize: '0.95rem' }}>
                    Campus Complaint Management System (CCMS)
                </span>
            </div>

           
            <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center w-100 pb-5 px-2" style={{ boxSizing: 'border-box' }}>
                <div className="card border-0 shadow-sm w-100" style={{ maxWidth: '400px', borderRadius: '24px', overflow: 'hidden', backgroundColor: '#ffffff' }}>
                    
                    
                    <div className="text-white d-flex flex-column align-items-center text-center pt-4 pb-3 px-3" style={{ backgroundColor: brandColor }}>
                        <div className="d-flex align-items-center justify-content-center mb-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.18)', padding: '10px', borderRadius: '12px' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>
                        </div>
                        <h5 className="fw-bold m-0 mb-1" style={{ fontSize: '1.35rem', letterSpacing: '-0.02em' }}>Welcome back</h5>
                        <p className="m-0" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.82rem' }}>Sign in to your CCMS account</p>
                    </div>

                    
                    <div className="card-body p-4 d-flex flex-column gap-3">
                        
                       
                        <div className="input-group unified-input-group">
                            <span className="input-group-text px-2.5 text-muted">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </span>
                            <input 
                                type="email" 
                                className="form-control" 
                                style={{ fontSize: '0.85rem', padding: '7px 5px' }}
                                placeholder="Email Address" 
                                name="email" 
                                value={form.email} 
                                onChange={valueUpdate} 
                            />
                        </div>

                       
                        <div className="input-group unified-input-group">
                            <span className="input-group-text px-2.5 text-muted">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            </span>
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                className="form-control" 
                                style={{ fontSize: '0.85rem', padding: '7px 5px' }}
                                placeholder="Password" 
                                name="password" 
                                value={form.password} 
                                onChange={valueUpdate} 
                            />
                            <button 
                                className="btn px-2.5 text-muted" 
                                type="button"
                                onClick={handleClickShowPassword}
                            >
                                {showPassword ? (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6c757d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                )}
                            </button>
                        </div>

                        {error && (
                            <div className="alert alert-danger text-center py-2" role="alert" style={{ fontSize: '14px' }}>
                                {error}
                            </div>
                        )}
                        <button 
                            className="btn w-100 text-white fw-bold mt-2 py-2 border-0" 
                            style={{ backgroundColor: brandColor, borderRadius: '50px', fontSize: '0.9rem', transition: 'background-color 0.2s' }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = brandHoverColor}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = brandColor}
                            onClick={handleLogin}
                            type="button"
                        >
                            Login
                        </button>

                        <hr className="my-2" style={{ opacity: '0.08' }} />
                        
                        <div className="d-flex flex-column align-items-center gap-1">
                            <button 
                                type="button"
                                onClick={() => setOpenForgot(true)}
                                className="btn btn-link p-0 text-decoration-none"
                                style={{ color: '#666', fontSize: '0.75rem', fontWeight: 'normal' }}
                                onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                                onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
                            >
                                Forgot Password?
                            </button>
                            <span style={{ color: '#666', fontSize: '0.75rem' }}>
                                Don't have an account? <Link to="/register" className="fw-bold" style={{ color: brandColor, textDecoration: 'none' }}>Register here</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            
            {openForgot && (
                <div className="modal show d-block fade-in" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}>
                    <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '360px' }}>
                        <div className="modal-content border-0 p-2" style={{ borderRadius: '16px' }}>
                            <div className="modal-header border-0 pb-1">
                                <h5 className="modal-title fw-bold" style={{ fontSize: '1.15rem' }}>Reset Password</h5>
                                <button type="button" className="btn-close shadow-none" onClick={() => setOpenForgot(false)} aria-label="Close" style={{ fontSize: '0.75rem' }}></button>
                            </div>
                            <div className="modal-body py-2">
                                <p className="text-muted m-0 mb-3" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
                                    Enter your registered email address below. We will send you an authentication link to safely reset your password.
                                </p>
                                <input 
                                    type="email" 
                                    autoFocus
                                    className="form-control modal-input" 
                                    style={{ fontSize: '0.85rem', padding: '8px 12px' }}
                                    placeholder="Email Address"
                                    value={forgotEmail}
                                    onChange={(e) => setForgotEmail(e.target.value)}
                                />
                            </div>
                            <div className="modal-footer border-0 pt-1 px-3 d-flex justify-content-end gap-1">
                                <button 
                                    type="button" 
                                    className="btn btn-link text-decoration-none text-muted" 
                                    style={{ fontSize: '0.88rem', textTransform: 'none' }}
                                    onClick={() => setOpenForgot(false)}
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="button" 
                                    className="btn text-white fw-medium border-0 px-3.5 py-1.5" 
                                    style={{ backgroundColor: brandColor, borderRadius: '20px', fontSize: '0.88rem' }}
                                    onClick={handleForgotPasswordSubmit}
                                >
                                    Send Link
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;