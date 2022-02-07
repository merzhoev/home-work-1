import React from 'react';
import { TextField, Button } from '@mui/material';

function Feedback({ handleInput, addComment, formControl }) {
  return (
    <div className="feedback">
      <h3 className="feedback__title">Обратная связь:</h3>
      <div className="feedback__form">
        <TextField
          onChange={handleInput}
          value={formControl.name}
          name="name"
          className="text-field"
          id="outlined-basic"
          label="Имя"
          variant="outlined"
        />
        <TextField
          onChange={handleInput}
          value={formControl.email}
          name="email"
          className="text-field"
          id="outlined-basic"
          label="Почта"
          variant="outlined"
        />
        <TextField
          onChange={handleInput}
          value={formControl.text}
          name="text"
          className="text-field"
          id="outlined-multiline-static"
          placeholder="Текст..."
          multiline
          rows={4}
        />
        <Button onClick={addComment} className="btn" variant="contained">
          Отправить
        </Button>
      </div>
    </div>
  );
}

export default Feedback;
