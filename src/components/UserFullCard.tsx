import React from 'react';
import { UserFull } from '../Redux/types';
import styles from './UserFullCard.module.css';

const UserFullCard = ({
  firstName,
  lastName,
  image,
  company: {
    address: { address, city, state, postalCode },
  },
}: UserFull) => {
  return (
    <div className={styles.container}>
      <h1>
        {firstName} {lastName}
      </h1>
      <img src={image} alt={firstName} />
      <div>
        <p>Company details: </p>
        <p>address: {address}</p>
        <p>city: {city}</p>
        <p>state: {state}</p>
        <p>postalCode: {postalCode}</p>
      </div>
    </div>
  );
};

export default UserFullCard;
