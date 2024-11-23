import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    } else {
      setEmailError('');
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    // Simulate registration logic
    alert('Registration successful!');
    navigate('/login'); // Redirect to login page after successful registration
  };

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Register</h1>
      <form style={styles.form} onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        {emailError && <p style={styles.errorText}>{emailError}</p>} {/* Display email error */}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={styles.input}
          required
        />
        {errorMessage && <p style={styles.errorText}>{errorMessage}</p>} {/* Display password error */}

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>

      <p style={styles.redirectText}>
        Already have an account?{' '}
        <span style={styles.link} onClick={handleLoginRedirect}>
          Login here
        </span>
      </p>
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
  errorText: {
    color: '#d32f2f',
    fontSize: '1rem',
    marginTop: '5px',
    textAlign: 'center',
  },
  redirectText: {
    marginTop: '20px',
    fontSize: '1rem',
    color: '#666',
    textAlign: 'center',
  },
  link: {
    color: '#ff9800',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default Register;
