import React from 'react';
import { User } from '../Redux/types';
import '../index.css';

const UserCard = ({ firstName, lastName, image }: User) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        marginBottom: '1rem',
        padding: '1rem',
        borderRadius: '4px',
        backgroundRepeat: 'no-repeat',
      }}>
      <div>{firstName}</div>
      <div>{lastName}</div>
    </div>
  );
};

export default UserCard;
