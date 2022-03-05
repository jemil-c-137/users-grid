import React, { useState } from 'react';
import AddUserForm from '../components/AddUserForm';
import UserList from '../components/UsersList';

const MainPage = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <UserList />
      {visible && <AddUserForm onClose={onClose} />}
      <button onClick={handleClick}>Add user</button>
    </div>
  );
};

export default MainPage;
