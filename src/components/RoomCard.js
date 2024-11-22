import React from 'react';
import styles from '../styles/RoomCard.module.css';

const RoomCard = ({ room }) => {
  return (
    <div className={styles.card}>
      <h3>{room.name}</h3>
      <p>Type: {room.type}</p>
      <p>Price: ${room.price}</p>
      <p>Status: {room.status}</p>
    </div>
  );
};

export default RoomCard;
