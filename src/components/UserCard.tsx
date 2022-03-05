import React from 'react';
import { User } from '../Redux/types';
import { Link } from 'react-router-dom';
import '../index.css';
import styles from './UserCard.module.css';

const UserCard = ({ firstName, lastName, image, id }: User) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={image} />
      </div>
      <div className={styles.name}>
        <Link to={`/user/${id}`} className={styles.link}>
          <div>{firstName}</div>
          <div>{lastName}</div>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
