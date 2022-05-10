import React from 'react';

import { Paper } from '@mui/material';

function Result({ formValues }) {
  const { name, surname, email, password, city, street, apartment } = formValues;

  return (
    <Paper style={{ padding: '30px' }}>
      <h2>Персональная информация:</h2>
      <ul>
        <li>
          <b>Имя: </b>
          {name}
        </li>
        <li>
          <b>Фамилия: </b>
          {surname}
        </li>
        <li>
          <b>Почта: </b>
          {email}
        </li>
        <li>
          <b>Пароль: </b>
          {password}
        </li>
      </ul>
      <br />
      <hr />
      <br />
      <h2>Адрес:</h2>
      <ul>
        <li>
          <b>Город: </b>
          {city}
        </li>
        <li>
          <b>Улица: </b>
          {street}
        </li>
        <li>
          <b>Номер квартиры: </b>
          {apartment}
        </li>
      </ul>
    </Paper>
  );
}

export default Result;
