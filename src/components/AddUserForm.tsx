import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './AddUser.module.css';
import { addUserActionCreator } from '../Redux/actions';

interface AddUserFormProps {
  onClose: () => void;
}

const AddUserForm = ({ onClose }: AddUserFormProps) => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [state, setState] = useState('');
  const [age, setAge] = useState('');

  const dispatch = useDispatch();

  const onAdd = () => {
    const user = {
      firstName,
      lastName,
      image,
      age: parseInt(age),
      company: {
        address: {
          address,
          city,
          postalCode,
          state,
        },
      },
    };
    dispatch(addUserActionCreator(user));
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.deleteIcon} onClick={onClose}>
          X
        </div>
        <form>
          <div>
            <label htmlFor="">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="image">Image url</label>
            <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
          </div>
          <div>
            <label htmlFor="age">Image url</label>
            <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label htmlFor="address">Company Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="city">Company City</label>
            <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
          </div>
          <div>
            <label htmlFor="state">Company State</label>
            <input type="text" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} />
          </div>
          <div>
            <label htmlFor="postalCode">Company Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
        </form>
        <button onClick={onAdd}>add</button>
      </div>
    </div>
  );
};

export default AddUserForm;
