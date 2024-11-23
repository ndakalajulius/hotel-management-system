import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/images/hotel-hero.jpg';

const Home = () => {
  const heroStyle = {
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '800px',
    padding: '20px',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginBottom: '30px',
    fontWeight: '300',
    textShadow: '1px 1px 5px rgba(0, 0, 0, 0.6)',
  };

  const buttonStyle = {
    padding: '14px 28px',
    margin: '10px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  };

  const primaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ff9800',
    color: '#fff',
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#fff',
    color: '#ff9800',
    border: '2px solid #ff9800',
  };

  return (
    <div style={heroStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1>Discover Your Perfect Stay</h1>
        <p style={paragraphStyle}>
          Welcome to our luxury hotel, where every detail is crafted to provide you with
          an unforgettable experience. Relax in our spacious, elegantly designed rooms
          equipped with all modern amenities. Indulge in gourmet dining at our
          award-winning restaurants and rejuvenate at our world-class spa. Whether you're
          here for business or leisure, we promise to make your stay extraordinary.
        </p>
        <div>
          <Link
            to="/rooms"
            style={{
              ...primaryButtonStyle,
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={(e) =>
              (e.target.style.boxShadow = '0px 6px 15px rgba(0, 0, 0, 0.4)')
            }
            onMouseLeave={(e) =>
              (e.target.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)')
            }
          >
            Explore Rooms
          </Link>
          <Link
            to="/login"
            style={{
              ...secondaryButtonStyle,
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={(e) =>
              (e.target.style.boxShadow = '0px 6px 15px rgba(0, 0, 0, 0.4)')
            }
            onMouseLeave={(e) =>
              (e.target.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)')
            }
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
