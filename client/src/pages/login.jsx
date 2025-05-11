import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo.png';
import background from '../assets/background.jpg';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoginIcon from '@mui/icons-material/Login';
import HelpIcon from '@mui/icons-material/Help';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });

      if (response.data.success) {
        navigate('/homepage');
      } else {
        setError(response.data.message || 'Invalide username and password.');
      }
    } catch (err) {
      console.error(err);
      setError('Server error. Please try again later.');
    }
  };

  // --- STYLES ---

  const containerStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const logoStyle = {
    position: 'absolute',
    top: '20px',
    left: '30px',
    width: '120px',
  };

  const feedbackLinkStyle = {
    position: 'absolute',
    top: '20px',
    right: '30px',
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    fontWeight: '500',
    border: '1px solid #007bff',
    padding: '4px 8px',
    borderRadius: '6px',
  };

  const formStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    padding: '2rem',
    borderRadius: '20px',
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    color: '#000',
  };

  const subtitleStyle = {
    fontSize: '14px',
    color: '#ffffff',
    marginBottom: '20px',
  };

  const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    width: '100%',
    backgroundColor: '#fff',
    border: '1px solid #ced4da',
    borderRadius: '8px',
    padding: '0 8px',
  };

  const iconStyle = {
    padding: '8px',
    color: '#007bff',
    fontSize: '32px',
  };

  const inputStyle = {
    border: 'none',
    padding: '12px 10px',
    flex: 1,
    fontSize: '14px',
    outline: 'none',
    borderRadius: '0 8px 8px 0',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
  };

  const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginBottom: '10px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <a href="/feedback" style={feedbackLinkStyle}>
        <HelpIcon fontSize="medium" />
      </a>

      <img src={logo} alt="TANISH Logo" style={logoStyle} />

      <form style={formStyle} onSubmit={handleLogin}>
        <h2 style={{ fontWeight: 'bold', color: 'white' }}>Student Login</h2>
        <p style={subtitleStyle}>Hey, enter your details please!</p>

        {error && <p style={errorStyle}>{error}</p>}

        <style>
          {`
            input::placeholder {
              color: #007bff;
              opacity: 1;
            }
          `}
        </style>

        <div style={inputGroupStyle}>
          <PersonOutlineIcon style={iconStyle} />
          <input
            type="text"
            placeholder="Enter your Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <LockOutlinedIcon style={iconStyle} />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ width: '100%', textAlign: 'right', marginBottom: '10px' }}>
          <a
            href="/forgot-password"
            style={{ fontSize: '14px', color: '#007bff', textDecoration: 'none' }}
          >
            Forgot password?
          </a>
        </div>

        <button type="submit" style={buttonStyle}>
          <LoginIcon />
          Log in
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
