import React from 'react';

import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

import './App.css';

function App() {
  const { handleSubmit, register, formState: { errors }, reset } = useForm();

  function onSubmit(values) {
    console.log(values);
    handleClickClear();
  }

  function handleClickClear() {
    reset();
  }

  return (
    <div className="App">
      <div className="wrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fields">
            <TextField {...register('name', {
              required: 'Field is required'
            })}
              helperText={errors.name?.message}
              error={!!errors.name}
              className="fields__item"
              name="name"
              label="Имя"
              variant="standard"
              fullWidth />
            <TextField {...register('surname', {
              required: 'Field is required'
            })}
              helperText={errors.surname?.message}
              error={!!errors.surname}
              className="fields__item"
              name="surname"
              label="Фамилия"
              variant="standard"
              fullWidth />
            <TextField {...register('email', {
              required: 'Field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email is incorrect'
              }
            })}
              helperText={errors.email?.message}
              error={!!errors.email}
              className="fields__item"
              name="email"
              label="E-mail"
              variant="standard"
              fullWidth />
            <TextField {...register('password', {
              required: 'Field is required'
            })}
              helperText={errors.password?.message}
              error={!!errors.password}
              className="fields__item"
              name="password"
              label="Пароль"
              variant="standard"
              fullWidth />
          </div>
          <div className="row">
            <Button type="submit" variant="contained">Зарегистрироваться</Button>
            <Button onClick={handleClickClear} variant="contained" color="secondary">Очистить</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;