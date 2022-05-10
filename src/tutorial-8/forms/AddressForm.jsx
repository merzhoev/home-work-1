import React from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { TextField, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const schema = yup.object().shape({
  city: yup.string().required('Введите город'),
  street: yup.string().required('Введите улицу'),
  apartment: yup
    .number()
    .typeError('Номер квартиры должен быть числом')
    .integer('Номер квартиры должен быть целым числом')
    .positive('Номер квартиры не может быть отрицательным')
    .required('Введите номер квартиры'),
});

function AddressForm({ nextStep, onChangeFormValues }) {
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
    nextStep('/result');
    handleClickClear();
  }

  function handleClickClear() {
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="fields">
        <TextField
          {...register('city')}
          helperText={errors.city?.message}
          error={!!errors.city}
          className="fields__item"
          label="Город"
          variant="standard"
          fullWidth
        />
        <TextField
          {...register('street')}
          helperText={errors.street?.message}
          error={!!errors.street}
          className="fields__item"
          label="Улица"
          variant="standard"
          fullWidth
        />
        <TextField
          {...register('apartment')}
          helperText={errors.apartment?.message}
          error={!!errors.apartment}
          className="fields__item"
          label="Номер квартиры"
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

export default AddressForm;
