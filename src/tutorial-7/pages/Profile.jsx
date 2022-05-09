import React from 'react';

import { Navigate } from 'react-router-dom';

function Profile() {
  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" />;
  }

  return <h1>Это закрытый профиль пользователя</h1>;
}

export default Profile;
