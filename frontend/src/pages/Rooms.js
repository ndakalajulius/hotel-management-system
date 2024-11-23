import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RoomCard from '../components/RoomCard';
import styles from '../styles/Rooms.module.css';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data } = await axios.get('http://localhost:5000/api/rooms');
      setRooms(data);
    };

    fetchRooms();
  }, []);

  return (
    <div className={styles.roomsPage}>
      <h1>Available Rooms</h1>
      <div className={styles.roomGrid}>
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
