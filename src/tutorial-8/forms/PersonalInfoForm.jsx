import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const schema = yup.object().shape({
  name: yup.string().min(2, 'Слишком короткое имя'),
  surname: yup.string().min(2, 'Слишком короткая фамилия'),
  email: yup.string().email('Неверная почта').required('Укажите почту'),
  password: yup.string().min(6, 'Пароль должен быть не менее 6 символов').required(),
});

function PersonalInfoForm({ nextStep, onChangeFormValues }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(values) {
    onChangeFormValues(values);
    nextStep('address');
    handleClickClear();
  }

  function handleClickClear() {
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="fields">
        <TextField
          {...register('name')}
          helperText={errors.name?.message}
          error={!!errors.name}
          className="fields__item"
          label="Имя"
          variant="standard"
          fullWidth
        />
        <TextField
          {...register('surname')}
          helperText={errors.surname?.message}
          error={!!errors.surname}
          className="fields__item"
          label="Фамилия"
          variant="standard"
          fullWidth
        />
        <TextField
          {...register('email')}
          helperText={errors.email?.message}
          error={!!errors.email}
          className="fields__item"
          label="E-mail"
          variant="standard"
          fullWidth
        />
        <TextField
          {...register('password')}
          helperText={errors.password?.message}
          error={!!errors.password}
          className="fields__item"
          label="Пароль"
          variant="standard"
          fullWidth
        />
      </div>
      <div className="row buttons">
        <Button
          onClick={handleClickClear}
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}>
          Очистить
        </Button>
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Далее
        </Button>
      </div>
    </form>
  );
}

export default PersonalInfoForm;
