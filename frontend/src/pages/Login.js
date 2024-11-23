import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulating login process. Replace with actual API call.
    const isLoginSuccessful = email === 'user@example.com' && password === 'password123';

    if (isLoginSuccessful) {
      // Redirect to homepage or dashboard
      navigate('/rooms');
    } else {
      // Display error and suggest signup
      setErrorMessage('Invalid email or password. Don’t have an account?');
    }
  };

  const handleSignupRedirect = () => {
    navigate('/register');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      <form style={styles.form} onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      {errorMessage && (
        <div style={styles.errorContainer}>
          <p style={styles.errorMessage}>{errorMessage}</p>
          <button style={styles.signupButton} onClick={handleSignupRedirect}>
            Register
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#ff9800',
    color: 'white',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#e68900',
  },
  errorContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  errorMessage: {
    color: '#d32f2f',
    fontSize: '1rem',
    marginBottom: '10px',
  },
  signupButton: {
    padding: '10px 20px',
    backgroundColor: '#fff',
    color: '#ff9800',
    border: '2px solid #ff9800',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  },
};

export default Login;
