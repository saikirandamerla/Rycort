import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // For the eye icon

const Login = () => {
  const styles = {
    wrapper: {
      backgroundColor: '#f8f9fa',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      backgroundColor: '#ffffff',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px',
    },
    logo: {
      backgroundColor: '#00bfff',
      color: '#fff',
      fontWeight: 'bold',
      padding: '8px 16px',
      borderRadius: '5px',
      display: 'inline-block',
      marginBottom: '1rem',
    },
    forgotPassword: {
      fontSize: '0.9rem',
      color: '#00bfff',
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.box}>
        <div className="text-center">
          <div style={styles.logo}>SCHOOL LOGO</div>
        </div>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Enter your username" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
              <span className="input-group-text">
                <i className="bi bi-eye"></i>
              </span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-2">
            <i className="bi bi-box-arrow-in-right me-1"></i> Login
          </button>
          <div className="text-center">
            <a href="#" style={styles.forgotPassword}>Forgot password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;